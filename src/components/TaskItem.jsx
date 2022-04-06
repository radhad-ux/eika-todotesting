export default function TaskItem({ item, editList }) {
  const { name, price, isCompleted } = item;

  function onCheck() {
    const clonedItem = { ...item };

    clonedItem.isCompleted = !clonedItem.isCompleted;
    editList(clonedItem);
  }

  return (
    <div>
      <li>
        <input
          type="checkbox"
          data-testid="checkbox"
          checked={isCompleted}
          onChange={onCheck}
        />
        {name}, {price}
      </li>
    </div>
  );
}
