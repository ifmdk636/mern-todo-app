import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

const Update = ({ todo, userId, onUpdated, onClose }) => {
  const { id } = useParams;
  const [inputs, setInputs] = useState({
    id: id,
    title: "",
    body: "",
  });

  // Pre-fill form dengan data todo yang dipilih
  useEffect(() => {
    if (todo) {
      setInputs({ title: todo.title, body: todo.body });
    }
  }, [todo]);

  const change = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async () => {
    if (!inputs.title || !inputs.body) {
      toast("Title atau Body tidak boleh kosong");
      return;
    }
    try {
      const response = await axios.put(
        `http://localhost:1000/updatelist/${todo._id}`,
        {
          title: inputs.title,
          body: inputs.body,
          id: userId,
        },
      );
      console.log(response);
      toast.success("Todo berhasil diupdate");
      // Kirim data terbaru ke parent agar list langsung diperbarui
      onUpdated(response.data.list);
    } catch (err) {
      console.error(err);
      toast.error("Gagal mengupdate todo");
    }
  };

  return (
    <div className="p-5 bg-primary d-flex justify-content-center align-items-start flex-column update">
      <h3>Update Your Task</h3>

      <input
        type="text"
        name="title"
        className="todo-inputs my-4 w-100 p-3"
        value={inputs.title}
        onChange={change}
        placeholder="Title"
      />
      <textarea
        name="body"
        className="todo-inputs w-100 p-3"
        value={inputs.body}
        onChange={change}
        placeholder="Body"
      />

      <div>
        <button className="btn btn-dark my-4" onClick={handleUpdate}>
          Update
        </button>

        <button className="btn btn-danger my-4 mx-3" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Update;
