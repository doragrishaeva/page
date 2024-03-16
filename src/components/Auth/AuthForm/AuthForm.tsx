import React from 'react';

import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { useAuthFormConfig } from '../../../hooks';
import { CustomTextField as TextField } from '../../common/TextField/TextField';

export interface IAuthForm {
    isLogin: boolean;
}

export const AuthForm: React.FC<IAuthForm> = ({ isLogin }) => {
    const navigate = useNavigate();

    const {
        isEmail,
        isPassword,
        isUsername,
        isNewPassword,
        isConfirmNewPassword,
    } = useAuthFormConfig(isLogin);
    const texts = {
        login: {
            title: 'Login',
            description:
                'Welcome back! Please enter your credentials to access your account.',
        },
        signUp: {
            title: 'Sign up',
            description:
                'Welcome to Page! Lets get started by creating your account.',
        },
    };

    const goToDashboard = () => {
        navigate('/page/dashboard');
    };

    return (
        <div className='flex flex-col basis-full justify-center p-large3 items-center'>
            <div className='text-subtitle text-text py-default'>
                {isLogin ? texts.login.title : texts.signUp.title}
            </div>
            <div className='text-text text-regular'>
                {isLogin ? texts.login.description : texts.signUp.description}
            </div>
            <div className='flex flex-col w-1/2'>
                {isEmail && (
                    <TextField id='email' label='Email' variant='outlined' />
                )}
                {isUsername && (
                    <TextField
                        id='username'
                        label='Username'
                        variant='outlined'
                    />
                )}
                {isPassword && (
                    <TextField
                        id='password'
                        label='Password'
                        type='password'
                        variant='outlined'
                    />
                )}
                {isNewPassword && (
                    <TextField
                        id='newPassword'
                        label='New Password'
                        type='password'
                        variant='outlined'
                    />
                )}
                {isConfirmNewPassword && (
                    <TextField
                        id='confirmNewPassword'
                        label='Confirm New Password'
                        type='password'
                        variant='outlined'
                    />
                )}
            </div>
            <Button
                onClick={() => goToDashboard()}
                variant='contained'
                size='large'
                sx={{
                    marginTop: '20px',
                    borderRadius: '40px',
                    width: '50%',
                    height: '56px',
                }}
            >
                Let's go
            </Button>
        </div>
    );
};
