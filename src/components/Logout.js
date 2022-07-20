import { signOut } from 'firebase/auth';
import React from 'react';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import './Log.css';

const Logout = ({ setIsAuth }) => {
    const navigate = useNavigate();
    const logout = () => {
        // ログアウト
        signOut(auth).then(() => {
            localStorage.clear();
            setIsAuth(false);
            navigate('/login');
        });
    };
    return (
        <div className='logArea'>
            <div className='log'>
                <p>ログアウトする</p>
                <button onClick={logout}>ログアウト</button>
            </div>
        </div>
    );
};

export default Logout;
