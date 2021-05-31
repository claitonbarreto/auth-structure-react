import { Model, Response, createServer } from 'miragejs'

export function makeServer({environment = 'development'} = {}) {
    const server = createServer({
        environment,
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
                
                if(!user) return new Response(401, { contentType: 'application/json' }, {error: {message: 'User Not Found'}})
                
                if(body.password === user.password) 
                    return new Response(200, { contentType: 'application/json' }, user)
    
                return new Response(401, { contentType: 'application/json' }, {error: 'Not Authorized'})
            })
        }
    }) ;

    return server
}