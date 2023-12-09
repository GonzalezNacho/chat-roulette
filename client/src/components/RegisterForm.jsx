import { useState } from "react"
import axios from "axios"
import { url } from "../assets/js/const"
import './LoginForm.css'

export default function Register() {
    const [body, setBody] = useState({name:'',lastname:'',user:'',email:'', password:''})

    const inputChange = ({target}) => {
        const {name, value} = target
        setBody({
            ...body,
            [name]: value
        })  
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        axios.post(url + 'user', body).then((res)=> {
            alert(res.data.status)
        })
    }



    return (
        <div className="conteiner vh-100 d-flex justify-content-center align-items-center">
            <div className="form p-4 w-25">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name">Name</label>
                        <input id='name' type="text" placeholder="Enter name" className="form-control" name='name' value={body.name}  onChange={inputChange}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="lastname">Last Name</label>
                        <input id='lastname' type="text" placeholder="Enter lastname" className="form-control" name='lastname' value={body.lastname}  onChange={inputChange}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="user">User</label>
                        <input id='user' type="text" placeholder="Enter user" className="form-control" name='user' value={body.user}  onChange={inputChange}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">Email</label>
                        <input id='email' type="email" placeholder="Enter Email" className="form-control" name='email' value={body.email}  onChange={inputChange}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password">Password</label>
                        <input id='password' type="password" placeholder="Enter password" className="form-control" name='password' value={body.password} onChange={inputChange}/>
                    </div>
                    <button type="submit" className="btn btn-success">Sing Up</button>
                </form>
            </div>
        </div>
    )
}