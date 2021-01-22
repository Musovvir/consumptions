import React from "react";
import { addConsumption, clearInput } from "../../redux/actions/categories";
import { useDispatch, useSelector } from "react-redux";

function Category(props) {
  const dispatch = useDispatch();

  const sum = useSelector((state) => state.categories.sum);

  const comment = useSelector((state) => state.categories.comment);

  const AddConsumption = () => {
    dispatch(
      addConsumption({
        category: props.category.category,
        sum: sum,
        comment: comment,
      }),
      clearInput(),
      alert("Расход добавлен!")
    );
  };

  return (
    <div className="col-3" onClick={AddConsumption}>
      <div>
        <div className="category">
          <div className="icon"></div>
          {props.category.category}
        </div>
      </div>
    </div>
  );
}

export default Category;
