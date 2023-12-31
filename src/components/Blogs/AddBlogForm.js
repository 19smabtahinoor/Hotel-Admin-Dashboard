import { FormControl, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useDropzone } from "react-dropzone";
import { useForm } from "react-hook-form";
import { BsFillCameraFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import BlogEditor from './BlogEditor';

import axios from 'axios';
import useAuth from '../../hooks/useAuth';

function AddBlogForm() {
    const navigate = useNavigate()
    const { register, handleSubmit } = useForm();
    const [description, setDescription] = useState('');
    const [files, setFiles] = React.useState([])
    const {user} = useAuth();
    //img uploading 
    //image drag and drop
    const { getRootProps, getInputProps } = useDropzone({
        accept: "image/*",
        onDrop: (acceptedFiles) => {
            setFiles(
                acceptedFiles.map((file) =>
                    Object.assign(file, {
                        preview: URL.createObjectURL(file),
                    })
                )
            )
        },
    })
    const image1 = files?.map((file) => (
        <div key={file.name}>
            <div>
                <img src={file.preview} className='w-full object-contain' alt="preview" />
            </div>
        </div>
    ))

    const formdata = new FormData();
    formdata.append('image', files?.[0])

    const onSubmit = data => {
        data.description = description;
        data.author = { name: `${user?.displayName}`, image: `${ user?.photoURL }`};
        if (files?.length > 0) {
            axios.post('https://api.imgbb.com/1/upload?&key=830682afc3e5e6fbcf788ea07e7aa7e9', formdata)
                .then((response) => {
                    if (response.status === 200) {
                        data.image = `${response.data.data.image.url}`;
                        axios.post(`http://localhost:4000/api/blogs`, data)
                            .then(res => {
                                swal("Let's Go🚀", "Published!", "success");
                                navigate('/blogs')
                                // window.location.reload()
                            }).catch((err) => {
                                swal("Something went wrong!", `${err.message}`, "error")
                            })
                    }


                }).catch((error) => {
                    alert('try agian')
                })

        }

    }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <div>
                {/* blog title  */}
                <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12, lg: 12 }} sx={{ marginBottom: 3 }}>
                    <Grid item xs={4} sm={8} md={12} lg={12}>
                        <FormControl variant="filled" sx={{ width: '100%' }}>
                            <Typography sx={{ marginBottom: 1 }}>Title</Typography>
                            <TextField id="outlined-basic" variant="outlined" placeholder="set a title" color="success" {...register("title")} />
                        </FormControl>
                    </Grid>

                </Grid>

                {/* blog description   */}
                <div >
                    <Typography sx={{ marginBottom: 1 }}>Description</Typography>
                    <BlogEditor description={description} setDescription={setDescription} />
                </div>

                <div>
                    {/* img */}
                    <div >
                        <Typography sx={{ marginBottom: 1 }}>Choose an image</Typography>
                        {/* <ImageUpload /> */}
                        {/* image  */}
                        <div className='mb-4 flex flex-col items-center space-y-4 w-48' {...getRootProps()}>
                            <div className='flex flex-col space-y-3 items-center justify-between'>
                                {/* img button  */}
                                <div>
                                    {files?.length > 0 ? (
                                        <div className="flex border border-gray-200 px-4 rounded-lg space-x-3 py-2 items-center h-full relative">
                                            <BsFillCameraFill className="text-3xl text-gray-600" />
                                            <span className="text-gray-600 font-semibold">Change Photo</span>
                                        </div>
                                    ) : (

                                        <div className="flex border border-gray-200 px-4 rounded-lg space-x-3 py-2 items-center h-full relative">
                                            <BsFillCameraFill className="text-3xl text-gray-600" />
                                            <span className="text-gray-600 font-semibold">Upload Photo</span>
                                        </div>

                                    )}
                                </div>

                                {/* preview image  */}

                                {files?.length > 0 && (
                                    <div className=''>{image1}</div>
                                )}
                            </div>

                            <input className="input-primary" {...getInputProps()} placeholder="Upload Your Files" />

                        </div>
                    </div>
                    {/* tag and category */}
                    <div >
                        <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12, lg: 12 }} sx={{ marginBottom: 3 }}>
                            <Grid item xs={4} sm={8} md={12} lg={12}>
                                <FormControl variant="filled" sx={{ width: '100%' }}>
                                    <Typography sx={{ marginBottom: 1 }}>Category</Typography>
                                    <TextField id="outlined-basic" variant="outlined" placeholder="Set a category" color="success" {...register("category")} />
                                </FormControl>
                            </Grid>

                        </Grid>
                    </div>

                </div>


            </div>

            {/* buttons  */}
            <div className="flex flex-row justify-end items-center">
                <button type="submit" className='text-white bg-green-700 w-24 rounded-full text-base py-2 text-center font-semibold cursor-pointer hover:bg-green-800 transition duration-200'>Publish</button>
            </div>

        </form>
    );
}

export default AddBlogForm;