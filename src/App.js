import React from 'react';
import { Route, Routes } from "react-router-dom";
import Dashboard from './Dashboard';
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
                    <Route path="hotels" element={<Hotels />} />
                    <Route path="hotels/addHotels" element={<AddHotelPage />} />
                    <Route path="hotels/updateHotels" element={<UpdateHotelPage />} />
                    
                </Route>
            </Routes>
        </div>
    );
}
