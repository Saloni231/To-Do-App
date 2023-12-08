import React from "react";
import DeleteIcon from "../../atoms/DeleteIcon/DeleteIcon";
import EditIcon from "../../atoms/EditIcon/EditIcon";
import "./IconsPanel.scss";

const IconsPanel = ({handleEdit, handleDelete}) => {
  return (
    <div className="icons-panel">
      <DeleteIcon handleDelete={handleDelete} />
      <EditIcon handleEdit={handleEdit} />
    </div>
  );
};

export default IconsPanel;
