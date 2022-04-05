import { useState } from "react";
import InputField from "./InputField";
import form from "../data/formFields.json";

export default function ModalForm({ modalState, list, setList }) {
  const [showModal, setShowModal] = modalState;
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  function addItem(name, price) {
    const newItem = {
      id: list.length,
      name: name,
      price: price,
      isCompleted: false,
    };
    setList([...list, newItem]);
  }

  function onSubmit(event) {
    event.preventDefault();

    addItem(name, price);
    resetForm();
  }
  function resetForm() {
    setName("");
    setPrice("");
    setShowModal(false);
  }

  if (showModal === false) return null;

  return (
    <form onSubmit={(event) => onSubmit(event)}>
      <h2>Create new item</h2>
      <InputField settings={form.name} state={[name, setName]} />
      <InputField settings={form.price} state={[price, setPrice]} />
      <button>Submit</button>
      <button onClick={resetForm}>Cancel</button>
    </form>
  );
}
