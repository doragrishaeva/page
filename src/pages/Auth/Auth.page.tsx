import React from 'react';
import { AuthForm } from '../../components/Auth';

import './Auth.page.scss';
import { useLocation } from 'react-router-dom';

export interface IAuthPage {}

export const AuthPage: React.FC<IAuthPage> = () => {
    const location = useLocation();
    const { login } = location.state;
    
    return (
        <div className='flex'>
            <div className='form-bg rounded-r-lg'></div>
            <AuthForm isLogin={login}></AuthForm>
        </div>
    )
};