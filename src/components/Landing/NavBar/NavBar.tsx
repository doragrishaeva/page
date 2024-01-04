import React from 'react';

export interface INavBar {}

interface INavItem {
    id: number;
    text: string;
}

export const NavBar: React.FC<INavBar> = () => {
    const navItems: INavItem[] = [
        { id: 1, text: 'Dashboard' },
        { id: 2, text: 'Widgets' },
        { id: 3, text: 'Blog' }
    ];

    return (
        <div className="flex justify-between col-start-2 col-span-2 mx-default text-text text-regular">
            {navItems.map(item => {
                return <div className="cursor-pointer hover:text-highlight transition-colors" key={item.id}>{item.text}</div>
            })}
        </div>
    )
};