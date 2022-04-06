import { useState, useEffect } from "react";

//Project files
import Modal from "./components/Modal";
import WelcomeScreen from "./screens/WelcomeScreen";
import ShoppingScreen from "./screens/ShoppingScreen";
// import "./css/style.css";
// import logo from "./img/mainlogo.jpg";

export default function App() {
  // Local state
  const [list, setList] = useState([]);
  const [modal, setModal] = useState(null);
  const storageKey = "todo-list";

  // Methods
  useEffect(() => {
    const data = localStorage.getItem(storageKey);
    const parseData = JSON.parse(data) || [];
    setList(parseData);
  }, []);

  useEffect(() => {
    const data = JSON.stringify(list);
    localStorage.setItem(storageKey, data);
  }, [list]);

  return (
    <div className="App">
      {/* <header>
        <img src={logo} className="logo" alt="company logo" />
      </header> */}
      {list.length === 0 && (
        <WelcomeScreen list={list} setList={setList} setModal={setModal} />
      )}
      {list.length > 0 && (
        <ShoppingScreen setModal={setModal} list={list} setList={setList} />
      )}
      <Modal modalState={[modal, setModal]} list={list} setList={setList} />
    </div>
  );
}
