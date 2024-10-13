import React, { useState, useEffect } from "react";

interface User {
  id: number;
  email: string;
  role: string;
}

const AdminUsers: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [email, setEmail] = useState<string>("");

  // Mock backend call to fetch users
  useEffect(() => {
    // Replace this with your actual backend call
    const fetchUsers = async () => {
      const response = await fetch('/api/users'); // Example endpoint
      const data = await response.json();
      setUsers(data);
    };

    fetchUsers();
  }, []);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Add backend logic to handle submission
    console.log("Email submitted:", email);
  };

  return (
    <div>
      <h1>Admin Users</h1>
      <form onSubmit={handleSubmit} style={{ display: "flex", alignItems: "center" }}>
        <label htmlFor="email" style={{ marginRight: "10px" }}>Add email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ marginRight: "10px" }}
          required
        />
        <button type="submit">Add</button>
      </form>

      <table style={{ marginTop: "20px", width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid black", padding: "8px" }}>ID</th>
            <th style={{ border: "1px solid black", padding: "8px" }}>Email</th>
            <th style={{ border: "1px solid black", padding: "8px" }}>Role</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user.id}>
                <td style={{ border: "1px solid black", padding: "8px" }}>{user.id}</td>
                <td style={{ border: "1px solid black", padding: "8px" }}>{user.email}</td>
                <td style={{ border: "1px solid black", padding: "8px" }}>{user.role}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3} style={{ textAlign: "center", padding: "8px" }}>
                No users found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AdminUsers;
