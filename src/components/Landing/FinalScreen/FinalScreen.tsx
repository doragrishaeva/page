import React from 'react';

import './FinalScreen.scss';
import { Button } from '@mui/material';

export interface IFinalScreen {
    onClick: () => void;
}

export const FinalScreen: React.FC<IFinalScreen> = ({ onClick }) => {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center text-text">
            <div className="text-title mb-medium1 text-highlight">Boost Your Day</div>
            <div className="text-subtitle">Amplify Your Daily Performance</div> 
            <div className="text-regular plus max-w-[750px]">Supercharge your routine with Page. Elevate your day, boost your focus, and achieve more than ever. Unleash the potential within you and experience a heightened sense of accomplishment. Ready to boost your day? Join Page now!</div>
            <Button onClick={() => onClick()} variant="contained" size="large"  sx={{ marginTop: '32px', borderRadius: '20px', width: '200px' }}>Try it Now</Button>
        </div>
    )
};