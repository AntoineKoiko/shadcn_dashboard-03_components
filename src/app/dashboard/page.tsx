import { LeftSideBar } from "./_components/LeftSideBar";
import { DashboardHeader } from "./_components/DashboardHeader";
import { DashboardRightPanel } from "./_components/DashboardRightPanel";
import { DashboardLeftPanel } from "./_components/DashboardLeftPanel";

export default function Dashboard() {
    return (
        <div className="grid h-screen w-full pl-[53px]">
            <LeftSideBar />
            <div className="flex flex-col">
                <DashboardHeader />
                <main className="grid flex-1 gap-4 overflow-auto p-4 md:grid-cols-2 lg:grid-cols-3">
                    <DashboardLeftPanel />
                    <DashboardRightPanel />
                </main>
            </div>
        </div>
    );
}
