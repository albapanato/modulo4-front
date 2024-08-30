export default function Input({
  type,
  id,
  placeholder,
  name,
  value,
  onChange,
  onBlur,
  ...rest
}) {
  console.log(rest);
  return (
    <input
      value={value}
      name={name}
      type={type}
      id={id}
      placeholder={placeholder}
      onChange={onChange}
      onBlur={onBlur}
      className="block w-full rounded-sm border p-1 text-scale-400"
      {...rest}
    />
  );
}
