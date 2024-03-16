import React, { useState } from 'react';

import { useDrop } from 'react-dnd';

import { Widget } from '../../widgets/Widget/Widget';

export interface IDashboard {}

export const Dashboard: React.FC<IDashboard> = () => {
    const [widgets, setWidgets] = useState([]);

    const addWidget = React.useCallback(() => {
        // Using lodash's uniqueId function to generate unique IDs
        const newWidgetId = 1;
        const newWidget = {
            id: newWidgetId,
            // Initial position for simplicity; you might want to calculate or randomize this
            left: 100,
            top: 100,
        };
        setWidgets([...widgets, newWidget]);
    }, [widgets]);

    const moveWidget = React.useCallback((id, left, top) => {
        setWidgets((prevWidgets) =>
            prevWidgets.map((widget) =>
                widget.id === id ? { ...widget, left, top } : widget,
            ),
        );
    }, []);

    const [, drop] = useDrop(() => ({
        accept: 'widget',
        drop(item, monitor) {
            const delta = monitor.getDifferenceFromInitialOffset();
            const left = Math.round(item.left + delta.x);
            const top = Math.round(item.top + delta.y);
            moveWidget(item.id, left, top);
            return undefined;
        },
    }));

    return (
        <div>
            <button onClick={addWidget}>Add Widget</button>
            <div
                ref={drop}
                style={{ width: '100%', height: '500px', position: 'relative' }}
            >
                {widgets.map((widget) => (
                    <Widget
                        key={widget.id}
                        id={widget.id}
                        left={widget.left}
                        top={widget.top}
                    />
                ))}
            </div>
        </div>
    );
};
