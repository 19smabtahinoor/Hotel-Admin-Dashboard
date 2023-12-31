import { Box } from '@mui/material';
import React from 'react';
import BlogsTable from '../../components/Blogs/BlogsTable';
import PageHeading from '../../components/PageHeading';
import {  useNavigate } from 'react-router-dom';

function Blogs() {
    const navigate = useNavigate();
    return (
        <Box sx={{ padding: '30px 15px' }}>
            <div>
                {/* page heading  */}
                <PageHeading text="All Blogs" />
                <div className="flex flex-row justify-end items-center"> <p className='text-white bg-green-700 w-36 rounded-full text-base py-2 text-center font-semibold cursor-pointer hover:bg-green-800 transition duration-200' onClick={() => navigate("/blogs/addblog")}>Add New Blog</p></div>
            </div>
            {/* form  */}
            <Box sx={{
                background: '#fff',
                borderRadius: '10px',
                padding: '25px',
                boxSizing: 'borderBox',
                margin: '30px 0px'
            }}>
                <BlogsTable />
            </Box>
        </Box>
    );
}

export default Blogs;