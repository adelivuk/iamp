import { ReactNode } from 'react';

interface HomeLayoutProps {
  children: ReactNode;
}

function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <div>
      <div className="min-h-screen h-screen">

        <header className="bg-blue w-full p-8 flex items-center">
          <h1 className="uppercase font-bold text-yellow text-2xl">Welcome to portal Identity Management</h1>
        </header>

        <main className="bg-main bg-cover bg-center flex h-screen justify-center items-center h-[calc(100%-60px-54px)]">
          {children}
        </main>

        <footer className="bg-white flex justify-center p-4 align-center">
          <p>SRB Access Manager © Single Resolution Board</p>
          <p>asd</p>
        </footer>

      </div>
    </div>
  );
}

export default HomeLayout;
