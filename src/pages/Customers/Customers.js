import { Box } from '@mui/material';
import React from 'react';
import CustomersTable from '../../components/Customers/CustomersTable';
import PageHeading from '../../components/PageHeading';

function Customers(props) {
    return (
        <Box sx={{ padding: '30px 15px' }}>
            {/* page heading  */}
            <PageHeading text="Customers" />
            {/* form  */}
            <Box sx={{
                background: '#fff',
                borderRadius: '10px',
                padding: '25px',
                boxSizing: 'borderBox',
                margin: '30px 0px'
            }}>
                <CustomersTable />
            </Box>
        </Box>
    );
}

export default Customers;