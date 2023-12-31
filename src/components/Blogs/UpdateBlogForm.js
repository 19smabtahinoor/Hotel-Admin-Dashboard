import { FormControl, Grid, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { useDropzone } from "react-dropzone";
import { useForm } from "react-hook-form";
import { BsFillCameraFill } from 'react-icons/bs';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

function UpdateBlogForm({ id }) {
    const [blogData, setBlogData] = React.useState({})
    const prevDescription = `${blogData?.description}`;
    const navigate = useNavigate()
    const { register, handleSubmit } = useForm();
    const [updateDescription, setUpdateDescription] = useState(prevDescription);
    const [files, setFiles] = React.useState([])
    console.log(blogData);
    React.useEffect(() => {
        axios.get(`http://localhost:4000/api/blogs/${id}`)
            .then(res => setBlogData(res?.data))

    }, [blogData])



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
        data.description = updateDescription;

        if (files?.length > 0) {
            axios.post('https://api.imgbb.com/1/upload?&key=830682afc3e5e6fbcf788ea07e7aa7e9', formdata)
                .then((response) => {
                    if (response.status === 200) {
                        data.image = `${response.data.data.image.url}`;
                        axios.put(`http://localhost:4000/api/blogs/${id}`, data)
                            .then(res => {
                                swal("Let's Go🚀", "Updated Done!", "success");
                                navigate('/blogs')
                            }).catch((err) => {
                                swal("Something went wrong!", `${err.message}`, "error")
                            })
                    }


                }).catch((error) => {
                    alert('try agian')
                })

        }

    };


    return (
        <form onSubmit={handleSubmit(onSubmit)}>


            {/* blog title  */}
            <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12, lg: 12 }} sx={{ marginBottom: 3 }}>
                <Grid item xs={4} sm={8} md={12} lg={12}>
                    <FormControl variant="filled" sx={{ width: '100%' }}>
                        <Typography sx={{ marginBottom: 1 }}>Update Title</Typography>
                        <input className="border border-gray-500 py-4 px-2 rounded-lg" placeholder="Update Title" defaultValue={blogData?.title} {...register("title")} />
                    </FormControl>
                </Grid>

            </Grid>

            {/* blog description   */}
            <div >
                <Typography sx={{ marginBottom: 1 }}>Update Description</Typography>
                <div className='h-96 block	mb-16'>
                    <ReactQuill className='h-full block	' theme="snow" value={updateDescription} onChange={setUpdateDescription} />;
                </div>
                {/* <BlogEditor description={updateDescription} setDescription={setUpdateDescription} /> */}
                {/* <BlogEditor description={blogData?.description} setDescription={setDescription} /> */}
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
                                <div className="flex border border-gray-200 px-4 rounded-lg space-x-3 py-2 items-center h-full relative">
                                    <BsFillCameraFill className="text-3xl text-gray-600" />
                                    <span className="text-gray-600 font-semibold">Change Photo</span>
                                </div>
                            </div>


                            {/* preview image  */}
                            {files?.length < 1 ? (
                                <>
                                    <div>
                                        <img src={blogData?.image} className='w-full object-contain' alt="preview" /></div>

                                </>
                            ) : (
                                <>
                                    <div className=''>{image1}</div>

                                </>
                            )}


                        </div>

                        <input className="input-primary" {...getInputProps()} placeholder="Upload Your Files" />

                    </div>
                </div>
                {/* category */}
                <div >
                    <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12, lg: 12 }} sx={{ marginBottom: 3 }}>
                        <Grid item xs={4} sm={8} md={12} lg={12}>
                            <FormControl variant="filled" sx={{ width: '100%' }}>
                                <Typography sx={{ marginBottom: 1 }}>Category</Typography>
                                <input className="border border-gray-500 py-4 px-2 rounded-lg" placeholder="Update Category" defaultValue={blogData?.category} {...register("category")} />
                            </FormControl>
                        </Grid>

                    </Grid>
                </div>

            </div>

            {/* buttons  */}
            <div className="flex flex-row justify-end items-center">
                <button type="submit" className='text-white bg-green-700 w-24 rounded-full text-base py-2 text-center font-semibold cursor-pointer hover:bg-green-800 transition duration-200'>Update</button>
            </div>
        </form>
    );
}

export default UpdateBlogForm;