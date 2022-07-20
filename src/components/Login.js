import { signInWithPopup } from 'firebase/auth';
import React from 'react';
import { auth, provider } from '../firebase';
import { useNavigate } from 'react-router-dom';
import './Log.css';

const Login = ({ setIsAuth }) => {
    const navigate = useNavigate();
    const loginInWithGoogle = () => {
        // Googleでログイン
        signInWithPopup(auth, provider).then((result) => {
            localStorage.setItem('isAuth', true);
            setIsAuth(true);
            navigate('/');
        });
    };
    return (
        <div className='logArea'>
            <div className='log'>
                <p>ログインして始める</p>
                <button onClick={loginInWithGoogle}>Googleでログイン</button>
            </div>
        </div>
    );
};

export default Login;
