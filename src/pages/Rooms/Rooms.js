import { Box } from '@mui/material';
import React from 'react';
import PageHeading from '../../components/PageHeading';
import RoomsTable from '../../components/Rooms/RoomsTable';

function Rooms() {
    return (
        <Box sx={{ padding: '30px 15px' }}>
            {/* page heading  */}
            <PageHeading text="Rooms" />
            {/* table  */}
            <Box sx={{
                background: '#fff',
                borderRadius: '10px',
                padding: '25px',
                boxSizing: 'borderBox',
                margin: '30px 0px'
            }}>
                <RoomsTable />
            </Box>
        </Box>
    );
}

export default Rooms;