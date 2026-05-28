import DashboardLayout from "../layout_for_dashboard/Dashboard_layout";

import { useState } from "react";
import Topbar from "../components/layout/topBar";

import UserProfileHeader from "../components/UserDetailPage/UserProfileHeader";

import UserStatsSection from "../components/user-details/UserStatsSection";

// import UserTabs from ".. ./components/user-details/UserTabs";
import UserTabs from "../components/UserDetailPage/UserTabs";


import OverviewTab from "../components/UserDetailPage/TabContent/OverviewTab";

import OrdersTab from "../components/UserDetailPage/TabContent/OrdersTab";

import PaymentsTab from "../components/UserDetailPage/TabContent/PaymentsTab";

import FamilyMembersTab from "../components/UserDetailPage/TabContent/FamilyMembersTab";
import type { UserTab } from "../types/UserTabs";
const UserDetailPage = () => {



    const [activeTab, setActiveTab] =
    useState<UserTab>("overview");

  const renderTab = () => {

    switch (activeTab) {

      case "overview":
        return <OverviewTab />;

      case "orders":
        return <OrdersTab />;

      case "payments":
        return <PaymentsTab />;

      case "family":
        return <FamilyMembersTab />;

      default:
        return null;
    }
  };

  return (
    <DashboardLayout>

      <Topbar />

      <div className="p-6">

        <UserProfileHeader />

          {/* <UserProfileHeader /> */}

        <UserStatsSection />


        <UserTabs
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        {renderTab()}

      </div>

    </DashboardLayout>
  );
};

export default UserDetailPage;