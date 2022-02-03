import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

function TextArea({label}) {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography sx={{ marginBottom: 1 }}>{label}</Typography>
            <textarea placeholder={label}
                className="textArea"
            ></textarea>
        </Box>
    );
}

export default TextArea;