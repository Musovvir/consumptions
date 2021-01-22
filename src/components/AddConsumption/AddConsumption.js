import React from "react";
import { getComment, getSum } from "../../redux/actions/categories";
import { useDispatch, useSelector } from "react-redux";

function AddConsumption() {
  const dispatch = useDispatch();

  const sum = useSelector((state) => state.categories.sum);
  const comment = useSelector((state) => state.categories.comment);

  const GetSum = (e) => {
    dispatch(getSum(e.target.value));
  };

  const GetComment = (e) => {
    dispatch(getComment(e.target.value));
  };

  return (
    <div className="addConsumption">
      <div className="sum">
        <input
          className="sumInput"
          type="text"
          placeholder="сумма"
          onChange={GetSum}
          value={sum}
        />
      </div>
      <div className="comment">
        <input
          className="commentInput"
          type="text"
          placeholder="#описание"
          onChange={GetComment}
          value={comment}
        />
      </div>
    </div>
  );
}

export default AddConsumption;
