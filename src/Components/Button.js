import React from 'react';
import PropTypes from 'prop-types';

function Button({
  id, handleClick, name, classname,
}) {
  return (
    <button
      type="button"
      id={id}
      className={classname}
      onClick={handleClick}
    >
      {name}
    </button>
  );
}

Button.propTypes = {
  id: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  classname: PropTypes.string.isRequired,
};

export default Button;
