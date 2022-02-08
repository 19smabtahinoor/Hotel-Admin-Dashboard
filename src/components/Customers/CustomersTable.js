import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import * as React from 'react';
import CustomerTableItem from './CustomerTableItem';

const columns = [
    { id: 'no', label: 'No.', minWidth: 50 },
    { id: 'name', label: 'Name', minWidth: 150 },
    { id: 'code', label: 'Email', minWidth: 150 },
    { id: 'address', label: 'Address', minWidth: 150 },
    { id: 'Phone', label: 'Phone', minWidth: 150 },
    { id: 'Country', label: 'Country', minWidth: 100 },
    { id: 'City', label: 'City', minWidth: 100 },
    { id: 'Post Office', label: 'Post Office', minWidth: 100 },
    { id: 'Zip Code', label: 'Zip Code', minWidth: 100 },
    { id: 'action', label: 'Action', minWidth: 100 },
];


function CustomersTable(props) {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [customersData, setCustomersData] = React.useState([])


    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    React.useEffect(() => {
        fetch('https://61f92889783c1d0017c449b5.mockapi.io/api/v1/customers')
            .then(res => res.json())
            .then(res => setCustomersData(res))
    }, [])

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
                                    style={{ minWidth: column.minWidth, fontWeight: 'bold' }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {customersData
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row,index) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row?.id}>
                                        <CustomerTableItem row={row} index={index} />
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={customersData.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />

        </Paper>
    );
}

export default CustomersTable;