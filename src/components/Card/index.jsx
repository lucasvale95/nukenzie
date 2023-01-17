import "./style.css";
import { FaTrash } from "react-icons/fa";

const Card = ({
  description,
  type,
  value,
  index,
  listTransactions,
  setListTransactions,
  setOriginal,
}) => {
  function handleRemove(removeItem) {
    setListTransactions((previousState) =>
      previousState.filter((item, index) => index !== removeItem)
    );
  }

  return (
    <>
      {
        <li
          key={index}
          className="list"
          style={
            type === "Entrada"
              ? { borderLeft: "5px solid #03b898" }
              : { borderLeft: "5px solid #E34981" }
          }
        >
          <div className="list-div">
            <h3 className="list-title">{description}</h3>
            <p className="list-value">R$ {value} </p>
            <button
              className="list-btn-remove"
              onClick={() => handleRemove(index)}
            >
              <FaTrash />
            </button>
          </div>
          <p className="list-type">{type}</p>
        </li>
      }
    </>
  );
};

export default Card;
