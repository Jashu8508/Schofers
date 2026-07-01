function RoleSelector({ role, setRole }) {
  return (
    <div className="mb-6">
      <label className="block mb-2 font-medium">
        Select Role
      </label>

      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="w-full border rounded-lg p-3"
      >
        <option value="student">Student</option>
        <option value="teacher">Teacher</option>
        <option value="admin">NGO Admin</option>
      </select>
    </div>
  );
}

export default RoleSelector;