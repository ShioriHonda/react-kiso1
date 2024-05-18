import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NewThread from "./NewThread";

export const App = () => {
  const [currentThread, setCurrentThread] = useState([]);

  useEffect(() => {
    callThread();
  }, []);

  const callThread = async () => {
    try {
      const response = await fetch(
        "https://railway.bulletinboard.techtrain.dev/threads",
        {
          method: "GET",
        }
      );

      const data = await response.json();
      console.log(data);
      setCurrentThread(data);
    } catch (error) {
      console.log("読み込めませんでした", error);
    }
  };

  return (
    <div>
      <h1>スレッド</h1>
      <ul>
        {currentThread.map((thread) => (
          <li key={thread.id}>{thread.title}</li>
        ))}
      </ul>
      <BrowserRouter>
        <Routes>
          <Route path="/NewThread" element={<NewThread />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
