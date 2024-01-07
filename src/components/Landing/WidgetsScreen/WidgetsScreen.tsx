import React from 'react';

import './WidgetsScreen.scss';

export interface IWidgetsScreen {}

export const WidgetsScreen: React.FC<IWidgetsScreen> = () => {
    return (
        <div className="grid grid-cols-12 items-center">
            <div className="col-start-2 col-span-5 flex flex-col text-text text-left">
                <div className="text-subtitle">Widgets for Personalized Productivity</div>
                <div className="text-regular mt-default">Elevate your organizational game with our customizable dashboard. Tailor your workspace to your needs, boosting productivity and maintaining focus effortlessly. Add a variety of widgets to create a truly personalized experience.</div>
            </div>
            <div className="col-start-8 col-span-full">
                <div className="rounded-3xl widgets-img h-[500px] w-[500px]"></div>
            </div>
            <div className="col-start-3 col-span-8 flex justify-start items-center mb-medium3">
                <div className="widget-image1 h-[300px] w-[300px] rounded-3xl"></div>
                <div className="ml-large3">
                    <div className="text-highlight font-semibold">Task Master</div>
                    <span className="italic">Stay on top of your daily goals. <br/>Add, prioritize, and check off tasks as you conquer your to-do list</span>
                </div>
            </div>
            <div className="col-start-3 col-span-8 flex justify-end text-text text-regular items-center mb-medium3">
                <div className="mr-large3 text-right">
                    <div className="text-highlight font-semibold">Agile Flow</div>
                    <span className="italic">Visualize your projects with a Kanban board. <br/>Drag and drop tasks through stages for seamless project management</span>
                </div>
                <div className="widget-image2 h-[300px] w-[450px] rounded-3xl"></div>
            </div>
            <div className="col-start-3 col-span-8 flex justify-start items-center">
                <div className="widget-image3 h-[300px] w-[300px] rounded-3xl"></div>
                <div className="ml-large3">
                    <div className="text-highlight font-semibold">Time Zen</div>
                    <span className="italic">Boost productivity with the Pomodoro technique. <br/>Break your work into intervals, staying focused and refreshed throughout your tasks</span>
                </div>
            </div>
        </div>
    )
};