//Testcase 1: checkbox to be checked when is set to true
//Testcase 2: checkbox to be unchecked when is set to false

export default function InputCheckbox({ checked, onChange }) {
  return (
    <label className="input_checkbox">
      <input
        type="checkbox"
        data-testid="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <div className={`icon_checkmark ${checked && "checked"}`} />
    </label>
  );
}
