import React from 'react'

import { Assignment, Class, Dashboard, ExpandMore, Group, Today } from "@material-ui/icons";
import { NavLink } from 'react-router-dom';

const _sidebarItems = [
    {
        path: '/',
        name: 'Dashboard',
        icon: <Dashboard className="sidebar-item-icon" />
    },
    {
        path: '/users',
        name: 'Users',
        icon: <Group className="sidebar-item-icon" />
    },
    {
        path: '/classes',
        name: 'Classes',
        icon: <Class className="sidebar-item-icon" />,
        content: [
            {
                path: '/classes/list',
                name: 'List Classes',
            },
            {
                path: '/classes/create',
                name: 'Create Classes',
            },
        ],
    },
    {
        path: '/tasks',
        name: 'Tasks',
        icon: <Assignment className="sidebar-item-icon" />,
        content: [
            {
                path: '/tasks/list',
                name: 'List Tasks',
            },
            {
                path: '/tasks/create',
                name: 'Create Tasks',
            },
        ],
    },
    {
        path: '/events',
        name: 'Events',
        icon: <Today className="sidebar-item-icon" />
    },
];

const SidebarItem = ({ item, page, dropdown, setDropdown }) => {
    const path = item.path.split('/')[1];

    const sidebarWrapper = () => (
        <li className={`sidebar-item-container ${page === path && 'bg-gray-900'}`} onClick={() => setDropdown(item.name)}>
            <div className={`block text-gray-300 cursor-pointer ${page === '' && 'hover:text-gray-200'}`}>
                <div className="flex items-center justify-between ">
                    <div className="sidebar-item-content">
                        {item.icon}
                        <span className="text-sm font-medium">{item.name}</span>
                    </div>
                    <div className="flex flex-shrink-0 ml-2">
                        <ExpandMore className={`w-3 h-3 flex-shrink-0 ml-1 fill-current text-gray-400  ${dropdown === item.name && 'transform rotate-180'}`} />
                    </div>
                </div>
            </div>
            <ul className={`pl-9 mt-1 ${dropdown !== item.name && 'hidden'}`}>
                {item.content.map((item, key) => (
                    <li key={key} className="mb-1 last:mb-0">
                        <NavLink exact to={item.path} className={`block text-gray-300 hover:text-white transition duration-150 ${page === 'team-tabs' && 'text-indigo-400 hover:text-indigo-400'}`}>
                            <span className="text-sm font-medium">{item.name}</span>
                        </NavLink>
                    </li>
                ))}
            </ul>
        </li>
    );

    if (item.content) {
        return sidebarWrapper();
    } else {
        return (
            <li className={`sidebar-item-container ${page === path && 'bg-gray-900'}`}>
                <NavLink exact to={item.path} className={`block text-gray-200 ${page === '' && 'hover:text-gray-200'}`}>
                    <div className="sidebar-item-content">
                        {item.icon}
                        <span className="text-sm font-medium">{item.name}</span>
                    </div>
                </NavLink>
            </li>
        );
    }
};

export {
    _sidebarItems,
    SidebarItem
};