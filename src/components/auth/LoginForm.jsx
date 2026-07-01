import { useState } from "react";
import RoleSelector from "./RoleSelector";

function LoginForm() {
  const [role, setRole] = useState("student");

  return (
    <form className="space-y-5">
      <RoleSelector role={role} setRole={setRole} />

      <input
        type="email"
        placeholder="Email"
        className="w-full border rounded-lg p-3"
      />

      <input
        type="password"
        placeholder="Password"
        className="w-full border rounded-lg p-3"
      />

      <button
        type="submit"
        className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
      >
        Login as {role}
      </button>
    </form>
  );
}

export default LoginForm;