import ModalForm from "../components/ModalForm";
export default function WelcomeScreen({ setModal, list, setList }) {
  return (
    <section className="welcome">
      <img src="" alt="hero-img" className="hero-media" />
      <div className="welcome-wrapper">
        <h3>Welcome to EIKA!</h3>
        <h4>
          Keep track of your shopping list with the app. Get started by adding a
          item to your list. You can then sort your shopping list by name or
          price and mark items as acquired.
        </h4>
        <h3>Thank you for shopping with us ...</h3>
      </div>
      <button
        onClick={() =>
          setModal(
            <ModalForm setModal={setModal} list={list} setList={setList} />
          )
        }
      >
        Add Item
      </button>
    </section>
  );
}
