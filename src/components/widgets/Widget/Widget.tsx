import React from 'react';

import { useDrag } from 'react-dnd';

export interface IWidget {
    id: number;
    left: any;
    top: any;
}

export const Widget: React.FC<IWidget> = ({ id, left, top }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'widget',
        item: { id, left, top },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

    return (
        <div
            ref={drag}
            style={{
                position: 'absolute',
                left,
                top,
                width: '100px',
                height: '100px',
                backgroundColor: 'skyblue',
                opacity: isDragging ? 0.5 : 1,
                cursor: 'move',
            }}
        >
            Widget {id}
        </div>
    );
};
