import { Box } from '@mui/material';
import React from 'react';
import PageHeading from '../../components/PageHeading';
import UpdateRoomForm from '../../components/Rooms/UpdateRoomForm';

function UpdateRoomPage(props) {
    return (
        <Box sx={{ padding: '30px 15px' }}>

            {/* page heading  */}
            <PageHeading text="Update Room" />
            {/* form  */}
            <Box sx={{
                background: '#fff',
                borderRadius: '10px',
                padding: '25px',
                boxSizing: 'borderBox',
                margin: '30px 0px'
            }}>
                <UpdateRoomForm />
            </Box>
        </Box>
    );
}

export default UpdateRoomPage;