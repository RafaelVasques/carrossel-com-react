import React from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api";
import { useAuth } from '../../contexts/auth';
import "./style.css";

export default function LoginMenu (){
    const navigate = useNavigate();
    const { user, setUser } = useAuth(); 


    function login(){
        navigate('/admin');
    }

    function logout(){
        api.logout();
        setUser(undefined);
    }
    console.log(user)
    return (
        <div className='login-menu'>
            {
                user?
                    <>
                        <div className="welcome-message">{user.user}</div>
                        <div className="login-logout" onClick={logout}>Logout</div>
                    </>
                :
                    <div className="login-logout" onClick={login}>Login</div>
            }
        </div>
    );
}