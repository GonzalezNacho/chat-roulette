import { useState } from "react"
import './LoginForm.css'

export default function Login() {
    const [body, setBody] = useState({email:'', password:''})

    const inputChange = ({target}) => {
        const {name, value} = target
        setBody({
            ...body,
            [name]: value
        })  
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(body)
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