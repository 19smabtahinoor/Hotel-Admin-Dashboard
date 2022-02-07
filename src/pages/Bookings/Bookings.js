import { Box } from '@mui/material';
import React from 'react';
import BookingsTable from '../../components/Bookings/BookingsTable';
import PageHeading from '../../components/PageHeading';

function Bookings(props) {
    return (
        <Box sx={{ padding: '30px 15px' }}>
            {/* page heading  */}
            <PageHeading text="Reservations" />
            {/* form  */}
            <Box sx={{
                background: '#fff',
                borderRadius: '10px',
                padding: '25px',
                boxSizing: 'borderBox',
                margin: '30px 0px'
            }}>
                <BookingsTable />
            </Box>
        </Box>
    );
}

export default Bookings;