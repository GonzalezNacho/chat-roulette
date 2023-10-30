import { useState } from "react"
import LogoutButton from "./Logout"
import LoginButton  from "./Login"
import { useAuth0 } from "@auth0/auth0-react";

export function Nickname ({ setNickname}) {


    const [disabled, setDisabled] = useState(false)
    const { user, isAuthenticated, isLoading} = useAuth0();

    if (isAuthenticated) {
        setNickname(user.name)
    }

    return ( 
            isAuthenticated ? (
                <> 
                    <div>
                        <img src={user.picture} alt={user.name} />
                        <h2>{user.name}</h2>
                        <p>{user.email}</p>
                    </div>
                    <LogoutButton/>
                </>
            ) : (
                <LoginButton/>
        ))
}
