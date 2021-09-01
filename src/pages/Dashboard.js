import React from 'react';

import AddIcon from '@material-ui/icons/Add';
import WelcomeBanner from '../components/dashboard/WelcomeBanner';
import DashboardAvatars from '../components/dashboard/DashboardAvatars';
import FilterButton from '../components/actions/FilterButton';
import Datepicker from '../components/actions/Datepicker';
import DashboardCard01 from '../components/dashboard/DashboardCard01';
import DashboardCard02 from '../components/dashboard/DashboardCard02';
import DashboardCard03 from '../components/dashboard/DashboardCard03';
import DashboardCard04 from '../components/dashboard/DashboardCard04';
import DashboardCard05 from '../components/dashboard/DashboardCard05';

function Dashboard() {
  return (
    <main>
      <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

        {/* Welcome banner */}
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

        {/* Cards */}
        <div className="grid grid-cols-12 gap-6">

          {/* Line chart (Acme Plus) */}
          <DashboardCard01 />
          {/* Line chart (Acme Advanced) */}
          <DashboardCard02 />
          {/* Line chart (Acme Professional) */}
          <DashboardCard03 />
          {/* Bar chart (Direct vs Indirect) */}
          <DashboardCard04 />
          {/* Line chart (Real Time Value) */}
          <DashboardCard05 />

        </div>

      </div>
    </main>
  );
}

export default Dashboard;