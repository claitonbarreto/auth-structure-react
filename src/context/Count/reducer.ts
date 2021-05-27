type CountType = {
    count: number
}

export type CountAction = 
| {type: "ADD", payload: number}
| {type: "INCREMENT"}


export const countReducer = (state: CountType, action: CountAction) : CountType => {

    switch (action.type) {
        case "ADD":
            return { count: state.count + action.payload}
        case "INCREMENT":
            return {count: state.count+ 1}
        default:
            return state
    }
}

