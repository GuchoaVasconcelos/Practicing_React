import React from "react";

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

export default TechItem;
