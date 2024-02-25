import React from 'react';

import { DashboardScreen, FinalScreen, Header, MainScreen, WidgetsScreen } from '../../components/Landing';
import { useNavigate } from 'react-router-dom';

export interface ILandingPage {}

export const LandingPage: React.FC<ILandingPage> = () => {
    const navigate = useNavigate();

    const goToAuth = (login: boolean = false) => {
        const stateParam = { login };
        navigate('/page/auth', { state: stateParam });
    };
    
    return (
        <div className="grid grid-cols-12">
            <div className="col-span-full sticky top-0 z-[1]">
                <Header onClick={goToAuth}></Header>
            </div>
            <div className="col-start-2 col-end-12">
                <MainScreen onClick={goToAuth}></MainScreen>
            </div>
            <div className="mb-large3 col-start-2 col-end-12">
                <DashboardScreen></DashboardScreen>
            </div>
            <div className="bg-secondary col-span-full pb-large3">
                <WidgetsScreen></WidgetsScreen>
            </div>
            <div className="col-start-2 col-end-12">
                <FinalScreen onClick={goToAuth}></FinalScreen>
            </div>
        </div>
    );
};