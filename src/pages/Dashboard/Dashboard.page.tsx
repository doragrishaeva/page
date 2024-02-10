import React from 'react';

import './Dashboard.page.scss';

export interface IDashboardPage {}

export const DashboardPage: React.FC<IDashboardPage> = () => {
    return <div className='wrapper'></div>;
};