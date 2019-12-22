import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';
import Button from './Button';


const styles = StyleSheet.create({
  order: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#bf3904',
    margin: '10px',
    padding: '10px',
    borderRadius: '5px',
    width: '80%',
  },
});

const Order = ({
  id, client, orderClient, table, handleClick, data, hora,
}) => (
  <li className={css(styles.order)} key={id}>
    <p>
      <strong>Data: </strong>
      {data}
    </p>
    <p>
      <strong>Hora: </strong>
      {hora}
    </p>
    <p>
      <strong>Mesa: </strong>
      {table}
    </p>
    <p>
      <strong>Nome do cliente: </strong>
      {client}
    </p>
    {orderClient.map((n) => (
      <p>
        <span>
          {n.quant}
        </span>
        <span>
          {n.item}
        </span>
      </p>
    ))}
    <Button handleClick={handleClick} name="Pronto" />
  </li>
);

Order.propTypes = {
  id: PropTypes.string.isRequired,
  client: PropTypes.string.isRequired,
  table: PropTypes.number.isRequired,
  orderClient: PropTypes.arrayOf.isRequired,
  data: PropTypes.string.isRequired,
  hora: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Order;
