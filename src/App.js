import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";
import Timer from "./components/Timer";
import Stopwatch from "./components/Stopwatch";

function App() {
  const [todos, setTodos] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);

  useEffect(() => {
    axios
      .get(`http://localhost:3004/posts?_page=${page}&_limit=${limit}`)
      .then((r) => {
        //console.log(r)
        setTodos(r.data);
        setTotalCount(Number(r.headers["x-total-count"]));
      });
  }, [page, limit]);

  return (
    <div className="App">
      <TodoItem todos={todos} />
      <button
        disabled={page <= 1}
        onClick={() => {
          setPage(page - 1);
        }}
      >
        {"<"}
      </button>
      <select onChange={(e) => setLimit(Number(e.target.value))}>
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={15}>15</option>
      </select>
      <button
        disabled={totalCount < page * limit}
        onClick={() => {
          setPage(page + 1);
        }}
      >
        {">"}
      </button>
      <Timer />
      <Stopwatch />
    </div>
  );
}

export default App;
