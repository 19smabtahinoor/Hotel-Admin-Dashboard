import { Box } from '@mui/material';
import React from 'react';
import PageHeading from '../../components/PageHeading';
import AddBookingForm from '../../components/Reservations/AddBookingForm';

function AddBookingPage(props) {
    return (
        <Box sx={{ padding: '30px 15px' }}>

            {/* page heading  */}
            <PageHeading text="Add Reservation" />
            {/* form  */}
            <Box sx={{
                background: '#fff',
                borderRadius: '10px',
                padding: '25px',
                boxSizing: 'borderBox',
                margin: '30px 0px'
            }}>
                <AddBookingForm />
            </Box>
        </Box>
    );
}

export default AddBookingPage;