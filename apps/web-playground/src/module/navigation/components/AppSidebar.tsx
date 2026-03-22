import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@shared/components/ui';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from '@shared/components/ui/sidebar';
import { ChevronRight } from 'lucide-react';
import { useMenu } from '../hooks';

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { navMain, handleMenuClick } = useMenu();

  return (
    <Sidebar {...props}>
      <SidebarContent className="p-2.5">
        {navMain?.map((group, idx) => (
          <SidebarGroup
            key={group.title}
            className={`pb-5 ${idx !== navMain?.length - 1 ? 'border-b border-gray-200' : ''}
      `}
          >
            <SidebarGroupContent>
              <SidebarMenu>
                {/* 서브메뉴가 있는 경우 */}
                {group.items?.length ? (
                  group.collapsible ? (
                    <Collapsible defaultOpen={group.defaultOpen} className="group/collapsible">
                      <SidebarMenuItem>
                        <CollapsibleTrigger asChild>
                          <SidebarMenuButton>
                            {group.icon && <group.icon className="mr-2 h-4 w-4" />}
                            <span>{group.title}</span>
                            <ChevronRight className="ml-auto size-4 transition-transform group-data-[state=open]/collapsible:rotate-90" />
                          </SidebarMenuButton>
                        </CollapsibleTrigger>

                        <CollapsibleContent>
                          <SidebarMenuSub>
                            {group.items.map((item) => (
                              <SidebarMenuSubItem key={item.title}>
                                <SidebarMenuSubButton asChild isActive={item.isActive}>
                                  <a href={item.url}>{item.title}</a>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                            ))}
                          </SidebarMenuSub>
                        </CollapsibleContent>
                      </SidebarMenuItem>
                    </Collapsible>
                  ) : (
                    // 항상 확장된 메뉴
                    <SidebarMenuItem>
                      <SidebarMenuButton className="cursor-default">
                        {group.icon && <group.icon className="mr-2 h-4 w-4" />}
                        <span>{group.title}</span>
                      </SidebarMenuButton>
                      <SidebarMenuSub>
                        {group.items.map((item) => (
                          <SidebarMenuSubItem key={item.title}>
                            <SidebarMenuSubButton
                              asChild
                              isActive={item.isActive}
                              onClick={() => handleMenuClick(item.url)}
                            >
                              <a href={item.url}>{item.title}</a>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </SidebarMenuItem>
                  )
                ) : (
                  // 단일 메뉴
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={group.isActive} onClick={() => handleMenuClick(group.url)}>
                      <a href={group.url}>
                        {group.icon && <group.icon className="mr-2 h-4 w-4" />}
                        <span>{group.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>

      <SidebarRail />
    </Sidebar>
  );
}
