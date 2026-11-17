import { useState } from "react";

function UserForm({ initialData, onSave, onCancel }) {

  // Form ki values manage karne ke liye use state
  const [formData, setFormData] = useState({
    name: initialData?.name || "",
    email: initialData?.email || "",
    role: initialData?.role || "User",
  });


  // Input fields ki value change hone par
  const handleChange = (event) => {

    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  };


  // Form submit hone par
  const handleSubmit = (event) => {

    event.preventDefault();

    const cleanedData = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      role: formData.role,
    };

    onSave(cleanedData);
  };


  return (
    <div className="form-card">

      <h2>
        {initialData ? "Edit User" : "Add New User"}
      </h2>

      <form onSubmit={handleSubmit}>

        <div className="form-grid">

          {/* Name field */}

          <div className="form-group">
            <label htmlFor="name">Name</label>

            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter full name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>


          {/* Email field */}

          <div className="form-group">
            <label htmlFor="email">Email</label>

            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter email address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>


          {/* Role field */}

          <div className="form-group">
            <label htmlFor="role">Role</label>

            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
            >
              <option value="Admin">Admin</option>
              <option value="Editor">Editor</option>
              <option value="User">User</option>
            </select>
          </div>

        </div>


        {/* Form buttons */}

        <div className="form-actions">

          <button
            type="button"
            className="cancel-btn"
            onClick={onCancel}
          >
            Cancel
          </button>

          <button
            type="submit"
            className="save-btn"
          >
            {initialData ? "Update User" : "Add User"}
          </button>

        </div>

      </form>

    </div>
  );
}

export default UserForm;