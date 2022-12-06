import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/auth';
import api from '../../api';
import './style.css';

function LoginPage() {
    const navigate = useNavigate();
    const { user, setUser } = useAuth(); 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [hasError, setHasError] = useState(false);

    function changeEmail(event){
        const userEmail = event.target.value;

        setEmail(userEmail);
    }

    function changePassword(event){
        const userPass = event.target.value;
        setPassword(userPass);
    }

    function send(){
        console.log(email, password);
        api.login(email, password).then((data)=>{
            setUser(data);
            navigate('/');
        }).catch(()=>{setHasError(true)});
    }

    return (
        <div className='login-container'>
            
            <h1>Sign In</h1>
            
            <div className='login-input-wrapper'>
                <i className="gg-mail"></i>
                <input required type='email' onChange={changeEmail} placeholder='E-mail'/>
            </div>

            <div className='login-input-wrapper'>
                <i className="gg-lock"></i>
                <input required type='password' onChange={changePassword} placeholder='Password'/>
            </div>
            
            <button onClick={send}>Login</button>
            {hasError ? <p className="invalid-user-alert">Usuário inválido!</p> : null}
            
        </div>
    );

}

export default LoginPage;
