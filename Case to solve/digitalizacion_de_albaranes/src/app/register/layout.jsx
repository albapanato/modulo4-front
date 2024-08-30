export default function LoginLayout({ children }) {
  return (
    <div className="w-full h-full flex flex-col justify-center bg-cover bg-center bg-no-repeat bg-[url('https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHw1fHxkaWdpdGFsJTIwaW52b2ljaW5nfGVufDB8fHx8MTcxODU2NTQ1NHww&ixlib=rb-4.0.3&auto=format&fit=crop&w=1920')]">
      {children}
    </div>
  );
}
