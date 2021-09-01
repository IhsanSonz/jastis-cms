import React, { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { KeyboardBackspace } from '@material-ui/icons';
import { SidebarItem, _sidebarItems } from './_sidebarItems';

function Sidebar({
  sidebarOpen,
  setSidebarOpen
}) {

  const location = useLocation();
  const { pathname } = location;
  const page = pathname.split('/')[1];

  const trigger = useRef(null);
  const sidebar = useRef(null);

  const [dropdown, setDropdown] = useState('none');

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (!sidebarOpen || sidebar.current.contains(target) || trigger.current.contains(target)) return;
      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  const dropdownControl = (name) => {
    if (dropdown === name) {
      setDropdown('none');
    } else {
      setDropdown(name);
    }
  }

  return (
    <div className="lg:w-64">
      {/* Sidebar backdrop (mobile only) */}
      <div className={`fixed inset-0 bg-gray-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} aria-hidden="true"></div>

      {/* Sidebar */}
      <div
        id="sidebar"
        ref={sidebar}
        className={`absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 transform h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 flex-shrink-0 bg-gray-800 p-4 transition-transform duration-200 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-64'}`}
      >

        {/* Sidebar header */}
        <div className="flex justify-between mb-10 pr-3 sm:px-2">
          {/* Close button */}
          <button
            ref={trigger}
            className="lg:hidden text-gray-500 hover:text-gray-400"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            aria-expanded={sidebarOpen}
          >
            <span className="sr-only">Close sidebar</span>
            <KeyboardBackspace />
          </button>
          {/* Logo */}
          <NavLink exact to="/" className="block">
            <svg width="32" height="32" viewBox="0 0 32 32">
              <defs>
                <linearGradient x1="28.538%" y1="20.229%" x2="100%" y2="108.156%" id="logo-a">
                  <stop stopColor="#A5B4FC" stopOpacity="0" offset="0%" />
                  <stop stopColor="#A5B4FC" offset="100%" />
                </linearGradient>
                <linearGradient x1="88.638%" y1="29.267%" x2="22.42%" y2="100%" id="logo-b">
                  <stop stopColor="#38BDF8" stopOpacity="0" offset="0%" />
                  <stop stopColor="#38BDF8" offset="100%" />
                </linearGradient>
              </defs>
              <rect fill="#6366F1" width="32" height="32" rx="16" />
              <path d="M18.277.16C26.035 1.267 32 7.938 32 16c0 8.837-7.163 16-16 16a15.937 15.937 0 01-10.426-3.863L18.277.161z" fill="#4F46E5" />
              <path d="M7.404 2.503l18.339 26.19A15.93 15.93 0 0116 32C7.163 32 0 24.837 0 16 0 10.327 2.952 5.344 7.404 2.503z" fill="url(#logo-a)" />
              <path d="M2.223 24.14L29.777 7.86A15.926 15.926 0 0132 16c0 8.837-7.163 16-16 16-5.864 0-10.991-3.154-13.777-7.86z" fill="url(#logo-b)" />
            </svg>
          </NavLink>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-xs uppercase text-gray-500 font-semibold pl-3">Pages</h3>
          <ul className="mt-3">
            {_sidebarItems.map((item, key) => (
              <SidebarItem
                key={key}
                item={item}
                page={page}
                dropdown={dropdown}
                setDropdown={dropdownControl}
              />
            ))}
            {/* Team
            <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${isTeam && 'bg-gray-900'}`} onClick={() => setIsTeam(!isTeam)}>
              <NavLink exact to="/" className={`block text-gray-200 hover:text-white transition duration-150 ${isTeam && 'hover:text-gray-200'}`}>
                <div className="flex items-center justify-between">
                  <div className="flex flex-grow">
                    <Dashboard className="sidebar-icon" />
                    <span className="text-sm font-medium">Team</span>
                  </div>
                  Icon
                  <div className="flex flex-shrink-0 ml-2">
                    <ExpandMore className={`w-3 h-3 flex-shrink-0 ml-1 fill-current text-gray-400  ${isTeam && 'transform rotate-180'}`} />
                  </div>
                </div>
              </NavLink>
              <ul className={`pl-9 mt-1 ${!isTeam && 'hidden'}`}>
                <li className="mb-1 last:mb-0">
                  <NavLink exact to="/" className={`block text-gray-200 hover:text-white transition duration-150 ${page === 'team-tabs' && 'text-indigo-400 hover:text-indigo-400'}`}>
                    <span className="text-sm font-medium">Team - Tabs</span>
                  </NavLink>
                </li>
                <li className="mb-1 last:mb-0">
                  <NavLink exact to="/" className={`block text-gray-200 hover:text-white transition duration-150" ${page === 'team-tiles' && 'text-indigo-400 hover:text-indigo-400'}`}>
                    <span className="text-sm font-medium">Team - Tiles</span>
                  </NavLink>
                </li>
              </ul>
            </li>
            Orders
            <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${page === 'orders' && 'bg-gray-900'}`}>
            <NavLink exact to="/" className={`block text-gray-200 hover:text-white transition duration-150 ${page === 'orders' && 'hover:text-gray-200'}`}>
            <div className="flex items-center justify-between">
            <div className="flex flex-grow">
            <Dashboard className="sidebar-icon" />
            <span className="text-sm font-medium">Orders</span>
            </div>
            Badge
            <div className="flex flex-shrink-0 ml-2">
            <span className="inline-flex items-center justify-center h-5 text-xs font-medium text-white bg-indigo-500 px-2 rounded-sm">4</span>
            </div>
            </div>
            </NavLink>
            </li>
            Tasks
            <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${page === 'tasks' && 'bg-gray-900'}`}>
              <NavLink exact to="/" className={`block text-gray-200 hover:text-white transition duration-150 ${page === 'tasks' && 'hover:text-gray-200'}`}>
                <div className="flex flex-grow">
                  <Dashboard className="sidebar-icon" />
                  <span className="text-sm font-medium">Tasks</span>
                </div>
              </NavLink>
            </li>
            Applications
            <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${page === 'applications' && 'bg-gray-900'}`}>
              <NavLink exact to="/" className={`block text-gray-200 hover:text-white transition duration-150 ${page === 'applications' && 'hover:text-gray-200'}`}>
                <div className="flex flex-grow">
                  <svg className="flex-shrink-0 h-6 w-6 mr-3" viewBox="0 0 24 24">
                    <circle className={`fill-current text-gray-400 ${page === 'applications' && 'text-indigo-300'}`} cx="18.5" cy="5.5" r="4.5" />
                    <circle className={`fill-current text-gray-600 ${page === 'applications' && 'text-indigo-500'}`} cx="5.5" cy="5.5" r="4.5" />
                    <circle className={`fill-current text-gray-600 ${page === 'applications' && 'text-indigo-500'}`} cx="18.5" cy="18.5" r="4.5" />
                    <circle className={`fill-current text-gray-400 ${page === 'applications' && 'text-indigo-300'}`} cx="5.5" cy="18.5" r="4.5" />
                  </svg>
                  <span className="text-sm font-medium">Applications</span>
                </div>
              </NavLink>
            </li>
            Settings
            <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${page === 'settings' && 'bg-gray-900'}`}>
              <NavLink exact to="/" className={`block text-gray-200 hover:text-white transition duration-150 ${page === 'settings' && 'hover:text-gray-200'}`}>
                <div className="flex flex-grow">
                  <svg className="flex-shrink-0 h-6 w-6 mr-3" viewBox="0 0 24 24">
                    <path className={`fill-current text-gray-600 ${page === 'settings' && 'text-indigo-500'}`} d="M19.714 14.7l-7.007 7.007-1.414-1.414 7.007-7.007c-.195-.4-.298-.84-.3-1.286a3 3 0 113 3 2.969 2.969 0 01-1.286-.3z" />
                    <path className={`fill-current text-gray-400 ${page === 'settings' && 'text-indigo-300'}`} d="M10.714 18.3c.4-.195.84-.298 1.286-.3a3 3 0 11-3 3c.002-.446.105-.885.3-1.286l-6.007-6.007 1.414-1.414 6.007 6.007z" />
                    <path className={`fill-current text-gray-600 ${page === 'settings' && 'text-indigo-500'}`} d="M5.7 10.714c.195.4.298.84.3 1.286a3 3 0 11-3-3c.446.002.885.105 1.286.3l7.007-7.007 1.414 1.414L5.7 10.714z" />
                    <path className={`fill-current text-gray-400 ${page === 'settings' && 'text-indigo-300'}`} d="M19.707 9.292a3.012 3.012 0 00-1.415 1.415L13.286 5.7c-.4.195-.84.298-1.286.3a3 3 0 113-3 2.969 2.969 0 01-.3 1.286l5.007 5.006z" />
                  </svg>
                  <span className="text-sm font-medium">Settings</span>
                </div>
              </NavLink>
            </li> */}
          </ul>
        </div>

      </div>
    </div>
  );
}

export default Sidebar;