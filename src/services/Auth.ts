import axios from 'axios'

class AuthService {

    async auth(email:string, password:string): Promise<Auth>  {
        
            const response = await axios.post('api/auth', {email, password})
            
            const AuthObject = {
                token: 'YOUR_APP_TOKEN',
                user: {
                    email: response.data.email,
                    level: response.data.level,
                    name: response.data.name
                }
            }
    
            return AuthObject
    }

}

export default new AuthService()