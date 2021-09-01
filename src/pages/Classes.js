import React from 'react'

import Datepicker from '../components/actions/Datepicker';
import FilterButton from '../components/actions/FilterButton';
import DashboardAvatars from '../components/dashboard/DashboardAvatars';
import WelcomeBanner from '../components/dashboard/WelcomeBanner';
import AddIcon from '@material-ui/icons/Add';
import DashboardCard10 from '../components/dashboard/DashboardCard10';
import DashboardCard11 from '../components/dashboard/DashboardCard11';
import DashboardCard12 from '../components/dashboard/DashboardCard12';
import DashboardCard13 from '../components/dashboard/DashboardCard13';
import { Box, Button, Card, CardActions, CardContent, Typography } from '@material-ui/core';

function Classes() {
    return (
        <main>
            <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

                {/* Welcome Banner */}
                <WelcomeBanner />

                {/* Dashboard actions */}
                <div className="sm:flex sm:justify-between sm:items-center mb-8">

                    {/* Left: Avatars */}
                    <DashboardAvatars />

                    {/* Right: Actions */}
                    <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
                        {/* Filter button */}
                        <FilterButton />
                        {/* Datepicker built with flatpickr */}
                        <Datepicker />
                        {/* Add view button */}
                        <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white">
                            <AddIcon className="w-4 h-4 fill-current opacity-50 flex-shrink-0" />
                            <span className="hidden xs:block ml-2">Add view</span>
                        </button>
                    </div>

                </div>

                <Box className="flex justify-around px-8 pb-6">
                    <Card className="flex-grow m-3">
                        <CardContent>
                            <Typography className="text-large" color="textSecondary" gutterBottom>
                                Word of the Day
                            </Typography>
                            <Typography variant="h5" component="h2">
                                Lorem ipsum dolor sit amet
                            </Typography>
                            <Typography className="mb-5" color="textSecondary">
                                adjective
                            </Typography>
                            <Typography variant="body2" component="p">
                                well meaning and kindly.
                                <br />
                                {'"a benevolent smile"'}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Box>

                {/* Cards */}
                <div className="grid grid-cols-12 gap-6">
                    {/* Card (Customers) */}
                    <DashboardCard10 />
                    {/* Card (Reasons for Refunds) */}
                    <DashboardCard11 />
                    {/* Card (Recent Activity) */}
                    <DashboardCard12 />
                    {/* Card (Income/Expenses) */}
                    <DashboardCard13 />
                </div>

            </div>
        </main>
    )
}

export default Classes;
