import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';
import Button from './Button';


const styles = StyleSheet.create({
  order: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#DCCEAF',
    margin: '10px',
    padding: '10px',
    borderRadius: '5px',
    width: '23vw',
    border: '5px double #8D0A0A',
  },
  table: {
    textAlign: 'center',
  },
});

const Order = ({
  id, client, orderClient, table, handleClick, date, time, nameBtn, leadTime, status,
}) => (
  <li className={css(styles.order)} key={id}>
    <span>
      <b>Data: </b>
      {date}
    </span>
    <span>
      <b>Hora: </b>
      {time}
    </span>
    <span>
      <b>Tempo de preparo: </b>
      {leadTime}
    </span>
    <span>
      <b>Status: </b>
      {status}
    </span>
    <span>
      <b>Mesa: </b>
      {table}
    </span>
    <span>
      <b>Nome do cliente: </b>
      {client}
    </span>
    <table className={css(styles.table)}>
      <thead>
        <tr>
          <th>Quant.</th>
          <th>Item</th>
        </tr>
      </thead>
      {orderClient.map((n) => (
        <tbody>
          <tr>
            <td>{n.quant}</td>
            <td>{n.item}</td>
          </tr>
        </tbody>
      ))}
    </table>
    <Button handleClick={handleClick} id={id} name={nameBtn} />
  </li>
);

Order.propTypes = {
  id: PropTypes.string.isRequired,
  client: PropTypes.string.isRequired,
  table: PropTypes.string.isRequired,
  orderClient: PropTypes.arrayOf.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  leadTime: PropTypes.string.isRequired,
  nameBtn: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Order;
