import { HeaderUserDropdown } from './HeaderUserDropdown';
import { SidebarTrigger } from '@shared/components/ui/sidebar';
import { SearchBar } from '@shared/components/ui/input';
import { Link } from 'react-router-dom';

interface HeaderProps {
  children?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <header className="fixed top-0 w-full bg-gray-800">
      <div className="flex items-center justify-between h-16 px-4">
        {/* 공백(로고) */}
        <div className="flex justify-center items-center gap-1.5 text-white">
          <SidebarTrigger className="mt-0.5" />
          <Link to={'/'} className="text-xl">
            Playground
          </Link>
        </div>

        {/* 데스크톱 검색 */}
        <div className="text-white hidden">
          <SearchBar />
        </div>

        {/* MENU */}
        <div className="flex gap-2">
          {/* 모바일 검색 */}
          <div className="text-white hidden">
            <SearchBar />
          </div>
          {children}
          <HeaderUserDropdown />
        </div>
      </div>
    </header>
  );
};

export default Header;
