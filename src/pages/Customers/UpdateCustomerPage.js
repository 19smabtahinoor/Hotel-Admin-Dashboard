import { Box } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';
import UpdateCustomerForm from '../../components/Customers/UpdateCustomerForm';
import PageHeading from '../../components/PageHeading';

function UpdateCustomerPage() {
    const { id } = useParams();

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
                <UpdateCustomerForm id={id} />
            </Box>
        </Box>
    );
}

export default UpdateCustomerPage;