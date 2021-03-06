export default function Sorter({ list, setList }) {
  function sortByName() {
    const clonedList = [...list];
    const sortedList = clonedList.sort((a, b) => {
      const productA = a.name.toUpperCase();
      const productB = b.name.toUpperCase();
      return productA > productB ? 1 : -1;
    });
    setList(sortedList);
  }

  function sortByPrice() {
    const clonedList = [...list];
    clonedList.sort((a, b) => a.price - b.price);
    setList(clonedList);
  }

  //Test cases to trigger sortByName and sortByPrice functions can be considered
  return (
    <section className="sorter">
      Sort by:
      <button onClick={sortByName}>Name</button>
      <button onClick={sortByPrice}>Price</button>
    </section>
  );
}
