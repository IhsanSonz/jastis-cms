import React from 'react';
import SearchModal from './header/SearchModal';
import Notifications from './header/Notifications';
import Help from './header/Help';
import UserMenu from './header/UserMenu';
import MenuIcon from '@material-ui/icons/Menu';

function Header({
  sidebarOpen,
  setSidebarOpen,
  setLoading
}) {
  return (
    <header className="sticky top-0 bg-white border-b border-gray-200 z-30">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 -mb-px">

          {/* Header: Left side */}
          <div className="flex">

            {/* Hamburger button */}
            <button
              className="text-gray-500 hover:text-gray-600 lg:hidden"
              aria-controls="sidebar"
              aria-expanded={sidebarOpen}
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <span className="sr-only">Open sidebar</span>
              <MenuIcon />
            </button>

          </div>

          {/* Header: Right side */}
          <div className="flex items-center">

            <SearchModal />
            <Notifications />
            <Help />
            {/*  Divider */}
            <hr className="w-px h-6 bg-gray-200 mx-3" />
            <UserMenu setLoading={setLoading} />

          </div>

        </div>
      </div>
    </header>
  );
}

export default Header;