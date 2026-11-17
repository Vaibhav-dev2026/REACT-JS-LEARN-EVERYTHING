import { useState } from "react";

import UserForm from "./UserForm";
import UserTable from "./UserTable";

import "./UserManagement.css";

// Starting sample data
const initialUsers = [
  {
    id: 1,
    name: "Rahul Sharma",
    email: "rahul@example.com",
    role: "Admin",
  },
  {
    id: 2,
    name: "Priya Singh",
    email: "priya@example.com",
    role: "User",
  },
  {
    id: 3,
    name: "ABC XYZ",
    email: "abc@example.com",
    role: "Editor",
  },
];

function UserManagement() {

  // Users ka data manage karne ke liye state
  const [users, setUsers] = useState(initialUsers);

  // Search input ki value manage karne ke liye
  const [searchTerm, setSearchTerm] = useState("");

  // Form show ya hide karne ke liye
  const [isFormOpen, setIsFormOpen] = useState(false);

  // Check karne ke liye ki hum Add kar rahe hain ya Edit
  const [editingUser, setEditingUser] = useState(null);


  // Add User button click karne par
  const handleAddUser = () => {
    setEditingUser(null);
    setIsFormOpen(true);
  };


  // Add aur Edit dono form submission yahan handle honge
  const handleSaveUser = (userData) => {

    // Agar editingUser available hai toh Update operation hoga
    if (editingUser) {

      setUsers((currentUsers) =>
        currentUsers.map((user) =>
          user.id === editingUser.id
            ? { ...user, ...userData }
            : user
        )
      );

    } else {

      // Otherwise naya user create hoga
      const newUser = {
        id: Date.now(),
        ...userData,
      };

      setUsers((currentUsers) => [
        ...currentUsers,
        newUser,
      ]);
    }

    // Form close kar do
    setIsFormOpen(false);
    setEditingUser(null);
  };


  // Edit button click karne par
  const handleEditUser = (user) => {
    setEditingUser(user);
    setIsFormOpen(true);
  };


  // Delete button click karne par
  const handleDeleteUser = (userId) => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );

    if (!confirmDelete) {
      return;
    }

    setUsers((currentUsers) =>
      currentUsers.filter((user) => user.id !== userId)
    );
  };


  // Search ke according users filter karna
  const filteredUsers = users.filter((user) =>
    user.name
      .toLowerCase()
      .includes(searchTerm.trim().toLowerCase())
  );


  // Form close karne ke liye
  const handleCloseForm = () => {
    setIsFormOpen(false);
    setEditingUser(null);
  };


  return (
    <div className="user-management">

      <div className="page-header">

        <div>
          <p className="subtitle">ADMIN PANEL</p>

          <h1>User Management</h1>

          <p className="description">
            Manage your users from one place.
          </p>
        </div>

        <button
          className="add-user-btn"
          onClick={handleAddUser}
        >
          + Add User
        </button>

      </div>


      <div className="toolbar">

        <input
          type="text"
          placeholder="Search users by name..."
          value={searchTerm}
          onChange={(event) =>
            setSearchTerm(event.target.value)
          }
          className="search-input"
        />

        <p className="user-count">
          Showing {filteredUsers.length} of {users.length} users
        </p>

      </div>


      {/* Form sirf tab display hoga jab isFormOpen true hoga */}

      {isFormOpen && (
        <UserForm
          key={editingUser ? editingUser.id : "new-user"}
          initialData={editingUser}
          onSave={handleSaveUser}
          onCancel={handleCloseForm}
        />
      )}


      {/* Users table */}

      <UserTable
        users={filteredUsers}
        onEdit={handleEditUser}
        onDelete={handleDeleteUser}
      />

    </div>
  );
}

export default UserManagement;