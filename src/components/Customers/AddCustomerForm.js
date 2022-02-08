import { FormControl, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import CountrySelect from '../CountrySelect';
import FormButton from '../FormButton';





function AddCustomerForm() {
    const navigate = useNavigate()
    const { register, handleSubmit } = useForm();
    const [country, setCountry] = React.useState('');

    const onSubmit = data => {
        data['country'] = country
        axios.post('https://61f92889783c1d0017c449b5.mockapi.io/api/v1/customers', data)
            .then(res => {
                if (res?.data) {
                    Swal.fire({
                        icon: 'success',
                        title: 'New Customer Added',
                        showConfirmButton: false,
                        timer: 1500
                    }).then(res => {
                        navigate('/customers')
                    })
                }
            })
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            {/* first name and surname  */}
            <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12, lg: 12 }} sx={{ marginBottom: 3 }}>
                <Grid item xs={4} sm={8} md={6} lg={6}>
                    <FormControl variant="filled" sx={{ width: '100%' }}>
                        <Typography sx={{ marginBottom: 1 }}>First Name</Typography>
                        <TextField id="outlined-basic" variant="outlined" placeholder="First Name" color="success" {...register("firstname")} />
                    </FormControl>
                </Grid>
                <Grid item xs={4} sm={8} md={6} lg={6}>
                    <FormControl variant="filled" sx={{ width: '100%' }}>
                        <Typography sx={{ marginBottom: 1 }}>Sur Name</Typography>
                        <TextField id="outlined-basic" variant="outlined" placeholder="Sur Name" color="success" {...register("surname")} />
                    </FormControl>
                </Grid>

            </Grid>

            {/* phone and email  */}
            <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12, lg: 12 }} sx={{ marginBottom: 3 }}>
                <Grid item xs={4} sm={8} md={6} lg={6}>
                    <FormControl variant="filled" sx={{ width: '100%' }}>
                        <Typography sx={{ marginBottom: 1 }}>Email</Typography>
                        <TextField id="outlined-basic" variant="outlined" placeholder="Email" color="success" {...register("email")} />
                    </FormControl>
                </Grid>
                <Grid item xs={4} sm={8} md={6} lg={6}>
                    <FormControl variant="filled" sx={{ width: '100%' }}>
                        <Typography sx={{ marginBottom: 1 }}>Phone</Typography>
                        <TextField id="outlined-basic" variant="outlined" placeholder="Phone" color="success" {...register("phone")} />
                    </FormControl>
                </Grid>
            </Grid>

            {/*  address   */}
            <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12, lg: 12 }} sx={{ marginBottom: 3 }}>
                <Grid item xs={4} sm={8} md={12} lg={12}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography sx={{ marginBottom: 1 }}>Address</Typography>
                        <textarea placeholder="Address"
                            className="textArea" {...register("address")}
                        ></textarea>
                    </Box>
                </Grid>
            </Grid>

            {/* country and city  */}
            <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12, lg: 12 }} sx={{ marginBottom: 3 }}>
                <Grid item xs={4} sm={8} md={6} lg={6}>
                    <CountrySelect country={country} setCountry={setCountry} />
                </Grid>
                <Grid item xs={4} sm={8} md={6} lg={6}>
                    <FormControl variant="filled" sx={{ width: '100%' }}>
                        <Typography sx={{ marginBottom: 1 }}>City</Typography>
                        <TextField id="outlined-basic" variant="outlined" placeholder="City" color="success" {...register("city")} />
                    </FormControl>
                </Grid>
            </Grid>

            {/* post office and zip code */}
            <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12, lg: 12 }} sx={{ marginBottom: 3 }}>
                <Grid item xs={4} sm={8} md={6} lg={6}>
                    <FormControl variant="filled" sx={{ width: '100%' }}>
                        <Typography sx={{ marginBottom: 1 }}>Post Office</Typography>
                        <TextField id="outlined-basic" variant="outlined" placeholder="Post Office" color="success" {...register("postOffice")} />
                    </FormControl>
                </Grid>
                <Grid item xs={4} sm={8} md={6} lg={6}>
                    <FormControl variant="filled" sx={{ width: '100%' }}>
                        <Typography sx={{ marginBottom: 1 }}>Zip Code</Typography>
                        <TextField id="outlined-basic" variant="outlined" placeholder="Zip Code" color="success" {...register("code")} />
                    </FormControl>
                </Grid>
            </Grid>

            {/* buttons  */}
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'flex-end', height: '100%' }} >
                <FormButton text="Add Customer" />
            </Box>
        </form>
    );
}

export default AddCustomerForm;