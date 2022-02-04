import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import { Box, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import * as React from 'react';

const columns = [
    { id: 'name', label: 'Hotel Name', minWidth: 100 },
    { id: 'code', label: 'Hotel Code', minWidth: 150 },
    { id: 'address', label: 'Hotel Address', minWidth: 150 },
    { id: 'telephone', label: 'Hotel telephone', minWidth: 150 },
    { id: 'action', label: 'Action', minWidth: 100 },
];

const hotels = [
    {
        _id: "61c85c7a7459910b246d77ee",
        name: "Muslim Kabab",
        address: "House 10, Road 12 Block F, Niketan, Gulshan 1, Dhaka - 1212, Bangladesh",
        telephone: "013333333333",
        code: "61c85c7a7459910b246d77ee",

    },
    {
        _id: "61c85c7a7459910b246d77ee",
        name: "Mostakim Varieties Kabab & Soup",
        address: "House 10, Road 12 Block F, Niketan, Gulshan 1, Dhaka - 1212, Bangladesh",
        telephone: "013333333333",
        code: "61c85c7a7459910b246d77ee",
    },

]

function HotelsTable(props) {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);


    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };


    return (
        <Paper sx={{ width: '100%', overflow: 'hidden', boxShadow: 'none', borderRadius: '10px' }}>
            <TableContainer sx={{ maxHeight: 800 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth ,fontWeight:'bold' }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {hotels
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row?._id}>
                                        {/* name  */}
                                        <TableCell >
                                            <Typography variant="subtitle1" gutterBottom component="div" sx={{ overflow: 'hidden',color:'#000' }}>
                                                {row?.name}
                                            </Typography>
                                        </TableCell>

                                        {/* code  */}
                                        <TableCell>
                                            <Typography variant="subtitle1" gutterBottom component="div" sx={{ overflow: 'hidden',color:'#5a5c5e'}}>
                                                {row?.code}
                                            </Typography>
                                        </TableCell>

                                        {/* address  */}
                                        <TableCell >
                                            <Typography variant="subtitle1" gutterBottom component="div" sx={{ overflow: 'hidden',color:'#5a5c5e' }}>
                                                {row?.address}
                                            </Typography>
                                        </TableCell>

                                        {/* telephone  */}
                                        <TableCell >
                                            <Typography variant="subtitle1" gutterBottom component="div" sx={{ overflow: 'hidden',color:'#5a5c5e' }}>
                                                {row?.telephone}
                                            </Typography>
                                        </TableCell>

                                       


                                        {/* action  */}
                                        <TableCell>
                                            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} >
                                                <EditIcon sx={{ marginRight: 1, cursor: 'pointer' }} />
                                                <DeleteOutlineIcon sx={{ cursor: 'pointer' }} />
                                            </Box>
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={hotels.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />

        </Paper>
    );
}

export default HotelsTable;