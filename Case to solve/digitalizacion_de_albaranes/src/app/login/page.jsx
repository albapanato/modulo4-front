import LoginForm from "../components/LoginForm";

export default function LoginPage() {
  return (
    <div
      style={{ height: "calc(100% - 140px)" }}
      className="flex w-full p-20 justify-center items-center flex-col custom-shadow backdrop-blur-lg bg-black/25"
    >
      <LoginForm />
    </div>
  );
}
