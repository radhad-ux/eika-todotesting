export default function InputField({ settings, state, validation }) {
  // safeguard
  // Test case 1 and 2: Input field works with the correct settings and state props or else fails
  if (settings === undefined) throw new Error("The setting prop is missing");
  if (state === undefined) throw new Error("The state prop is missing");

  const { label, type, placeholder, required, autoFocus } = settings;
  const [getter, setter] = state;

  function onValidate(callback, setState) {
    // Safeguard
    if (callback === undefined) return;
    const result = callback(getter);

    setState(result.data);
  }

  return (
    <label className="input_field">
      {label}
      <input
        type={type}
        placeholder={placeholder}
        required={required}
        autoFocus={autoFocus}
        value={getter}
        onChange={(event) => setter(event.target.value)}
        onBlur={() => onValidate(validation, setter)}
      />
    </label>
  );
}
