"use client";
import Link from "next/link";
import React, { useEffect } from 'react';
import { useRouter } from "next/navigation";
//import {axios} from "axios";


export default function SignUpPage(){
    const router = useRouter();
    const [user, setUser] = React.useState({
        email:"",
        password:"",
        username:"",
    })
    const [buttonDisabled, setButtonDisabled] = React.useState(false);

    const onSignup = async () => {

    }

    useEffect(() =>{
        if(user.email.length> 0 && user.password.length>0 && user.username.length>0){
            setButtonDisabled(false);
        }else{
            setButtonDisabled(true);
        }
    }, [user])
    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>SignUp</h1>
            <hr/>
            <label htmlFor="username">username</label>
            <input 
                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
                id="username"
                type="text"
                value={user.username}
                onChange={(e) => setUser({...user, username:e.target.value})}
                placeholder="username"
            />
            <label htmlFor="email">email</label>
            <input 
                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
                id="email"
                type="email"
                value={user.email}
                onChange={(e) => setUser({...user, email:e.target.value})}
                placeholder="email"
            />
             <label htmlFor="password">password</label>
            <input 
                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
                id="password"
                type="password"
                value={user.password}
                onChange={(e) => setUser({...user, password:e.target.value})}
                placeholder="password"
            />
            <button 
            onClick={SignUpPage}
            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">
                {buttonDisabled ? "No signup" : "Signup"}
            </button>
            <Link href="/login">Visit login page</Link>
        </div>
    )
}