import ButtonLink from "./components/ButtonLink";

export default function PrincipalPage() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-cover bg-center bg-no-repeat bg-[url('https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHw1fHxkaWdpdGFsJTIwaW52b2ljaW5nfGVufDB8fHx8MTcxODU2NTQ1NHww&ixlib=rb-4.0.3&auto=format&fit=crop&w=1920')]">
      <div
        style={{ height: "calc(100% - 140px)" }}
        className="flex w-full p-20 justify-center items-center flex-col custom-shadow backdrop-blur-lg bg-black/25"
      >
        <div>
          <h1 className="text-white w-full md:w-[600px] text-4xl sm:text-5xl md:text-6xl self-center font-bold leading-tight px-4 md:px-0">
            Genera albaranes digitales facilmente con bildyapp
          </h1>
        </div>
        <div>
          <ul className="flex flex-col sm:flex-row justify-center gap-4 mt-7 w-full">
            <li>
              <ButtonLink
                href="/register"
                text={"Regístrate"}
                className={
                  "block w-[200px] text-center text-white  bg-indigo-700 hover:bg-indigo-900"
                }
              />
            </li>
            <li>
              <ButtonLink
                href="/login"
                text={"Inicia sesión"}
                className={
                  "block w-[200px] text-center text-white  bg-yellow-500  hover:bg-yellow-700"
                }
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
