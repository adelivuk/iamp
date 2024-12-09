import { ReactNode } from 'react';
import {Link} from 'react-router-dom';

interface HomeLayoutProps {
  children: ReactNode;
}

function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <div>
    <header>
      <nav>

      </nav>

    </header>

    <main>
        {children}
    </main>
    </div>
  );
}

export default HomeLayout;
