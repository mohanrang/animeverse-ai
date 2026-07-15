import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import AppSidebar from "@/components/layout/AppSidebar"
import { Outlet } from "react-router-dom"

export default function MainLayout() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-background text-foreground">
        <AppSidebar />
        <div className="flex flex-col flex-1 w-full overflow-hidden">
          <header className="flex h-14 items-center gap-4 border-b border-border bg-card px-6">
            <SidebarTrigger />
            <div className="flex-1">
              <h1 className="font-semibold text-lg text-foreground">AnimeVerse AI</h1>
            </div>
          </header>
          <main className="flex-1 overflow-auto p-6">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}