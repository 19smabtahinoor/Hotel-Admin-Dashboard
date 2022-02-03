import { Button } from '@mui/material';
import React from 'react';

function FormButton({ text }) {
    return (
        <Button variant="contained" 
        color="success"
        sx={{
            background:'var(--primary)',
            boxShadow:'none',
            padding:'9px 26px',
            textTransform:'capitalize',
            '&:hover': {
                boxShadow:'none'
            }
        }}
        >
        {text}
        </Button>
    );
}

export default FormButton;