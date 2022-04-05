import { useState, useEffect } from "react";

//Project files
import ModalForm from "./components/ModalForm";
import WelcomeScreen from "./screens/WelcomeScreen";
import ShoppingScreen from "./screens/ShoppingScreen";
// import "./css/style.css";
// import logo from "./img/mainlogo.jpg";

export default function App() {
  // Local state
  const [list, setList] = useState([]);
  const [showModal, setShowModal] = useState(false);
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
      {list.length === 0 && <WelcomeScreen setShowModal={setShowModal} />}
      {list.length > 0 && (
        <ShoppingScreen
          setShowModal={setShowModal}
          list={list}
          setList={setList}
        />
      )}
      <ModalForm
        modalState={[showModal, setShowModal]}
        list={list}
        setList={setList}
      />
    </div>
  );
}
