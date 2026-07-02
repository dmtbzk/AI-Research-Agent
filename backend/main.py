from fastapi import FastAPI
from app.api.schemas import ResearchRequest
from app.graph.workflow import build_research_graph

app = FastAPI()

research_graph = build_research_graph()


@app.get("/health")
def health():
    return {"status": "ok"}


@app.post("/research")
def research(request: ResearchRequest):
    result = research_graph.invoke({
        "topic": request.topic,
        "plan": "",
        "search_results": [],
        "report": ""
    })

    return result