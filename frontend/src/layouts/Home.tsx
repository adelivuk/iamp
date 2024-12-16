import { ReactNode } from 'react';

interface HomeLayoutProps {
  children: ReactNode;
}

function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <div>
      <main className="h-full bg-white">
        <div className="h-full">
          {children}
        </div>
      </main>
    </div>
  );
}

export default HomeLayout;
