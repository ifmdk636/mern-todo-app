// Todocard.jsx
import "./todo.css";
import React from "react";
import { GrDocumentUpdate } from "react-icons/gr";
import { MdDeleteForever } from "react-icons/md";

const Todocard = ({ title, body, id, delid, display, todo, userId }) => {
  return (
    <div className="p-3 todo-card">
      <div>
        <h5>{title}</h5>
        <p className="todo-card-p">
          {body && body.length > 70 ? body.substring(0, 70) + "..." : body}
        </p>

        <div className="d-flex justify-content-around">
          {/* Kirim seluruh object todo agar form update bisa di-pre-fill */}
          <button className="update-btn" onClick={() => display(todo)}>
            <GrDocumentUpdate /> Update
          </button>

          {/* Kirim _id yang benar ke fungsi delete */}
          <button className="delete-btn" onClick={() => delid(id)}>
            <MdDeleteForever /> Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todocard;
