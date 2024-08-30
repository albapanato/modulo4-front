import RegisterForm from "../components/RegisterForm";

export default function RegisterPage() {
  return (
    <div
      style={{ height: "calc(100% - 140px)" }}
      className="flex w-full p-20 justify-center items-center flex-col custom-shadow backdrop-blur-lg bg-black/25"
    >
      <RegisterForm />
    </div>
  );
}
