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
        <h1>Login</h1>
        <div className='login-form'>
            <label>
                E-mail
                <input type='email' onChange={changeEmail}/>
            </label>
            <label>
                Senha
                <input type='password' onChange={changePassword} />
            </label>
            <button onClick={send}>Entrar</button>
            {hasError ? <p>Usuário inválido</p> : null}
        </div>
    </div>
  );

}

export default LoginPage;
