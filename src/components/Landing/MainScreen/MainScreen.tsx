import React from 'react';

import './MainScreen.scss';
import { Button } from '@mui/material';

export interface IMainScreen {}

export const MainScreen: React.FC<IMainScreen> = () => {
    return (
        <div className="grid grid-cols-12 items-center h-[calc(100vh-90px)]">
            <div className="col-start-1 col-span-6 flex flex-col text-text">
                <div className="text-title mb-medium1"><span className="text-highlight">Page:</span> Your Personalized Productivity Dashboard</div>
                <div className="text-regularPlus"><span className="text-highlight">Welcome to Page</span>, the customized dashboard designed for ultimate organization, productivity, and focus. With Page, you have the power to tailor your dashboard according to your unique needs. <div className="mt-default">Add custom widgets such as a calendar, drag-and-drop board, to-do list, pomodoro tracker, and more to create a personalized workspace that enhances your efficiency and concentration throughout the day.</div></div> 
                <Button variant="contained" size="large"  sx={{ marginTop: '32px', borderRadius: '20px', width: '200px' }}>Get Started</Button>
            </div>
            <div className="col-start-8 col-span-5 ml-large3">
                <div className="rounded-full main-img h-[500px] w-[500px]"></div>
            </div>
        </div>
    )
};