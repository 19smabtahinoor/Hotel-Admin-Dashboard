import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import { Box, TableCell, Typography } from '@mui/material';
import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function BlogsTableItem({ row, index }) {
    const navigate = useNavigate()
    const handleDelete = (id) => {
        axios.delete(`http://localhost:4000/api/blogs/${id}`)
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

    //current date function
    const createdAt = row?.createOn;
    const date = new Date(createdAt);
    const currentDate = date.getDate() + " " + date.toLocaleString('default', { month: 'long' }) + " " + date.getFullYear();

    // Or even more concise (Thanks @RobG)

    return (
        <>
            {/* <TableRow hover role="checkbox" tabIndex={-1} key={row?.id}> */}
            {/* id  */}
            <TableCell>
                <Typography variant="subtitle1" gutterBottom component="div" sx={{ overflow: 'hidden', color: '#5a5c5e' }}>
                    {index + 1}
                </Typography>
            </TableCell>
            {/* name  */}
            <TableCell >
                <Typography variant="subtitle1" gutterBottom component="div" sx={{ overflow: 'hidden', color: '#000' }}>
                    {row?.title}
                </Typography>
            </TableCell>

            {/* imge  */}
            <TableCell>

                <img src={row?.image} className='w-24 h-12 rounded object-cover' alt={row?.id} />
            </TableCell>

            {/* category  */}
            <TableCell >
                {row?.category}
            </TableCell>

            {/* author  */}
            <TableCell >
                <div className='flex flex-row items-center space-x-3'>
                    <img src={row?.author?.image} className='w-12 h-12 object-cover rounded-full' alt={row?.author?.name} />
                    <span className='text-sm'>{row?.author?.name}</span>
                </div>
            </TableCell>


            {/* published time  */}
            <TableCell >

                <p className='text-sm'>{currentDate}</p>

            </TableCell>

            {/* action  */}
            <TableCell>
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} >
                    <EditIcon sx={{ marginRight: 1, cursor: 'pointer' }} onClick={() => navigate(`/blogs/updateblog/${row?.id}`)} />
                    <DeleteOutlineIcon sx={{ cursor: 'pointer' }} onClick={() => handleDelete(row?.id)} />
                </Box>
            </TableCell>
            {/* </TableRow> */}
        </>
    );
}

export default BlogsTableItem;