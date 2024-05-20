import { User } from "@/app/page";

const UserList = ({ users }: { users: User[] }) => {
  if (users.length === 0) return <p>No users available.</p>;

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default UserList;
