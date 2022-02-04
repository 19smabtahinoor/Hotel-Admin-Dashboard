import { Box } from '@mui/material';
import React from 'react';
import UpdateHotelsForm from '../../components/Hotels/UpdateHotelsForm';
import PageHeading from '../../components/PageHeading';

function UpdateHotelPage(props) {
    return (
        <Box sx={{ padding: '30px 15px' }}>

            {/* page heading  */}
            <PageHeading text="Update Hotel" />
            {/* form  */}
            <Box sx={{
                background: '#fff',
                borderRadius: '10px',
                padding: '25px',
                boxSizing: 'borderBox',
                margin: '30px 0px'
            }}>
                <UpdateHotelsForm />
            </Box>
        </Box>
    );
}

export default UpdateHotelPage;