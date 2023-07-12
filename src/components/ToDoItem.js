import { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { AiFillEdit } from 'react-icons/ai';
import PropTypes from 'prop-types';

const TodoItem = ({
  itemProp, handleChange, delTodo, setUpdate,
}) => {
  const [editing, setEditing] = useState(false);
  // ...
  const handleEditing = () => {
    setEditing(true);
  };
  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      setEditing(false);
    }
  };

  const viewMode = {};
  const editMode = {};
  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  return (
    <li className="list-items">
      <div className="content" style={viewMode}>
        <label htmlFor={`checkbox-${itemProp.id}`}>
          <input
            type="checkbox"
            id={`checkbox-${itemProp.id}`}
            checked={itemProp.completed}
            onChange={() => handleChange(itemProp.id)}
          />
          {itemProp.title}
        </label>
        <button type="button" className="btn" onClick={handleEditing}>
          <AiFillEdit />
        </button>
        <button type="button" className="btn" onClick={() => delTodo(itemProp.id)}>
          <FaTrash />
        </button>
      </div>
      <input
        type="text"
        value={itemProp.title}
        className="textInput"
        style={editMode}
        onChange={(e) => setUpdate(e.target.value, itemProp.id)}
        onKeyDown={handleUpdatedDone}
        aria-label="Edit Title"
      />
    </li>
  );
};
TodoItem.propTypes = {
  itemProp: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
  setUpdate: PropTypes.func.isRequired,
};
export default TodoItem;
