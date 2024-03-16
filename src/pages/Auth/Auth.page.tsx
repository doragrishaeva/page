import React from 'react';

import { useLocation } from 'react-router-dom';

import { AuthForm } from '../../components/Auth';
import './Auth.page.scss';

export interface IAuthPage {}

export const AuthPage: React.FC<IAuthPage> = () => {
    const location = useLocation();
    const { login } = location.state;

    return (
        <div className='flex'>
            <div className='form-bg rounded-r-lg'></div>
            <AuthForm isLogin={login}></AuthForm>
        </div>
    );
};
