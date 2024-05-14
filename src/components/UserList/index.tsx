import { User } from "@/app/page";
import { FC } from "react";

type UserListProps = { users: User[] };

const UserList: FC<UserListProps> = ({ users }) => {
  return (
    <div>
      <h1>User List</h1>
      <ul className="w-64">
        {users.map((user, index) => (
          <li
            className="flex gap-10 text-white border-2 border-white"
            key={index}
          >
            <div>{user.name}</div>
            <div>{user.email}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
