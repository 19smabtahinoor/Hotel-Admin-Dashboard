import React from 'react';
import { Route, Routes } from "react-router-dom";
import Dashboard from './Dashboard';
import AuthProvider from './contexts/AuthProvider';
import AddBlogPage from './pages/Blogs/AddBlogPage';
import Blogs from './pages/Blogs/Blogs';
import UpdateBlogPage from './pages/Blogs/UpdateBlogPage';
import VerifyPage from './pages/VerifyPage';
import PrivateRoute from './routes/PrivateRoute';

export default function App () {
    return (
        <AuthProvider>
            <Routes>
                <Route path="/" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
                    <Route path="/verify" element={<VerifyPage />} />


                
                <Route path="/*" element={<Dashboard />} >
                    <Route path="*" element={<Blogs />} />
                

                    {/* hotels */}
                    <Route path="blogs" element={<PrivateRoute><Blogs /></PrivateRoute>} />
                    <Route path="blogs/addblog" element={<PrivateRoute><AddBlogPage /></PrivateRoute>} />
                    <Route path="blogs/updateblog" element={<PrivateRoute><UpdateBlogPage /></PrivateRoute>} /> 
                    <Route path="blogs/updateblog/:id" element={<PrivateRoute><UpdateBlogPage /></PrivateRoute>} /> 


                </Route>
            </Routes>
        </AuthProvider>
    );
}
