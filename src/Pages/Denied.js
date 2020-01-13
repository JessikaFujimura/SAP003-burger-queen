import React from 'react';
import { Link } from 'react-router-dom';

const Denied = () => {
  return (
    <section>
      <h1> 401 Authorization Required</h1>
      <p>
        <span>Para acessar está página é preciso fazer </span>
        <strong><Link to="/">Login!</Link></strong>
      </p>
    </section>
  );
};

export default Denied;
