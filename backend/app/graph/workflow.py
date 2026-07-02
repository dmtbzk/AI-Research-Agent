from langgraph.graph import StateGraph, START, END
from .nodes import planner_node
from .state import ResearchState

def build_research_graph():
    graph = StateGraph(ResearchState)

    graph.add_node("planner", planner_node)
    

    graph.add_edge(START, "planner")
    graph.add_edge("planner", END)

    return graph.compile()
