import { Box } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';
// import UpdateBookingForm from '../../components/Reservations/UpdateBookingForm';
import PageHeading from '../../components/PageHeading';
import UpdateBookingForm from '../../components/Reservations/UpdateBookingForm';


function UpdateBookingPage(props) {
    const { id } = useParams();

    return (
        <Box sx={{ padding: '30px 15px' }}>

            {/* page heading  */}
            <PageHeading text="Update Reservation" />
            {/* form  */}
            <Box sx={{
                background: '#fff',
                borderRadius: '10px',
                padding: '25px',
                boxSizing: 'borderBox',
                margin: '30px 0px'
            }}>
                <UpdateBookingForm id={id} />
            </Box>
        </Box>
    );
}

export default UpdateBookingPage;