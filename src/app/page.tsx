"use client";

import Counter from "@/components/Counter";
import ExpandableText from "@/components/ExpandableText";
import TermsAndConditions from "@/components/TermsAndConditions";

import { useState } from "react";

export type User = {
  id: string;
  name: string;
  email: string;
  isAdmin?: boolean;
};

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);

  const onUserAdd = (user: User) => {
    setUsers([...users, user]);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <UserForm onUserAdd={onUserAdd} />
      <UserList users={users} /> */}
      <Counter initialCount={0} />
      <TermsAndConditions />
      <ExpandableText
        text="
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, facilis. Iste incidunt omnis odio asperiores aspernatur aliquid. Excepturi nobis voluptatum minima repudiandae officia inventore facilis earum possimus iusto laudantium natus odit commodi, libero itaque impedit sunt! Aspernatur harum labore eum deleniti architecto. Doloribus nam nostrum eos quis beatae, enim eveniet cum velit blanditiis officiis odio incidunt ipsa sed perspiciatis quibusdam. Odio laboriosam unde perferendis possimus quibusdam et, neque tempore ipsa deserunt rem similique. Nihil ullam vel illo? Exercitationem voluptas amet, distinctio veniam suscipit provident est laudantium perspiciatis, vel sed unde aspernatur molestiae quo dignissimos sit excepturi sint veritatis similique minima."
      />
    </main>
  );
}
