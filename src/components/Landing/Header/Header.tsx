import React from 'react';

import { Box, Button } from '@mui/material';

import { NavBar } from '../NavBar/NavBar';

import './Header.scss';

export interface IHeader {
    onClick: (login: boolean) => void;
}

export const Header: React.FC<IHeader> = ({ onClick }) => {
    return (
        <div className='grid grid-cols-12 h-header items-center bg-[#ffffff]'>
            <div className='logo bg-text justify-self-center'></div>
            <NavBar></NavBar>
            <div className='col-start-11 col-span-2 flex justify-start'>
                <Box sx={{ '& button': { m: 1, borderRadius: '20px' } }}>
                    <Button
                        variant='outlined'
                        color='primary'
                        onClick={() => onClick(true)}
                    >
                        Login
                    </Button>
                    <Button variant='contained' onClick={() => onClick(false)}>
                        Sign Up
                    </Button>
                </Box>
            </div>
        </div>
    );
};
