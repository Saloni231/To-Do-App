import React from "react";
import Label from "../../atoms/Label/Label";
import "./NoItem.scss";

const NoItem = () => {
  return (
    <div className="no_item">
      <Label value={"No Todos"} className="no_item_label" />
    </div>
  );
};

export default NoItem;
