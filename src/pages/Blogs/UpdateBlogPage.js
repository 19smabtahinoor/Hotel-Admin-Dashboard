import { Box } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';
import UpdateBlogForm from '../../components/Blogs/UpdateBlogForm';
import PageHeading from '../../components/PageHeading';

function UpdateBlogPage() {
    const {id} = useParams();
    
    return (
        <Box sx={{ padding: '30px 15px' }}>

            {/* page heading  */}
            <PageHeading text="Update Blog" />
            {/* form  */}
            <Box sx={{
                background: '#fff',
                borderRadius: '10px',
                padding: '25px',
                boxSizing: 'borderBox',
                margin: '30px 0px'
            }}>
                <UpdateBlogForm id={id} />
            </Box>
        </Box>
    );
}

export default UpdateBlogPage;