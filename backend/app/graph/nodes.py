from openai import OpenAI
from dotenv import load_dotenv

from app.graph.state import ResearchState
from app.prompts.research_prompt import RESEARCH_PLANNER_PROMPT

load_dotenv()

client = OpenAI()


def planner_node(state):

    prompt = RESEARCH_PLANNER_PROMPT.format(topic=state["topic"])

    response = client.responses.create(
        model="gpt-4o-mini",
        input=prompt,
    )
    state["plan"] = response.output_text
    
    return state