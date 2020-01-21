import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faClock, faCalendarAlt, faUser, faHourglassEnd,
} from '@fortawesome/free-solid-svg-icons';
import Button from './Button';

const styles = StyleSheet.create({
  button: {
    width: 'auto',
    height: 'auto',
    alignSelf: 'center',
    color: '#BF3904',
    border: '3px solid #BF3904',
    borderRadius: '15px',
    fontSize: '1.2rem',
    padding: '1.5vh',
    cursor: 'pointer',
    margin: '1%',
    ':focus': {
      backgroundColor: '#420029',
      color: 'white',
    },
    '@media (min-width: 992px)': {
      padding: '3vh',
      ':hover': {
        backgroundColor: '#420029',
        color: 'white',
      },
    },
  },
  order: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#DCCEAF',
    boxSizing: 'border-box',
    margin: '1vw',
    padding: '1vw',
    borderRadius: '2vw',
    width: '43vw',
    border: '5px double #8D0A0A',
    fontSize: '1rem',
    '@media (min-width: 992px)': {
      width: '25vw',
      fontSize: '1.2rem',
    },
  },
  table: {
    textAlign: 'center',
    boxSizing: 'border-box',
  },
  left: {
    borderRight: '1px solid black',
    borderBottom: '1px solid black',
  },
  right: {
    backgroundColor: '#E7D7A5',
  },
  ready: {
    color: '#FAA71E',
  },
  wait: {
    color: 'red',
  },
  delivery: {
    color: 'green',
  },
});


function Order({
  id, client, orderClient, table, handleClick, date, time, nameBtn, leadTime, status,
}) {
  return (
    <li className={css(styles.order)}>
      <table className={css(styles.table)}>
        <thead>
          <tr>
            <th className={css(styles.left)}>Mesa</th>
            <th className={css(styles.right)}>{table}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><FontAwesomeIcon icon={faUser} /></td>
            <td>{client}</td>
          </tr>
          <tr>
            <td><strong>Status:</strong></td>
            {
            status === 'pronto'
              ? <td className={css(styles.ready)}>{status}</td>
              : false
            }
            {
            status === 'em preparação'
              ? <td className={css(styles.wait)}>{status}</td>
              : false
            }
            {status === 'entregue'
              ? <td className={css(styles.delivery)}>{status}</td>
              : false
            }
          </tr>
          <tr>
            <td><FontAwesomeIcon icon={faCalendarAlt} /></td>
            <td>{date}</td>
          </tr>
          <tr>
            <td><FontAwesomeIcon icon={faClock} /></td>
            <td>{time}</td>
          </tr>
          <tr>
            <td><FontAwesomeIcon icon={faHourglassEnd} /></td>
            <td>{leadTime}</td>
          </tr>
        </tbody>
        <br></br>
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
              <td>
                {n.optionChosen
                  ? `${n.item} de ${n.optionChosen} com ${n.addChosen}`
                  : n.item
                }
              </td>
            </tr>
          </tbody>
        ))}
      </table>
      <Button
        handleClick={handleClick}
        id={id}
        name={nameBtn}
        classname={css(styles.button)}
      />
    </li>
  );
}

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
