import { SidebarProvider } from '@shared/components/ui/sidebar';
import { AppSidebar } from '@module/navigation/components';
import { Outlet } from 'react-router-dom';
import { Header } from '@shared/components/ui/header';
import { Toaster } from '@shared/components';

export const BaseLayout = () => {
  return (
    <>
      <SidebarProvider>
        <Header />
        <AppSidebar />
        <main className="w-full mt-16 pt-2 overflow-y-auto max-h-[calc(100svh-64px)]">
          <Outlet />
        </main>
        <Toaster position="top-right" />
      </SidebarProvider>
    </>
  );
};
