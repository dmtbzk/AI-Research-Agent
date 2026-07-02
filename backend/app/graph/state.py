from typing import TypedDict


class ResearchState(TypedDict):
    topic: str
    plan: str
    search_results: list
    report: str