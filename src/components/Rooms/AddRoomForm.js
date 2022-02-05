import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import FormButton from '../FormButton';
import InputField from '../InputField';

function AddRoomForm(props) {
    return (
        <form>

            {/* room name   */}
            <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12, lg: 12 }} sx={{ marginBottom: 3 }}>
                <Grid item xs={4} sm={8} md={12} lg={12}>
                    <InputField label="Hotel Name" />
                </Grid>

            </Grid>

            {/* room telephone and number */}
            <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12, lg: 12 }} sx={{ marginBottom: 3 }}>
                <Grid item xs={4} sm={8} md={6} lg={6}>
                    <InputField label="Room Number" />
                </Grid>
                <Grid item xs={4} sm={8} md={6} lg={6}>
                    <InputField label="Room Telephone" />
                </Grid>
            </Grid>

            {/* buttons  */}
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'flex-end', height: '100%' }} >
                <FormButton text="Add Room" />
            </Box>
        </form>
    );
}

export default AddRoomForm;