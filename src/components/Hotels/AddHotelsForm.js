import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import FormButton from '../FormButton';
import InputField from '../InputField';
import TextArea from '../TextArea';

function AddHotelsForm(props) {
    return (
        <form>

            {/* hotel name and code  */}
            <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12, lg: 12 }} sx={{ marginBottom: 3 }}>
                <Grid item xs={4} sm={8} md={12} lg={12}>
                    <InputField label="Hotel Name" />
                </Grid>

            </Grid>

            {/* hotel address   */}
            <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12, lg: 12 }} sx={{ marginBottom: 3 }}>
                <Grid item xs={4} sm={8} md={12} lg={12}>
                    <TextArea label="Hotel Address" />
                </Grid>
            </Grid>

            {/* hotel telephone and button */}
            <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12, lg: 12 }} sx={{ marginBottom: 3 }}>
                <Grid item xs={4} sm={8} md={6} lg={6}>
                    <InputField label="Hotel Telephone" />
                </Grid>
                <Grid item xs={4} sm={8} md={6} lg={6}>
                    <InputField label="Hotel Code" />
                </Grid>
            </Grid>

            {/* buttons  */}
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'flex-end', height: '100%' }} >
                <FormButton text="Add Hotel" />
            </Box>
        </form>
    );
}

export default AddHotelsForm;