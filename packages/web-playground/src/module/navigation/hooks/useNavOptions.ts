import { Home, FileText, ClipboardList } from 'lucide-react';

type NavItem = {
  title: string;
  url: string;
  isActive?: boolean;
};

type NavMainItem = {
  title: string;
  icon: React.ElementType;
  url: string;
  collapsible?: boolean;
  defaultOpen?: boolean;
  isActive?: boolean;
  items?: NavItem[];
};

export const useNavOptions = () => {
  return {
    navMain: [
      {
        title: 'Home',
        icon: Home,
        url: '/',
      },
      {
        title: 'Board',
        icon: ClipboardList,
        url: '/board',
      },
      {
        title: 'Menu (template)',
        icon: FileText,
        url: '#',
        collapsible: false,
        defaultOpen: true,
        items: [
          { title: 'menu item 1', url: '/#' },
          { title: 'menu item 2', url: '/##' },
          { title: 'menu item 3', url: '/###' },
        ],
      },
    ] as NavMainItem[],
  };
};
