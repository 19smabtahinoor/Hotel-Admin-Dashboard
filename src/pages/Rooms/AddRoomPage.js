import { Box } from '@mui/material';
import React from 'react';
import PageHeading from '../../components/PageHeading';
import AddRoomForm from '../../components/Rooms/AddRoomForm';

function AddRoomPage(props) {
    return (
        <Box sx={{ padding: '30px 15px' }}>

            {/* page heading  */}
            <PageHeading text="Add Room" />
            {/* form  */}
            <Box sx={{
                background: '#fff',
                borderRadius: '10px',
                padding: '25px',
                boxSizing: 'borderBox',
                margin: '30px 0px'
            }}>
                <AddRoomForm />
            </Box>
        </Box>
    );
}

export default AddRoomPage;