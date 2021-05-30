import axios from 'axios'

class AuthService {

    async auth(email:string, password:string): Promise<Auth> {
        const { data } = await axios.post('api/auth', {email, password})
        
        const AuthObject = {
            token: 'YOUR_APP_TOKEN',
            user: {
                email: data.email,
                level: data.level,
                name: data.name
            }
        }

        return AuthObject
    }

}

export default new AuthService()