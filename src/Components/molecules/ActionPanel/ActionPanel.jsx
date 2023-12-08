import React from "react";
import { PropTypes } from "prop-types";
import Button from "../../atoms/Button/Button";
import SelectBox from "../SelectBox/SelectBox";
import { statusArray } from "../../../Utility/Status";
import "./ActionPanel.scss";
import { useDispatch } from "react-redux";
import * as ActionTypes from "../../../Store/ActionTypes";

const ActionPanel = ({ handleSelect }) => {
  const dispatch = useDispatch();

  const handleOpenModal = () => {
    dispatch({
      type: ActionTypes.OPEN_MODAL_CREATE,
      payload: "",
    });
  };

  return (
    <div className="action_panel">
      <Button
        className={"add_task_button"}
        label={"Add Task"}
        onClick={handleOpenModal}
      />
      <SelectBox options={statusArray.sort()} handleSelect={handleSelect} />
    </div>
  );
};

ActionPanel.propTypes = {
  handleSelect: PropTypes.func,
};

ActionPanel.defaultProps = {
  handleSelect: () => null,
};

export default ActionPanel;
