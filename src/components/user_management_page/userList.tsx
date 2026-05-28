import { useEffect } from "react";
import UserCard from "./userCard";

// import type { User } from "./user_data";

// type Props = {
//   users: User[];

// };


import { users} from "./user_data";
const UserList = ({ users }: { users: any[] }) => {
    useEffect(() => {
        console.log("UserList rendered with users:", users);
      }, [users]);
  return (
    <div className="space-y-5">

      {users.map((user) => (
        <UserCard
          key={user.id}
          user={user}
        />
      ))}

    </div>
  );
};

export default UserList;