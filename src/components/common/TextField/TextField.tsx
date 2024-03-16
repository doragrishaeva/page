import React from 'react';

import TextField from '@mui/material/TextField';

export const CustomTextField = (props: any) => {
    return (
        <TextField
            {...props}
            sx={{
                '& .MuiOutlinedInput-root': {
                    borderRadius: '40px',
                },
                marginTop: '20px',
                ...props.sx,
            }}
        />
    );
};
