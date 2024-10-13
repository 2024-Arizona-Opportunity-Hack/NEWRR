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
    <div style={{ margin: "20px", justifyContent: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h1 className="text-4xl font-extrabold text-center my-8">Admin Users</h1>
      <form onSubmit={handleSubmit} className="flex items-center justify-center mb-4 w-full max-w-2xl mx-auto">
        <label htmlFor="email" className="mr-2 whitespace-nowrap">Add email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-grow mr-2 px-2 py-1 border rounded"
          required
        />
        <button type="submit" className="px-4 py-1 bg-blue-500 text-white rounded whitespace-nowrap">Add</button>
      </form>

      <table style={{ marginTop: "20px", width: "60%", borderCollapse: "collapse" }}>
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
