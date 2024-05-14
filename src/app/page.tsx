"use client";

import UserForm from "@/components/UserForm";
import UserList from "@/components/UserList";
import { useState } from "react";

export type User = {
  name: string;
  email: string;
};

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);

  const onUserAdd = (user: User) => {
    setUsers([...users, user]);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <UserForm onUserAdd={onUserAdd} />
      <UserList users={users} />
    </main>
  );
}
