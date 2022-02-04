import { useContext, useState } from 'react';
import { PokemonsContext } from '../../../providers/PokemonsProvider';

const Form = () => {
  const { insertUser } = useContext(PokemonsContext);
  const [newUser, setNewUser] = useState({});

  // Storing the Insert User Form Data.
  const addNewUser = (e, field) => {
    setNewUser({
      ...newUser,
      [field]: e.target.value,
    });
  };

  // Inserting a new user into the Database.
  const submitUser = (e) => {
    e.preventDefault();
    insertUser(newUser);
    e.target.reset();
  };

  return (
    <form className="insertForm" onSubmit={submitUser}>
      <h2>Insert User</h2>
      <label htmlFor="name">Username</label>
      <input type="text" id="name" onChange={(e) => addNewUser(e, 'username')} placeholder="Enter username" autoComplete="off" required />
      <label htmlFor="password">Password</label>
      <input type="password" id="password" onChange={(e) => addNewUser(e, 'password')} placeholder="Enter password" autoComplete="off" required />
      <input type="submit" value="Insert" />
    </form>
  );
};

export default Form;
