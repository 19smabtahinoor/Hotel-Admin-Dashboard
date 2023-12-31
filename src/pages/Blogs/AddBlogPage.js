import { Box } from '@mui/material';
import React from 'react';
import AddBlogForm from '../../components/Blogs/AddBlogForm';
import PageHeading from '../../components/PageHeading';

function AddBlogPage(props) {
    return (
        <Box sx={{padding:'30px 15px'}}>

            {/* page heading  */}
            <PageHeading text="Add Blog" />
            {/* form  */}
            <Box sx={{
                background:'#fff',
                borderRadius:'10px',
                padding:'25px',
                boxSizing:'borderBox',
                margin:'30px 0px'
            }}>
                <AddBlogForm />
            </Box>
        </Box>
    );
}

export default AddBlogPage;