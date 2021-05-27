export type User = {
    name: string
    isLogged: boolean
}

export type UserAction = 
| {type: "SIGNIN"}
| {type: "SET_USERNAME", payload: string}

export const userReducer = (state: User, action:UserAction) : User => {
    switch (action.type) {
        case "SIGNIN":
            return {...state, isLogged: true}
        case "SET_USERNAME":
            return {...state, name: action.payload}
        default:
            return state
    }
}
