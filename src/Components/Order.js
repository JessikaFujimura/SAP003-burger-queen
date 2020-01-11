import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faClock, faCalendarAlt, faUser, faHourglassEnd,
} from '@fortawesome/free-solid-svg-icons';
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
  <li className={css(styles.order)}>
    <p className={css(styles.order)}>
      <b>Status: </b>
      {status}
    </p>
    <span>
      <FontAwesomeIcon icon={faCalendarAlt} />
      {date}
    </span>
    <span>
      <FontAwesomeIcon icon={faClock} />
      {time}
    </span>
    <span>
      <FontAwesomeIcon icon={faHourglassEnd} />
      {leadTime}
    </span>
    <span>
      <b>Mesa: </b>
      {table}
    </span>
    <span>
      <FontAwesomeIcon icon={faUser} />
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
