import LoginForm from "@/app/components/LoginForm";
import ImageBg from "@/app/components/ImageBg";

export default function RegisterPage() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <ImageBg />
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32 text-gray-900">
        <LoginForm />
      </div>
    </main>
  );
}
