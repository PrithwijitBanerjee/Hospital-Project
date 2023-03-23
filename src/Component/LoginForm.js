import React from 'react'
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
export default function LoginForm() {
    const [name, setName] = useState(" ");
    const [password, setPassword] = useState(" ");
    const [email, setEmail] = useState(" ");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const Navigation=useNavigate();
    const login = (event) => {
        event.preventDefault();
        console.log(name, password, email);
        const userData = {
            myName: name,
            myPassword: password,
            myEmail: email
        };
        localStorage.setItem('token_info', JSON.stringify(userData));
        setName(' ');
        setPassword(' ');
        setEmail(' ');
        setIsLoggedIn(true);
        Navigation('/');    
    }
    const logout = () => {
        localStorage.removeItem('token_info');
        setIsLoggedIn(false);
    }
    return <>
        <div style={{padding:60, margin:'auto', display:'block'}}>
            {
                (!isLoggedIn) ? (
                    <>
                        <div style={{  padding: 30 }}>
                            <h1 className='text-center text-primary'><b>Login Form</b></h1>
                            <form onSubmit={(event) => {
                                event.preventDefault();
                                window.alert("Welcome" + name)
                            }}>
                                <div class="input-group flex-nowrap" style={{ width: 800, margin:50 }}>
                                    <span class="input-group-text" id="addon-wrapping">@</span>
                                    <input type="text" class="form-control" onChange={(e) => { setName(e.target.value) }} required placeholder="Enter Your Name" aria-label="Username" aria-describedby="addon-wrapping" />
                                </div>
                                <div class="input-group flex-nowrap" style={{ width: 800, margin:50 }}>
                                    <input type="password" class="form-control" onChange={(e) => { setPassword(e.target.value) }}  required placeholder="Enter Your Password" aria-label="Username" aria-describedby="addon-wrapping" />
                                </div>
                                <div class="input-group flex-nowrap" style={{ width: 800, margin:50 }}>
                                    <input type="email" class="form-control" onChange={(e) => { setEmail(e.target.value) }} required  placeholder="Enter Your Email" aria-label="Username" aria-describedby="addon-wrapping" />
                                </div>
                                <div>
                                    <button type="button" class="btn btn-outline-primary"  style={{margin:'auto', display:'block'}} onClick={login}>Log in</button>
                                </div>
                            </form>
                        </div>
                    </>
                ) : (
                    <>
                        <h2><b>You are Logged in </b></h2>
                        <form>
                            <button onClickCapture={logout}>Log Out</button>
                        </form>
                    </>
                )
            }
        </div>
    </>
}    