import { useState } from "react"

export function Nickname ({nickname, setNickname}) {


    const [disabled, setDisabled] = useState(false)

    const nicknameSubmit = (e) => {
        e.preventDefault()
        setNickname(nickname)
        setDisabled(true)
    }

    return (
        <form onSubmit={nicknameSubmit}>
            <div className='d-flex mb-3'>
                <input type="text" className='form-control' placeholder='Nickname...' id='nickname' onChange={e => setNickname(e.target.value)} disabled={disabled}/>
                <button className='btn btn-success mx-3' type='submit' id='btn-nickname' disabled={disabled}>Establecer</button>
            </div>
        </form>
    )
}
