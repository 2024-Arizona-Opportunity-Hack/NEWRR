import React, { useState, useEffect } from "react";
import { GetMethods, PostMethods, UserDetails} from "@newrr/api";

const AdminUsers: React.FC = () => {
  const [users, setUsers] = useState<UserDetails[]>([]);
  const [email, setEmail] = useState<string>("");

  // Mock backend call to fetch users
  useEffect(() => {
    const fetchUsers = async () => {
      const getMethods = new GetMethods(import.meta.env.VITE_G_API_URL);
      const users = await getMethods.getAdminUsers();
      setUsers(users);
    };

    fetchUsers();
  }, []);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const postMethods = new PostMethods(import.meta.env.VITE_G_API_URL);
    postMethods.postAddAdminUser(email);
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
            users.map((user, index) => (
              <tr key={`user-${index}`}>
                <td style={{ border: "1px solid black", padding: "8px" }}>{index}</td>
                <td style={{ border: "1px solid black", padding: "8px" }}>{user.email}</td>
                <td style={{ border: "1px solid black", padding: "8px" }}>{user.role.name}</td>
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
