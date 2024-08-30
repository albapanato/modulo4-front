export default function Notification({ message, type, visible }) {
  if (!visible) return null;

  const notificationStyles = {
    info: "bg-indigo-500 text-white",
    success: "bg-green-500 text-white",
    error: "bg-red-500 text-white",
  };

  return (
    <div
      className={`fixed bottom-4 right-4 p-4 rounded-md shadow-lg ${notificationStyles[type]} transition-opacity`}
    >
      {message}
    </div>
  );
}
