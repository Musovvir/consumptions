import React from "react";
import { useDispatch } from "react-redux";
import { toggleWindow } from "../../redux/actions/categories";

function AddCategory(props) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleWindow());
  };

  return (
    <div className="col-3">
      <div className="addBlock">
        <div className="addCategory" onClick={handleClick}>
          <div className="iconPlus">
            <i className="material-icons">add</i>
          </div>
          <div className="addBlock">добавить</div>
        </div>
      </div>
    </div>
  );
}

export default AddCategory;
