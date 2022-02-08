import { Box } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';
import UpdateHotelsForm from '../../components/Hotels/UpdateHotelsForm';
import PageHeading from '../../components/PageHeading';

function UpdateHotelPage() {
    const {id} = useParams();
    
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
                <UpdateHotelsForm id={id} />
            </Box>
        </Box>
    );
}

export default UpdateHotelPage;