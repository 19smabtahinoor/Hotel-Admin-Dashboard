import { Box } from '@mui/material';
import React from 'react';
import HotelsTable from '../../components/Hotels/HotelsTable';
import PageHeading from '../../components/PageHeading';

function Hotels() {
    return (
        <Box sx={{ padding: '30px 15px' }}>
            {/* page heading  */}
            <PageHeading text="Hotels" />
            {/* form  */}
            <Box sx={{
                background: '#fff',
                borderRadius: '10px',
                padding: '25px',
                boxSizing: 'borderBox',
                margin: '30px 0px'
            }}>
                <HotelsTable />
            </Box>
        </Box>
    );
}

export default Hotels;