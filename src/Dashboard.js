import React from 'react';
import Appbar from './components/Appbar';
import Sidebar from './components/Sidebar';

const Dashboard = () => {
    return (
        <div>
            <Appbar></Appbar>
            <Sidebar />
        </div>
    );
};

export default Dashboard;