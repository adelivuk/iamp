import { ReactNode } from 'react';

interface HomeLayoutProps {
  children: ReactNode;
}

function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <div>
      <main className="bg-main bg-cover bg-center h-screen">
        <div className="flex h-screen justify-center items-center">
          {children}
        </div>
      </main>
    </div>
  );
}

export default HomeLayout;
