import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const BlogEditor = ({ description, setDescription }) => {

    return(
        <div className='h-96 block	mb-16'>
            <ReactQuill className='h-full block	' theme="snow" value={description} onChange={setDescription} />;
        </div>
    )
};

export default BlogEditor;