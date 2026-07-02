from fastapi import FastAPI
from app.api.schemas import ResearchRequest, ResearchResponse

app = FastAPI()


@app.get("/health")
def health():
    return {"status": "ok"}

@app.post("/research", response_model=ResearchResponse)
def research(request: ResearchRequest):
    return ResearchResponse(report=f"Research topic received: {request.topic}")
