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

    return (
        <div className='login-menu'>
            {
                user?
                    <div onClick={logout}>Logout</div>
                :
                    <div onClick={login}>Login</div>
            }
        </div>
    );
}