import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavOptions } from './useNavOptions';

type OptionType = 'side' | 'header';

interface MenuProps {
  optionType: OptionType;
}

export const useMenu = ({ optionType = 'side' }: Partial<MenuProps> = {}) => {
  const location = useLocation();
  const { pathname } = location;
  const [activeUrl, setActiveUrl] = useState<string>(pathname ?? '/');
  const { navMain: navItems } = useNavOptions();

  useEffect(() => {
    setActiveUrl(pathname);
  }, [pathname]);

  // 추후 조건 추가나 옵션 다른거 쓸 때 대체 가능하도록
  let source = null;
  switch (optionType) {
    case 'header':
      break;
    case 'side':
      source = navItems;
      break;
    default:
      console.log({ optionType });
  }

  const navMain = source?.map((group) => {
    if (!group) return group;

    if (Array.isArray(group.items) && group.items.length > 0) {
      const updatedItems = group.items.map((item) => ({
        ...item,
        isActive: activeUrl === item.url,
      }));

      const shouldBeOpen = updatedItems.some((item) => item.isActive);

      return {
        ...group,
        items: updatedItems,
        defaultOpen: group.collapsible ? shouldBeOpen : group.defaultOpen,
      };
    }

    return {
      ...group,
      isActive: activeUrl === group.url,
    };
  });

  useEffect(() => {
    if (!navMain) return;
  }, [navMain, activeUrl]);

  const handleMenuClick = (url: string) => {
    setActiveUrl(url);
  };

  return { navMain, activeUrl, setActiveUrl, handleMenuClick };
};
