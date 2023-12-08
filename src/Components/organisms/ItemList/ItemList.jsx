import React from "react";
import { PropTypes } from "prop-types";
import Item from "../../molecules/Item/Item";

const ItemList = ({ tasks }) => {
  return (
    <>
      {tasks.map((task) => {
        return <Item task={task} />;
      })}
    </>
  );
};

ItemList.propTypes = {
  tasks: PropTypes.array,
};

ItemList.defaultProps = {
  tasks: [],
};

export default ItemList;
