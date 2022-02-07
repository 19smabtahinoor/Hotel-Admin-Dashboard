import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import BookingDatePicker from '../BookingDatePicker';
import BookingDateRangePicker from '../BookingDateRangePicker';
import FormButton from '../FormButton';
import InputField from '../InputField';
import TextArea from '../TextArea';



function UpdateBookingForm(props) {
    return (
        <form>

            {/* first name and surname  */}
            <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12, lg: 12 }} sx={{ marginBottom: 3 }}>
                <Grid item xs={4} sm={8} md={6} lg={6}>
                    <BookingDatePicker />
                </Grid>
                <Grid item xs={4} sm={8} md={6} lg={6}>
                    <BookingDateRangePicker />
                </Grid>
            </Grid>

            {/*  description   */}
            <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12, lg: 12 }} sx={{ marginBottom: 3 }}>
                <Grid item xs={4} sm={8} md={12} lg={12}>
                    <TextArea label="Description" />
                </Grid>
            </Grid>

            {/* amount */}
            <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12, lg: 12 }} sx={{ marginBottom: 3 }}>
                <Grid item xs={4} sm={8} md={12} lg={12}>
                    <InputField label="Amount" />
                </Grid>
            </Grid>

            {/* buttons  */}
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'flex-end', height: '100%' }} >
                <FormButton text="Update Reservation" />
            </Box>
        </form>
    );
}

export default UpdateBookingForm;