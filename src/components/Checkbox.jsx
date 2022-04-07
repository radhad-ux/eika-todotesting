export default function InputCheckbox({ checked, onChange }) {
  return (
    <label className="input_checkbox">
      <input type="checkbox" checked={checked} onChange={onChange} />
      <div className={`icon_checkmark ${checked && "checked"}`} />
    </label>
  );
}
