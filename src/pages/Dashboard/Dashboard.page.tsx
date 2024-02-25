import React from 'react';

import { Pixi } from '../../components/Dashboard';
import './Dashboard.page.scss';

export interface IDashboardPage {}

export const DashboardPage: React.FC<IDashboardPage> = () => {
    return <div className='wrapper'>
        <Pixi></Pixi>
    </div>;
};