import React from 'react';
import Appbar from './components/Appbar';
import Sidebar from './components/Sidebar';
// import DrawerNav from './components/DrawerNav';
const Dashboard = () => {
    return (
        <div>
            <Appbar></Appbar>
            {/* <DrawerNav></DrawerNav> */}
            <Sidebar />
        </div>
    );
};

export default Dashboard;