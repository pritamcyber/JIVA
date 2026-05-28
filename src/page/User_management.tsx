import DashboardLayout from "../layout_for_dashboard/Dashboard_layout";
import Topbar from "../components/layout/topBar";
import PageHeader from "../components/user_management_page/Page_header";
import UserList from "../components/user_management_page/userList";
import StatsSection from "../components/user_management_page/State_section/StateSection";
import FilterSection from "../components/user_management_page/FilterSection";
// import {users} from "../components/user_management_page/user_data";
import { useState, useMemo } from "react";
import { users } from "../components/user_management_page/user_data";

import {AddUserModal} from "../components/user_management_page/AddUserModal";

// StatsSection from "../components/user_management_page/State_section/StateSection";
const UserManagementPage = () => {

     const [search, setSearch] = useState("");


    const [usersData, setUsers] =
    useState(users);

    // const [users, setUsers] =
    useState(users);

     const [isModalOpen, setIsModalOpen] = useState(false);

  const [status, setStatus] =
    useState("All");

  const [age, setAge] =
    useState("All");

  const filteredUsers = useMemo(() => {

    return usersData.filter((user) => {

      // SEARCH
      const matchesSearch =
        user.name
          .toLowerCase()
          .includes(
            search.toLowerCase()
          ) ||

        user.role
          .toLowerCase()
          .includes(
            search.toLowerCase()
          ) ||

        user.email
          .toLowerCase()
          .includes(
            search.toLowerCase()
          );

      // STATUS
      const matchesStatus =
        status === "All"
          ? true
          : user.status === status;

      // AGE
      let matchesAge = true;

      if (age === "13-17") {
        matchesAge =
          user.age >= 13 &&
          user.age <= 17;
      }

      if (age === "18-35") {
        matchesAge =
          user.age >= 18 &&
          user.age <= 35;
      }

      if (age === "36-59") {
        matchesAge =
          user.age >= 36 &&
          user.age <= 59;
      }

      if (age === "60+") {
        matchesAge =
          user.age >= 60;
      }
      console.log({
        matchesSearch,
        matchesStatus,
        matchesAge,
      });

      return (
        matchesSearch &&
        matchesStatus &&
        matchesAge
      );
    });

  }, [search, status, age,usersData]);


  
  return (
    <>
    
    <DashboardLayout>

      <Topbar />

      {/* <div className="p-6">
        <h1 className="text-4xl font-semibold text-gray-800">
          User Management
        </h1>

        <p className="text-gray-500 mt-2">
          Manage user accounts and permissions
        </p>
      </div> */}

{/* <AddUserModal></AddUserModal> */}

      <div className="p-6 space-y-6 h-screen  pb-20 overflow-y-auto">

        <PageHeader onAddUser={() =>{
            setIsModalOpen(true) 
        console.log("Add User Clicked" , isModalOpen)}}
        />

        <StatsSection users = {filteredUsers} />

         <FilterSection
          search={search}
          status={status}
          age={age}
          onSearchChange={setSearch}
          onStatusChange={setStatus}
          onAgeChange={setAge}
        />

        {/* cast to any to satisfy TS if UserList props aren't typed here */}
        {(() => {
          const UserListAny = UserList as any;
          return <UserListAny users={filteredUsers} />;
        })()}

        {isModalOpen && (
        <AddUserModal
          users={usersData}
          setUsers={setUsers}
          isOpen={isModalOpen}
          setIsOpen={setIsModalOpen}
        />
      )}

      </div>

    </DashboardLayout>

    </>
  );
};

export default UserManagementPage;