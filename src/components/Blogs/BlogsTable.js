import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import * as React from 'react';
import HotelTableItem from './BlogsTableItem';

const columns = [
    { id: 'no', label: 'No.', minWidth: 50 },
    { id: 'title', label: 'Title', minWidth: 200 },
    { id: 'image', label: 'Image', minWidth: 100 },
    { id: 'category', label: 'Category', minWidth: 50 },
    { id: 'author', label: 'Author', minWidth: 100 },
    { id: 'pub_time', label: 'Published Time', minWidth: 100 },
    { id: 'action', label: 'Action', minWidth: 100 },
];


function BlogsTable(props) {
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
        fetch('http://localhost:4000/api/blogs')
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

export default BlogsTable;