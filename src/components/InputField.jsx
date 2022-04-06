export default function InputField({ settings, state }) {
  // safeguard
  if (settings === undefined) throw new Error("The setting prop is missing");
  if (state === undefined) throw new Error("The state prop is missing");

  const { label, type, placeholder, required, autoFocus } = settings;
  const [getter, setter] = state;

  return (
    <label>
      {label}
      <input
        type={type}
        placeholder={placeholder}
        required={required}
        autoFocus={autoFocus}
        value={getter}
        onChange={(event) => setter(event.target.value)}
      />
    </label>
  );
}
