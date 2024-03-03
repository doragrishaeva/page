import React from 'react';

import './Dashboard.page.scss';
import { ToDoList } from '../../components/widgets/ToDoList/ToDoList';
import { DndProvider } from 'react-dnd';
import { Dashboard } from '../../components/Dashboard';
import { HTML5Backend } from 'react-dnd-html5-backend';

export interface IDashboardPage {}

export const DashboardPage: React.FC<IDashboardPage> = () => {
    return (
        <DndProvider backend={HTML5Backend}>
            <Dashboard />
        </DndProvider>
    )
};