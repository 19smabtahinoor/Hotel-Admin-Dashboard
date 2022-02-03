import { Box } from '@mui/material';
import React from 'react';
import AddHotelsForm from '../../components/Hotels/AddHotelsForm';
import PageHeading from '../../components/PageHeading';

function AddHotelPage(props) {
    return (
        <Box sx={{padding:'30px 15px'}}>

            {/* page heading  */}
            <PageHeading text="Add Hotel" />
            {/* form  */}
            <Box sx={{
                background:'#fff',
                borderRadius:'10px',
                padding:'25px',
                boxSizing:'borderBox',
                margin:'30px 0px'
            }}>
                <AddHotelsForm />
            </Box>
        </Box>
    );
}

export default AddHotelPage;