import React from 'react';
import { Route, Routes } from "react-router-dom";
import Dashboard from './Dashboard';
import AddCustomerPage from './pages/Customers/AddCustomerPage';
import Customers from './pages/Customers/Customers';
import UpdateCustomerPage from './pages/Customers/UpdateCustomerPage';
import AddHotelPage from './pages/Hotels/AddHotelPage';
import Hotels from './pages/Hotels/Hotels';
import UpdateHotelPage from './pages/Hotels/UpdateHotelPage';

export default function App () {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/*" element={<Dashboard />} >
                    <Route path="*" element={<Hotels />} />

                    {/* hotels  */}
                    <Route path="hotels" element={<Hotels />} />
                    <Route path="hotels/addHotels" element={<AddHotelPage />} />
                    <Route path="hotels/updateHotels" element={<UpdateHotelPage />} />

                    {/* Customers  */}
                    <Route path="customers" element={<Customers />} />
                    <Route path="customers/addCustomer" element={<AddCustomerPage />} />
                    <Route path="customers/updateCustomer" element={<UpdateCustomerPage />} />
                
                </Route>
            </Routes>
        </div>
    );
}
