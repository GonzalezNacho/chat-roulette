import { useState } from "react"
import './LoginForm.css'
import { url } from '../assets/js/const'
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function Login({isLogin,user}) {
    const [body, setBody] = useState({email:'', password:''})
    const navigate = useNavigate();

    const inputChange = ({target}) => {
        const {name, value} = target
        setBody({
            ...body,
            [name]: value
        })  
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        axios.post(url + 'user/login', body)
        .then((res) => {
            console.log(res.data.status)
            console.log(res.data.user)
            user.current = res.data.user.user
            isLogin.current = true
            navigate("/chat")
        })
        .catch((err) => {
            if (err.response.status == 403) {
                alert (err.response.data.status)
            }
            console.log(err)
        })
    }



    return (
        <div className="conteiner vh-100 d-flex justify-content-center align-items-center">
            <div className="form p-4 w-25">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email">Email</label>
                        <input id='email' type="email" placeholder="Enter Email" className="form-control" name='email' value={body.email}  onChange={inputChange}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password">Password</label>
                        <input id='password' type="password" placeholder="Enter password" className="form-control" name='password' value={body.password} onChange={inputChange}/>
                    </div>
                    <button type="submit" className="btn btn-success">Login</button>
                </form>
            </div>
        </div>
    )
}