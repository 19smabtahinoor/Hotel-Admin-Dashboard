import { FormControl, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import FormButton from '../FormButton';

function UpdateRoomForm({ id }) {
    const [roomData, setRoomData] = React.useState({})
    const navigate = useNavigate()
    const { register, handleSubmit } = useForm();

    React.useEffect(() => {
        axios.get(`https://61f92889783c1d0017c449b5.mockapi.io/api/v1/rooms/${id}`)
            .then(res => setRoomData(res?.data))

    })

        const onSubmit = data => {
        
        axios.put(`https://61f92889783c1d0017c449b5.mockapi.io/api/v1/rooms/${id}`, data)
            .then(res => {
                if (res?.data) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Updated Done!!',
                        showConfirmButton: false,
                        timer: 1500
                    }).then(res => {
                        navigate('/rooms')
                    })
                }
            })
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            {/* room name   */}
            <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12, lg: 12 }} sx={{ marginBottom: 3 }}>
                <Grid item xs={4} sm={8} md={12} lg={12}>
                    <FormControl variant="filled" sx={{ width: '100%' }}>
                        <Typography sx={{ marginBottom: 1 }}>Hotel Name</Typography>
                        <input className="input" placeholder="Hotel Name" defaultValue={roomData?.hotelName} {...register("hotelName")} />
                    </FormControl>
                </Grid>

            </Grid>

            {/* room telephone and number */}
            <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12, lg: 12 }} sx={{ marginBottom: 3 }}>
                <Grid item xs={4} sm={8} md={6} lg={6}>
                    <FormControl variant="filled" sx={{ width: '100%' }}>
                        <Typography sx={{ marginBottom: 1 }}>Room Number</Typography>
                        <input className="input" placeholder="Room Number" defaultValue={roomData?.roomNumber} {...register("roomNumber")} />
                    </FormControl>
                </Grid>
                <Grid item xs={4} sm={8} md={6} lg={6}>
                    <FormControl variant="filled" sx={{ width: '100%' }}>
                        <Typography sx={{ marginBottom: 1 }}>Room Telephone</Typography>
                        <input className="input" placeholder="Room Telephone" defaultValue={roomData?.telephone} {...register("telephone")} />
                    </FormControl>
                </Grid>
            </Grid>

            {/* buttons  */}
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'flex-end', height: '100%' }} >
                <FormButton text="Update Room" />
            </Box>
        </form>
    );
}

export default UpdateRoomForm;