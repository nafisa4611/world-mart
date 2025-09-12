
import Sidebar from "@/components/Dashboard/Sidebar"
import DashboardHeader from "@/components/Dashboard/DashboardHeader"
import QuickActionTiles from "@/components/Dashboard/QuickActionTiles"
import EmptyState from "@/components/Dashboard/EmptyState"
import DashboardHero from "./DashboardHero"

export default function MyDashboard() {

  return (
    <>
      <DashboardHero />
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <aside className="md:col-span-1">
          <Sidebar />
        </aside>
        <main className="md:col-span-3 space-y-8">
          <DashboardHeader customerName="Nafisa Mila" />
          <QuickActionTiles />
          {/* Example: Empty state for orders */}
          <EmptyState type="orders" />
        </main>
      </div>
    </>
  )
}
