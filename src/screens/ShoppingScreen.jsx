import ButtonToggle from "../components/ButtonToggle";
import TaskList from "../components/TaskList";
import Sorter from "../components/Sorter";
import ModalForm from "../components/ModalForm";
import { useState } from "react";

export default function ShoppingScreen({ setModal, list, setList }) {
  const [showCompleted, setShowCompleted] = useState(false);

  const completedItems = list.filter((item) => item.isCompleted === true);
  const pendingItems = list.filter((item) => item.isCompleted === false);

  function editList(editedItem) {
    const clonedList = [...list];
    const index = clonedList.findIndex((item) => item.id === editedItem.id);
    clonedList[index] = editedItem;
    setList(clonedList);
  }

  return (
    <section className="listscreen">
      <h2>Your Shopping list</h2>
      <Sorter list={list} setList={setList} />
      <TaskList list={pendingItems} editList={editList} />
      <button
        onClick={() =>
          setModal(
            <ModalForm setModal={setModal} list={list} setList={setList} />
          )
        }
      >
        Add Item
      </button>
      <ButtonToggle
        showCompleted={showCompleted}
        onClick={() => setShowCompleted(!showCompleted)}
      />
      {showCompleted && <TaskList list={completedItems} editList={editList} />}
    </section>
  );
}
