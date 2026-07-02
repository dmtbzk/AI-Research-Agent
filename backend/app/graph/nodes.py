from openai import OpenAI
from dotenv import load_dotenv

from app.graph.state import ResearchState
from app.prompts.research_prompt import RESEARCH_PLANNER_PROMPT
from playwright.sync_api import sync_playwright
from urllib.parse import quote_plus, urlparse, parse_qs, unquote

load_dotenv()

client = OpenAI()


def planner_node(state):

    prompt = RESEARCH_PLANNER_PROMPT.format(topic=state["topic"])

    response = client.responses.create(
        model="gpt-4o-mini",
        input=prompt,
    )
    state["plan"] = response.output_text
    print("Planner workflow completed")
    return state

def search_node(state: ResearchState):

    query = state["topic"]

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=False)
        page = browser.new_page()
        search_url = f"https://html.duckduckgo.com/html/?q={quote_plus(query)}"
        page.goto(search_url, wait_until="domcontentloaded")
        results = page.locator("a.result__a")
        count = results.count()
        search_results = []

        for i in range(min(count, 5)):

            item = results.nth(i)
            search_results.append({
                "title": item.inner_text(),
                "url": clean_duckduckgo_url(item.get_attribute("href"))
            })

        browser.close()

    state["search_results"] = search_results
    print("===== SEARCH RESULTS =====")

    print(search_results)

    print("==========================")
    return state

def clean_duckduckgo_url(url: str):
    if not url:
        return None

    parsed = urlparse(url)
    query_params = parse_qs(parsed.query)

    if "uddg" in query_params:
        return unquote(query_params["uddg"][0])

    if url.startswith("//"):
        return "https:" + url

    return url