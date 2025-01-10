import { ReactNode } from 'react';

import { Link } from "react-router-dom";

interface HomeLayoutProps {
  children: ReactNode;
}

function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <div>
      <div className="min-h-screen h-screen bg-main bg-cover">

        <header className="bg-blue w-full p-8 flex items-center">
          <h1 className="uppercase font-bold text-yellow text-2xl"><Link to="/">Welcome to portal Identity Management</Link></h1>
        </header>

        <main className="bg-center h-[calc(100vh-96px-88px)] w-full container mx-auto px-4 flex justify-center items-center">
          {children}
        </main>

        <footer>
          <div className="bg-white p-8 flex items-center justify-center">
            <p className="text-black">SRB @ 2025</p>
          </div>
        </footer>

      </div>
    </div>
  );
}

export default HomeLayout;
