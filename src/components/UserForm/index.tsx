import { User } from "@/app/page";
import { FC, useState } from "react";

type UserFormProps = {
  onUserAdd: ({ name, email }: User) => void;
};

const UserForm: FC<UserFormProps> = ({ onUserAdd }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUserAdd({ name, email });
    setName("");
    setEmail("");
    console.log("handleSubmit");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="border-2 border-white rounded-md p-8"
    >
      <div className="flex flex-col">
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="flex flex-col mt-8">
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mt-8">
        <button
          className="bg-white text-black font-semibold px-4 py-2"
          onClick={handleSubmit}
        >
          Add User
        </button>
      </div>
    </form>
  );
};

export default UserForm;
