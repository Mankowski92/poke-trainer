import { useContext, useState } from 'react';
import { PokemonsContext } from '../../../providers/PokemonsProvider';

const UserList = () => {
  const { users, userLength, editMode, cancelEdit, updateUser, deleteUser } = useContext(PokemonsContext);

  // Storing users new data when they editing their info.
  const [newData, setNewData] = useState({});

  const saveBtn = () => {
    updateUser(newData);
  };

  const updateNewData = (e, field) => {
    setNewData({
      ...newData,
      [field]: e.target.value,
    });
  };

  const enableEdit = (id, username, password) => {
    setNewData({ id, username, password });
    editMode(id);
  };

  const deleteConfirm = (id) => {
    if (window.confirm('Are you sure?')) {
      deleteUser(id);
    }
  };

  return !userLength ? (
    <p>{userLength === null ? 'Loading...' : 'Please insert some users.'}</p>
  ) : (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Password</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {users.map(({ id, username, password, isEditing }) => {
          return isEditing === true ? (
            <tr key={id}>
              <td>
                <input type="text" defaultValue={username} onChange={(e) => updateNewData(e, 'username')} />
              </td>
              <td>
                <input type="text" defaultValue={password} onChange={(e) => updateNewData(e, 'password')} />
              </td>
              <td>
                <button className="btn green-btn" onClick={() => saveBtn()}>
                  Save
                </button>
                <button className="btn default-btn" onClick={() => cancelEdit(id)}>
                  Cancel
                </button>
              </td>
            </tr>
          ) : (
            <tr key={id}>
              <td>{username}</td>
              <td>{password}</td>
              <td>
                <button className="btn default-btn" onClick={() => enableEdit(id, username, password)}>
                  Edit
                </button>
                <button className="btn red-btn" onClick={() => deleteConfirm(id)}>
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default UserList;
