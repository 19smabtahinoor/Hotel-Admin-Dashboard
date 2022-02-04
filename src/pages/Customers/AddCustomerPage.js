import { Box } from '@mui/material';
import React from 'react';
import AddCustomerForm from '../../components/Customers/AddCustomerForm';
import PageHeading from '../../components/PageHeading';

function AddCustomerPage(props) {
    return (
        <Box sx={{ padding: '30px 15px' }}>

            {/* page heading  */}
            <PageHeading text="Add Customer" />
            {/* form  */}
            <Box sx={{
                background: '#fff',
                borderRadius: '10px',
                padding: '25px',
                boxSizing: 'borderBox',
                margin: '30px 0px'
            }}>
                <AddCustomerForm />
            </Box>
        </Box>
    );
}

export default AddCustomerPage;