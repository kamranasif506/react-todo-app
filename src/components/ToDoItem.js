import { useState } from 'react';
import { FaTrash } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";



const TodoItem = ({ itemProp, handleChange, delTodo, setUpdate }) => {
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

    let viewMode = {};
    let editMode = {};
    if (editing) {
        viewMode.display = 'none';
    } else {
        editMode.display = 'none';
    }

    return (
        <li className='list-items'>
        <div className="content" style={viewMode}>    
            <input
            type="checkbox"
            checked={itemProp.completed}
            onChange={() => handleChange(itemProp.id)}
            />
           {itemProp.title}
            <button className='btn' onClick={handleEditing}><AiFillEdit /></button>
            <button  className='btn' onClick={() => delTodo(itemProp.id)}> <FaTrash /></button>
        </div>
        <input
            type="text"
            value={itemProp.title}
            className="textInput"
            style={editMode}
            onChange={(e) => setUpdate(e.target.value, itemProp.id)}
            onKeyDown={handleUpdatedDone}
            />
      </li>
    );
  };
  export default TodoItem;
  