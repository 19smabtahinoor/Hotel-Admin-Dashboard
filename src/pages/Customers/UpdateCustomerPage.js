import { Box } from '@mui/material';
import React from 'react';
import UpdateCustomerForm from '../../components/Customers/UpdateCustomerForm';
import PageHeading from '../../components/PageHeading';

function UpdateCustomerPage(props) {
    return (
        <Box sx={{ padding: '30px 15px' }}>

            {/* page heading  */}
            <PageHeading text="Update Customer" />
            {/* form  */}
            <Box sx={{
                background: '#fff',
                borderRadius: '10px',
                padding: '25px',
                boxSizing: 'borderBox',
                margin: '30px 0px'
            }}>
                <UpdateCustomerForm />
            </Box>
        </Box>
    );
}

export default UpdateCustomerPage;