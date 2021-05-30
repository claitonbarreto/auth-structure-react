import { Server, Model, Response } from 'miragejs'

export default new Server({
    models: {
        user: Model
    },

    seeds(server) {
        server.db.loadData({
            users: [
                {email: 'teste@teste.com', password: '123123', level: 3}
            ]
        })
    },
    routes() {
        this.namespace = "api"
        this.get('user', () => {
            return {message: 'ok'}
        })

        this.post('auth', (schema, request) => {
            const body = JSON.parse(request.requestBody)
            const user = schema.db.users.findBy({email: body.email})
            if(!user) return new Response(404, {}, {error: {message: 'User Not Found'}})
            
            if(body.password === user.password) 
                return new Response(200, {}, user)

            return new Response(401, {}, {error: 'Not Authorized'})
        })
    }
}); 