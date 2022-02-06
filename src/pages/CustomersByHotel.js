import { Box } from '@mui/material';
import React from 'react';
import CustomersByHotelTable from '../components/Customers By Hotel/CustomersByHotelTable';
import PageHeading from '../components/PageHeading';

function CustomersByHotel() {
    return (
        <Box sx={{ padding: '30px 15px' }}>
            {/* page heading  */}
            <PageHeading text="Customers Per Hotel" />
            {/* table  */}
            <Box sx={{
                background: '#fff',
                borderRadius: '10px',
                padding: '25px',
                boxSizing: 'borderBox',
                margin: '30px 0px'
            }}>
                <CustomersByHotelTable />
            </Box>
        </Box>
    );
}

export default CustomersByHotel;