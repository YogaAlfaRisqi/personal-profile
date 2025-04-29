import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

// eslint-disable-next-line react/prop-types
export default function SidebarLayout({ children }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
      <SidebarTrigger/>
        {children}
      </main>
    </SidebarProvider>
  );
}
