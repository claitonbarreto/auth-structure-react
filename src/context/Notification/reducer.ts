export type NotificationAction = 
| {type: "SHOW_NOTIFICATION", payload: string}
| {type: "CLOSE_NOTIFICATION"}


export const countReducer = (state: AuthNotification, action: NotificationAction) : AuthNotification => {

    switch (action.type) {
        case "SHOW_NOTIFICATION":
            return {show: true, text: action.payload} 
        case "CLOSE_NOTIFICATION":
            return {show: false, text: ''}
        default:
            return state
    }
}

