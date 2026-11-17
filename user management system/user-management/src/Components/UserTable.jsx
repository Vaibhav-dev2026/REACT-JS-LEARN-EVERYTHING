function UserTable({ users, onEdit, onDelete }) {

  return (
    <div className="table-container">

      <table>

        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>


        <tbody>

          {users.length > 0 ? (

            users.map((user, index) => (

              <tr key={user.id}>

                <td>{index + 1}</td>

                <td>{user.name}</td>

                <td>{user.email}</td>

                <td>
                  <span className={`role-badge ${user.role.toLowerCase()}`}>
                    {user.role}
                  </span>
                </td>

                <td>
                  <div className="action-buttons">

                    <button
                      className="edit-btn"
                      onClick={() => onEdit(user)}
                    >
                      Edit
                    </button>

                    <button
                      className="delete-btn"
                      onClick={() => onDelete(user.id)}
                    >
                      Delete
                    </button>

                  </div>
                </td>

              </tr>

            ))

          ) : (

            <tr>
              <td colSpan="5" className="empty-state">
                No users found.
              </td>
            </tr>

          )}

        </tbody>

      </table>

    </div>
  );
}

export default UserTable;