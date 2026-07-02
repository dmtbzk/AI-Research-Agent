from langgraph.graph import StateGraph, START, END

from .nodes import planner_node, search_node
from .state import ResearchState


def build_research_graph():
    graph = StateGraph(ResearchState)

    graph.add_node("planner", planner_node)
    graph.add_node("search", search_node)

    graph.add_edge(START, "planner")
    graph.add_edge("planner", "search")
    graph.add_edge("search", END)

    return graph.compile()