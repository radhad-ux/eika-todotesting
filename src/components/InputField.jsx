export default function InputField({ settings, state }) {
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
