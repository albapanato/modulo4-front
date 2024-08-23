import LoginForm from "@/app/components/LoginForm";

export default function RegisterPage() {
  return (
    <div className="flex justify-center mt-32 h-80">
      <div className=" md:-mt-32 bg-orange-600 p-20 rounded-full bg-opacity-90 text-gray-900">
        <LoginForm />
      </div>
    </div>
  );
}
