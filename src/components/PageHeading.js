import { Box } from '@mui/material';
import React from 'react';
import BreadCrumb from './BreadCrumb';

function PageHeading({text}) {
    return (
        <>
            {/* page heading  */}
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexDirection: 'row'
            }}>
                <h1 style={{ fontSize: '30px',color:'var(--primary)' }}>{text}</h1>
                <BreadCrumb />
            </Box>
        </>
    );
}

export default PageHeading;