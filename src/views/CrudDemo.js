import React from 'react';
import Form from '../components/PokeTrainerBackedRelated/CrudDemo/Form/Form';
import UserList from '../components/PokeTrainerBackedRelated/CrudDemo/UserList/UserList';
import { CrudActions } from '../providers/CrudActions';
import { Provider } from '../providers/PokemonsProvider';
import Nav from '../components/Nav/Nav';

const CrudDemo = () => {
  const data = CrudActions();
  return (
    <>
      <Nav />
      <Provider value={data}>
        <div className="App">
          <h1>Simple React + PHP CRUD demo</h1>
          <div className="wrapper">
            <section className="left-side">
              <Form />
            </section>
            <section className="right-side">
              <UserList />
            </section>
          </div>
        </div>
      </Provider>
    </>
  );
};

export default CrudDemo;
