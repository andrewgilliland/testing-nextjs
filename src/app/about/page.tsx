import { submitForm } from "@/utils/actions";

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>About</h1>

      <form action={submitForm}>
        <div className="flex flex-col">
          <label htmlFor="name">Name</label>
          <input
            data-testid="cypress-name-input"
            type="text"
            name="name"
            id="name"
          />
        </div>
        <div className="flex flex-col mt-8">
          <label htmlFor="email">Email</label>
          <input
            data-testid="cypress-email-input"
            type="email"
            name="email"
            id="email"
          />
        </div>
        <div className="mt-8">
          <button className="bg-white text-black font-semibold px-4 py-2">
            Sign Up
          </button>
        </div>
      </form>
    </main>
  );
}
