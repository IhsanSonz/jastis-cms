import React, { useState } from 'react'
import Header from '../../components/Header'
import Sidebar from '../../components/sidebar/Sidebar'
import Dashboard from '../Dashboard';
import Users from '../users/Users';
import UserDetail from '../users/UserDetail';
import Classes from '../Classes';
import { Box, CircularProgress } from '@material-ui/core';
import Banner from '../../components/Banner';
import { useSelector } from 'react-redux';
import { Route } from 'react-router-dom';
import EnhancedTable from '../EnhancedTable';

function Layout() {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    const loading = useSelector(state => state.loading.loading);

    if (loading) {
        return (
            <Box className="w-full min-h-screen flex flex-row justify-center items-center">
                <CircularProgress />
            </Box>
        );
    }

    return (
        <div className="flex h-screen overflow-hidden">

            {/* Sidebar */}
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

            {/* Content area */}
            <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

                {/*  Site header */}
                <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

                <Route exact path="/" component={Dashboard} />
                <Route exact path="/users" component={Users} />
                <Route exact path="/users/:id" component={UserDetail} />
                <Route path="/classes" component={Classes} />
                <Route path="/tasks" component={EnhancedTable} />
                <Route path="/events" component={Dashboard} />

                <Banner />

            </div>
        </div>
    )
}

export default Layout
