import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import { Box, TableCell, Typography } from '@mui/material';
import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function BookingTableItem({ row, index }) {
    const navigate = useNavigate()

    const handleDelete = (id) => {
        axios.delete(`https://61f92889783c1d0017c449b5.mockapi.io/api/v1/bookings/${id}`)
            .then(res => {
                if (res?.data) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Deleted !!',
                        showConfirmButton: false,
                        timer: 1500
                    }).then(res => {
                        window.location.reload()
                    })
                }
            })
    }

    return (
        <>
            {/* no  */}
            <TableCell>
                <Typography variant="subtitle1" gutterBottom component="div" sx={{ overflow: 'hidden', color: '#5a5c5e' }}>
                    {index}
                </Typography>
            </TableCell>

            {/* bookingDate  */}
            <TableCell >
                <Typography variant="subtitle1" gutterBottom component="div" sx={{ overflow: 'hidden', color: '#000' }}>
                    {row?.bookingDate}
                </Typography>
            </TableCell>

            {/* startDate  */}
            <TableCell>
                <Typography variant="subtitle1" gutterBottom component="div" sx={{ overflow: 'hidden', color: '#5a5c5e' }}>
                    {row?.startDate}
                </Typography>
            </TableCell>

            {/* endDate  */}
            <TableCell >
                <Typography variant="subtitle1" gutterBottom component="div" sx={{ overflow: 'hidden', color: '#5a5c5e' }}>
                    {row?.endDate}
                </Typography>
            </TableCell>

            {/* amount  */}
            <TableCell >
                <Typography variant="subtitle1" gutterBottom component="div" sx={{ overflow: 'hidden', color: '#5a5c5e' }}>
                    ${row?.amount}
                </Typography>
            </TableCell>

            {/* action  */}
            <TableCell>
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} >
                    <EditIcon sx={{ marginRight: 1, cursor: 'pointer' }} onClick={() => navigate(`/reservations/updateReservation/${row?.id}`)} />
                    <DeleteOutlineIcon sx={{ cursor: 'pointer' }} onClick={() => handleDelete(row?.id)} />
                </Box>
            </TableCell>
        </>
    );
}

export default BookingTableItem;