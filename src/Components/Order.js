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
    width: '30%',
  },
  table: {
    textAlign: 'center',
  },
});

const Order = ({
  id, client, orderClient, table, handleClick, date, time, nameBtn, leadTime,
}) => (
  <li className={css(styles.order)} key={id}>
    <p>
      <strong>Data: </strong>
      {date}
    </p>
    <p>
      <strong>Hora: </strong>
      {time}
    </p>
    <p>
      <strong>Tempo de preparo: </strong>
      {leadTime}
    </p>
    <p>
      <strong>Mesa: </strong>
      {table}
    </p>
    <p>
      <strong>Nome do cliente: </strong>
      {client}
    </p>
    <table className={css(styles.table)}>
      <tr>
        <th>Quant.</th>
        <th>Item</th>
      </tr>
      {orderClient.map((n) => (
        <tr>
          <td>{n.quant}</td>
          <td>{n.item}</td>
        </tr>
      ))}
    </table>
    <Button handleClick={handleClick} name={nameBtn} />
  </li>
);

Order.propTypes = {
  id: PropTypes.string.isRequired,
  client: PropTypes.string.isRequired,
  table: PropTypes.number.isRequired,
  orderClient: PropTypes.arrayOf.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  leadTime: PropTypes.string.isRequired,
  nameBtn: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Order;
