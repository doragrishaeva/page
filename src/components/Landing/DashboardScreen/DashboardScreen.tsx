import React from 'react';

import './DashboardScreen.scss';

export interface IDashboardScreen {}

export const DashboardScreen: React.FC<IDashboardScreen> = () => {
    return (
        <div className="grid grid-cols-12 items-center">
        <div className="col-span-6">
            <div className="rounded-lg dashboard-img h-[600px] w-[650px]"></div>
        </div>
        <div className="col-start-8 col-span-6 flex flex-col text-text text-right">
            <div className="text-subtitle">Customized Dashboard for Enhanced Focus and Productivity</div>
            <div className="text-regular mt-default"><span className="text-highlight">Page</span> offers a personalized dashboard that empowers users to enhance organization, productivity, and focus. Create your unique workspace with customizable widgets such as a calendar, drag-and-drop board, to-do list, pomodoro tracker, and more. Stick notes anywhere on your dashboard, even above widgets, for a truly tailored and efficient daily experience.</div>
        </div>
        <div className="col-start-2 col-span-10 flex flex-wrap mt-large3 justify-between items-center text-text">
                <div className="flex flex-col items-center justify-center">
                    <div className="image1 h-[300px] w-[300px] rounded-full"></div>
                    <span className="my-medium3 text-regulat text-highlight font-medium max-w-[300px] text-center">Ideal for individuals seeking to boost focus and productivity</span>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <div className="image2 h-[300px] w-[300px] rounded-full"></div>
                    <span className="my-medium3 text-regular text-highlight font-medium max-w-[300px] text-center">Perfect for students aiming to study with concentration and patience</span>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <div className="image3 h-[300px] w-[300px] rounded-full"></div>
                    <span className="my-medium3 text-regular text-highlight font-medium max-w-[300px] text-center">Facilitates group collaboration for productive teamwork</span>  
                </div>
            </div>
    </div>
    )
};