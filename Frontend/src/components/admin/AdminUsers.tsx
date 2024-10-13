import React, { useState, useEffect } from "react";
import { GetMethods, PostMethods, UserDetails } from "@newrr/api";

const AdminUsers: React.FC = () => {
  const [users, setUsers] = useState<UserDetails[]>([]);
  const [email, setEmail] = useState<string>("");

  // Function to fetch users from the backend
  const fetchUsers = async () => {
    const getMethods = new GetMethods(import.meta.env.VITE_G_API_URL);
    const users = await getMethods.getAdminUsers();
    setUsers(users);
  };

  // Fetch users on component mount
  useEffect(() => {
    fetchUsers();
  }, []);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const postMethods = new PostMethods(import.meta.env.VITE_G_API_URL);
    
    try {
      // Post the new email to the backend
      await postMethods.postAddAdminUser(email);
      
      // Clear the email input field
      setEmail("");
      
      // Refetch the updated list of users
      await fetchUsers();
    } catch (error) {
      console.error("Error adding user:", error);
      // Handle the error (e.g., show a message to the user)
    }
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
                <td style={{ border: "1px solid black", padding: "8px" }}>{index + 1}</td>
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
