import React from 'react';
import { Route, Routes } from "react-router-dom";
import Dashboard from './Dashboard';
import Bookings from './pages/Bookings';
import Hotels from './pages/Hotels';

export default function App () {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/*" element={<Dashboard />}>
                    <Route path="*" element={<Hotels />} />
                    <Route path="hotels" element={<Hotels />} />
                    <Route path="bookings" element={<Bookings />} />
                </Route>
            </Routes>
        </div>
    );
}
