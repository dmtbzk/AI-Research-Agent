def planner_node(state):

    print(state)

    state["plan"] = f"Research about {state['topic']}"

    return state