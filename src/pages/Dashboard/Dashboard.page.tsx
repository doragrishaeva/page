import React from 'react';

import './Dashboard.page.scss';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { Dashboard } from '../../components/Dashboard';
import { ToDoList } from '../../components/widgets/ToDoList/ToDoList';

export interface IDashboardPage {}

export const DashboardPage: React.FC<IDashboardPage> = () => {
    return (
        <DndProvider backend={HTML5Backend}>
            <ToDoList></ToDoList>
            {/* <Dashboard /> */}
        </DndProvider>
    );
};
