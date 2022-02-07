import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import { Box, TableCell, Typography } from '@mui/material';
import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function HotelTableItem({ row, index}) {
    const navigate = useNavigate()

    const handleDelete = (id) => {
        axios.delete(`https://61f92889783c1d0017c449b5.mockapi.io/api/v1/hotels/${id}`)
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
            {/* <TableRow hover role="checkbox" tabIndex={-1} key={row?.id}> */}
                {/* id  */}
                <TableCell>
                    <Typography variant="subtitle1" gutterBottom component="div" sx={{ overflow: 'hidden', color: '#5a5c5e' }}>
                    {index}
                    </Typography>
                </TableCell>
                {/* name  */}
                <TableCell >
                    <Typography variant="subtitle1" gutterBottom component="div" sx={{ overflow: 'hidden', color: '#000' }}>
                        {row?.name}
                    </Typography>
                </TableCell>

                {/* code  */}
                <TableCell>
                    <Typography variant="subtitle1" gutterBottom component="div" sx={{ overflow: 'hidden', color: '#5a5c5e' }}>
                        {row?.code}
                    </Typography>
                </TableCell>

                {/* address  */}
                <TableCell >
                    <Typography variant="subtitle1" gutterBottom component="div" sx={{ overflow: 'hidden', color: '#5a5c5e' }}>
                        {row?.address}
                    </Typography>
                </TableCell>

                {/* telephone  */}
                <TableCell >
                    <Typography variant="subtitle1" gutterBottom component="div" sx={{ overflow: 'hidden', color: '#5a5c5e' }}>
                        {row?.telephone}
                    </Typography>
                </TableCell>




                {/* action  */}
                <TableCell>
                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} >
                    <EditIcon sx={{ marginRight: 1, cursor: 'pointer' }} onClick={() => navigate(`/hotels/updateHotels/${row?.id}`)} />
                    <DeleteOutlineIcon sx={{ cursor: 'pointer' }} onClick={() => handleDelete(row?.id)} />
                    </Box>
                </TableCell>
            {/* </TableRow> */}
        </>
    );
}

export default HotelTableItem;