import TaskItem from "./TaskItem";

export default function TaskList({ list, editList }) {
  const TaskItems = list.map((item) => (
    <TaskItem key={item.id} item={item} editList={editList} />
  ));

  if (list.length === 0) return <p>No pending items to show</p>;

  return <ul>{TaskItems}</ul>;
}
