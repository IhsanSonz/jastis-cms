import React, { useEffect, useState } from 'react'

import Datepicker from '../components/actions/Datepicker';
import FilterButton from '../components/actions/FilterButton';
import DashboardAvatars from '../components/dashboard/DashboardAvatars';
import WelcomeBanner from '../components/dashboard/WelcomeBanner';
import AddIcon from '@material-ui/icons/Add';
import DashboardCard06 from '../components/dashboard/DashboardCard06';
import DashboardCard07 from '../components/dashboard/DashboardCard07';
import DashboardCard08 from '../components/dashboard/DashboardCard08';
import DashboardCard09 from '../components/dashboard/DashboardCard09';
import { getAllUsers } from '../redux/ducks/users';
import { connect } from 'react-redux';
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TablePagination,
    TableRow,
    Toolbar,
    Typography,
} from '@material-ui/core';
import EnhancedTableHead from '../components/table/EnhancedTableHead';

const headCells = [
    { id: '_id', numeric: false, disablePadding: false, label: 'ID' },
    { id: 'name', numeric: false, disablePadding: false, label: 'Name' },
    { id: 'email', numeric: false, disablePadding: false, label: 'Email' },
];

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

function Users({ users, onLoadData }) {

    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('name');
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    useEffect(() => {
        onLoadData();
    }, [onLoadData]);

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleClick = (event, id) => {
        console.log(`Handle Click with id: ${id}`);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, users?.length - page * rowsPerPage);

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

                <Paper className="w-full mb-2">

                    <Toolbar className="pl-2 pr-1">
                        <Typography className="flex flex-auto" variant="h6" id="tableTitle" component="div">
                            List Users
                        </Typography>
                        {/* <Tooltip title="Filter list">
                            <IconButton aria-label="filter list">
                                <FilterListIcon />
                            </IconButton>
                        </Tooltip> */}
                    </Toolbar>

                    <TableContainer>
                        <Table
                            className="min-w-full"
                            aria-labelledby="tableTitle"
                            size="medium"
                            aria-label="enhanced table"
                        >
                            <EnhancedTableHead
                                headCells={headCells}
                                order={order}
                                orderBy={orderBy}
                                onRequestSort={handleRequestSort}
                            />

                            <TableBody>
                                {stableSort(users, getComparator(order, orderBy))
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((user, index) => (
                                        <TableRow
                                            hover
                                            onClick={(event) => handleClick(event, user._id)}
                                            tabIndex={-1}
                                            key={user._id}
                                        >
                                            <TableCell component="th" id={user._id} scope="row">
                                                {user._id}
                                            </TableCell>
                                            <TableCell>{user.name}</TableCell>
                                            <TableCell>{user.email}</TableCell>
                                        </TableRow>
                                    ))}
                                {emptyRows > 0 && (
                                    <TableRow style={{ height: 53 * emptyRows }}>
                                        <TableCell colSpan={6} />
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 25]}
                        component="div"
                        count={users.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Paper>

                {/* Cards */}
                <div className="grid grid-cols-12 gap-6">
                    {/* Doughnut chart (Top Countries) */}
                    <DashboardCard06 />
                    {/* Table (Top Channels) */}
                    <DashboardCard07 />
                    {/* Line chart (Sales Over Time) */}
                    <DashboardCard08 />
                    {/* Stacked bar chart (Sales VS Refunds) */}
                    <DashboardCard09 />
                </div>

            </div>
        </main>
    )
}

const mapStateToProps = (state) => ({
    users: state.users.users
})

const mapDispatchToProps = (dispatch) => {
    return {
        onLoadData: () => dispatch(getAllUsers()),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Users);