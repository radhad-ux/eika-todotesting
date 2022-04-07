//To test the scenarios when checked is set to true or false
export default function InputCheckbox({ checked, onChange }) {
  return (
    <label className="input_checkbox">
      <input type="checkbox" checked={checked} onChange={onChange} />
      <div className={`icon_checkmark ${checked && "checked"}`} />
    </label>
  );
}
