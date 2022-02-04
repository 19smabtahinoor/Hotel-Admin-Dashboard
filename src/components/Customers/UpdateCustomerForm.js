import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import CountrySelect from '../CountrySelect';
import FormButton from '../FormButton';
import InputField from '../InputField';
import TextArea from '../TextArea';


function UpdateCustomerForm(props) {
    return (
        <form>

            {/* first name and surname  */}
            <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12, lg: 12 }} sx={{ marginBottom: 3 }}>
                <Grid item xs={4} sm={8} md={6} lg={6}>
                    <InputField label="First Name" />
                </Grid>
                <Grid item xs={4} sm={8} md={6} lg={6}>
                    <InputField label="Sur Name" />
                </Grid>

            </Grid>

            {/* phone and email  */}
            <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12, lg: 12 }} sx={{ marginBottom: 3 }}>
                <Grid item xs={4} sm={8} md={6} lg={6}>
                    <InputField label="Email" />
                </Grid>
                <Grid item xs={4} sm={8} md={6} lg={6}>
                    <InputField label="Phone" />
                </Grid>
            </Grid>

            {/*  address   */}
            <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12, lg: 12 }} sx={{ marginBottom: 3 }}>
                <Grid item xs={4} sm={8} md={12} lg={12}>
                    <TextArea label="Address" />
                </Grid>
            </Grid>

            {/* country and city  */}
            <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12, lg: 12 }} sx={{ marginBottom: 3 }}>
                <Grid item xs={4} sm={8} md={6} lg={6}>
                    <CountrySelect />
                </Grid>
                <Grid item xs={4} sm={8} md={6} lg={6}>
                    <InputField label="City" />
                </Grid>
            </Grid>

            {/* post office and zip code */}
            <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12, lg: 12 }} sx={{ marginBottom: 3 }}>
                <Grid item xs={4} sm={8} md={6} lg={6}>
                    <InputField label="Post Office" />
                </Grid>
                <Grid item xs={4} sm={8} md={6} lg={6}>
                    <InputField label="Zip Code" />
                </Grid>
            </Grid>

            {/* buttons  */}
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'flex-end', height: '100%' }} >
                <FormButton text="Update Customer" />
            </Box>
        </form>
    );
}

export default UpdateCustomerForm;