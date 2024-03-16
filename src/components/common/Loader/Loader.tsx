import React from 'react';

import { BallTriangle } from 'react-loader-spinner';
export interface ILoader {}

export const Loader: React.FC<ILoader> = () => {
    return (
        <BallTriangle
            height={100}
            width={100}
            radius={5}
            color='#8808cb'
            ariaLabel='ball-triangle-loading'
            wrapperStyle={{}}
            wrapperClass='flex justify-center items-center w-screen h-screen'
            visible={true}
        />
    );
};
