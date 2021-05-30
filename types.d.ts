type Auth = {
    token:string
    user:AuthUser
}

type AuthUser = {
    name:string
    email:string
    level:number
}

type User = {
    name: string
    isLogged: boolean
    email: string
    level:number
}

type AuthNotification = {
    show: boolean
    text: string
}