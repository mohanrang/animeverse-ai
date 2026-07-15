import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import {
  Home,
  Search,
  Library,
  Calendar,
  Sparkles,
  BarChart2,
  Newspaper,
  User,
  Settings,
  Tv,
} from "lucide-react"
import { Link, useLocation } from "react-router-dom"

const menuItems = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Search",
    url: "/search",
    icon: Search,
  },
  {
    title: "Library",
    url: "/library",
    icon: Library,
  },
  {
    title: "Calendar",
    url: "/calendar",
    icon: Calendar,
  },
  {
    title: "AI Assistant",
    url: "/ai",
    icon: Sparkles,
  },
  {
    title: "Statistics",
    url: "/statistics",
    icon: BarChart2,
  },
  {
    title: "News",
    url: "/news",
    icon: Newspaper,
  },
]

const footerItems = [
  {
    title: "Profile",
    url: "/profile",
    icon: User,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
]

export function AppSidebar() {
  const location = useLocation()
  const { state } = useSidebar()

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="border-b border-sidebar-border/50 py-4 px-3 flex flex-row items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
          <Tv className="h-5 w-5" />
        </div>
        {state !== "collapsed" && (
          <div className="flex flex-col">
            <span className="font-semibold text-sm leading-tight text-sidebar-foreground">
              AnimeVerse AI
            </span>
            <span className="text-xs text-muted-foreground">Premium Assistant</span>
          </div>
        )}
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => {
                const isActive = location.pathname === item.url
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      isActive={isActive}
                      tooltip={item.title}
                      render={
                        <Link to={item.url} className="flex items-center gap-3" />
                      }
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
 
      <SidebarFooter className="border-t border-sidebar-border/50 p-2">
        <SidebarMenu>
          {footerItems.map((item) => {
            const isActive = location.pathname === item.url
            return (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  isActive={isActive}
                  tooltip={item.title}
                  render={
                    <Link to={item.url} className="flex items-center gap-3" />
                  }
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.title}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            )
          })}
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}

export default AppSidebar;
