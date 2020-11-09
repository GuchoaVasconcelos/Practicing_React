import React from "react";
import PropTypes from "prop-types";

const TechItem = (props) => {
  return (
    <li>
      {props.tech}
      <button onClick={() => props.onDelete()} type="button">
        Remover
      </button>
    </li>
  );
};

TechItem.defaultProps = {
  tech: "Default",
};

TechItem.propTypes = {
  tech: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default TechItem;
