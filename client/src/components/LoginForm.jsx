import { useState, useContext } from "react"
import './LoginForm.css'
import { url } from '../assets/js/const'
import axios from "axios"
import { UserContext } from "../context/user"
import { loginToStorage } from "../assets/js/localStorage"
import { useNavigate } from "react-router-dom"

export default function Login() {
    const [body, setBody] = useState({email:'', password:''})
    const { setLogin } = useContext(UserContext)
    const navigate = useNavigate()
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
            const user =res.data.user.user
            console.log(res.data.status)
            console.log(res.data.user)
            setLogin({
                user: user,
                isLogin: true
            })
            loginToStorage({user, isLogin: true})
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