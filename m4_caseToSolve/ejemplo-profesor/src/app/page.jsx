import ImageBg from "./components/ImageBg";
import Link from "next/link";

export default function PrincipalPage() {
  return (
    <>
      {/* <ImageBg /> */}
      <div className="flex ">
        <div className="h-auto w-full mt-7">
          <div className="m-10 w-3/4">
            <ul className="flex justify-end ">
              <li className="p-5 text-2xl text-white bg-indigo-500 rounded-xl -rotate-6">
                <Link href="/register">Sign Up</Link>
              </li>
              <li className=" p-5 ml-5 text-2xl text-white bg-cyan-300 rounded-xl rotate-6">
                <Link href="/login">Sign In</Link>
              </li>
            </ul>
          </div>
          <div className="flex">
            <div className=" w-[600px] h-[800px]">
              <h1 className="text-white text-6xl text-center mt-[200px] text-shadow-lg font-bold leading-normal ">
                Genera albaranes digitales facilmente con bildyapp
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
