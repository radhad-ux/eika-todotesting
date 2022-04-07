import Checkbox from "./Checkbox";

export default function TaskItem({ item, editList }) {
  const { name, price, isCompleted } = item;

  function onCheck() {
    const clonedItem = { ...item };

    clonedItem.isCompleted = !clonedItem.isCompleted;
    editList(clonedItem);
  }

  // function editItem(key, editedValue){
  //   const editedItem = {...item};

  //   editedItem[key] = editedValue;
  //   editList(editedItem);
  // }

  return (
    <article className={`task_item ${isCompleted && "completed"}`}>
      <Checkbox checked={isCompleted} onChange={onCheck} />
      <span className="name">{name}</span>
      <span className="spacer"></span>
      <span className="price">{price}:-</span>
    </article>
  );
}
