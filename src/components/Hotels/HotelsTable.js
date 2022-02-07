import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import * as React from 'react';
import HotelTableItem from './HotelTableItem';

const columns = [
    { id: 'no', label: 'No.', minWidth: 50 },
    { id: 'name', label: 'Hotel Name', minWidth: 100 },
    { id: 'code', label: 'Hotel Code', minWidth: 150 },
    { id: 'address', label: 'Hotel Address', minWidth: 150 },
    { id: 'telephone', label: 'Hotel telephone', minWidth: 150 },
    { id: 'action', label: 'Action', minWidth: 100 },
];


function HotelsTable(props) {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [hotelsData,setHotelsData] = React.useState([])

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    React.useEffect(() => {
        fetch('https://61f92889783c1d0017c449b5.mockapi.io/api/v1/hotels')
        .then(res => res.json())
            .then(res => setHotelsData(res))
    },[])

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
                        {hotelsData
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row,index) => (
                                <TableRow hover role="checkbox" tabIndex={-1} key={row?.id}>
                                    <HotelTableItem row={row} index={index} />
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={hotelsData.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />

        </Paper>
    );
}

export default HotelsTable;