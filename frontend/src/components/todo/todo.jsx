import React, { useState, useEffect } from "react";
import "./todo.css";
import Navbar from "../navbar/navbar.jsx";
import Footer from "../footer/footer.jsx";
import Todocard from "../todo/todocard.jsx";
import Update from "../todo/Update.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Todo = () => {
  const [inputs, setInputs] = useState({ title: "", body: "" });
  const [todos, setTodos] = useState([]);
  const [showTextarea, setShowTextarea] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);
  // Simpan todo yang sedang di-update
  const [selectedTodo, setSelectedTodo] = useState(null);

  const id = sessionStorage.getItem("id");

  const change = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const del = async (cardId) => {
    try {
      console.log(cardId);

      const response = await axios.delete(
        `http://localhost:1000/deletelist/${cardId}`,
      );

      console.log(response.data);

      setTodos((prev) => prev.filter((t) => t._id !== cardId));

      toast.success("Deleted");
    } catch (err) {
      console.log(err.response);
      console.error(err);

      toast.error("Delete failed");
    }
  };
  // Buka panel update dan kirim data todo yang dipilih
  const openUpdate = (todo) => {
    setSelectedTodo(todo);
    setShowUpdate(true);
  };

  // Tutup panel update
  const closeUpdate = () => {
    setShowUpdate(false);
    setSelectedTodo(null);
  };

  // Callback setelah update berhasil: perbarui list di state
  const handleUpdated = (updatedTodo) => {
    setTodos((prev) =>
      prev.map((t) => (t._id === updatedTodo._id ? updatedTodo : t)),
    );
    closeUpdate();
  };

  const submit = async () => {
    if (!inputs.title || !inputs.body) {
      toast("Title atau Body tidak boleh kosong");
      return;
    }
    if (!id) {
      toast("User belum login");
      return;
    }
    try {
      const response = await axios.post("http://localhost:1000/addlist", {
        title: inputs.title,
        body: inputs.body,
        id,
      });
      setTodos((prev) => [...prev, response.data.list]);
      setInputs({ title: "", body: "" });
      toast("Todo berhasil ditambahkan");
    } catch (error) {
      console.error(error);
      toast("Gagal menambahkan todo");
    }
  };

  // menampilkan todo
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`http://localhost:1000/user/${id}`);
        setTodos(response.data.list);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPosts();
  }, [id]);

  return (
    <>
      <div className="todo">
        <Navbar />
        <div className="todo-wrapper">
          <div className="column-todo">
            <input
              type="text"
              name="title"
              placeholder="TITLE"
              className="input"
              onClick={() => setShowTextarea(true)}
              value={inputs.title}
              onChange={change}
            />
            {showTextarea && (
              <textarea
                name="body"
                placeholder="BODY"
                className="input textarea"
                value={inputs.body}
                onChange={change}
              />
            )}
            <button className="add-button" onClick={submit}>
              Add
            </button>
          </div>

          <div className="todo-body">
            <div className="container">
              {todos.map((item) => (
                <div key={item._id} className="col-lg-3 col-10 mx-5 my-2">
                  <Todocard
                    title={item.title}
                    body={item.body}
                    id={item._id} // ← kirim _id dengan benar
                    delid={del}
                    display={openUpdate} // ← kirim seluruh object todo
                    todo={item} // ← data lengkap untuk pre-fill form
                  />
                </div>
              ))}
            </div>

            {/* Panel update ditampilkan via state, bukan manipulasi DOM langsung */}
            {showUpdate && (
              <div className="todo-update" style={{ display: "block" }}>
                <div className="container-update">
                  <Update
                    todo={selectedTodo}
                    userId={id}
                    onUpdated={handleUpdated}
                    onClose={closeUpdate}
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        <ToastContainer />
        <Footer />
      </div>
    </>
  );
};

export default Todo;
