import * as React from 'react';
import { User } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
} from '@shared/components/ui/dropdown';
import { useAuth } from '@module/auth/sign/hooks';

export const HeaderUserDropdown: React.FC = () => {
  const { signout } = useAuth();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-1 rounded px-2 py-1 text-white hover:bg-gray-700 transition">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-black">
            <User className="w-4 h-4" />
          </div>

          <div className="flex-col items-start hidden md:flex">
            <span className="text-sm font-medium">Administrator</span>
            <span className="text-xs text-gray-400">System Administrator</span>
          </div>
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent sideOffset={4}>
        <DropdownMenuItem onClick={() => console.log('Profile clicked')}>내 프로필</DropdownMenuItem>
        <DropdownMenuItem onClick={() => console.log('Settings clicked')}>설정</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={signout}>
          로그아웃
          <DropdownMenuShortcut>⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
