import { Button } from "@/components/ui/button";
import { SideBarIcon } from "./SideBarIcon";

import {
    Triangle,
    SquareTerminal,
    Bot,
    Code2,
    Book,
    Settings2,
    LifeBuoy,
    SquareUser,
} from "lucide-react";

export const LeftSideBar = () => {
    return (
        <aside className="inset-y fixed  left-0 z-20 flex h-full flex-col border-r">
            <div className="border-b p-2">
                <Button variant="outline" size="icon" aria-label="Home">
                    <Triangle className="size-5 fill-foreground" />
                </Button>
            </div>
            <nav className="grid gap-1 p-2">
                <SideBarIcon tooltip="Playground">
                    <SquareTerminal className="size-5" />
                </SideBarIcon>
                <SideBarIcon tooltip="Models">
                    <Bot className="size-5" />
                </SideBarIcon>
                <SideBarIcon tooltip="API">
                    <Code2 className="size-5" />
                </SideBarIcon>
                <SideBarIcon tooltip="Documentation">
                    <Book className="size-5" />
                </SideBarIcon>
                <SideBarIcon tooltip="Settings">
                    <Settings2 className="size-5" />
                </SideBarIcon>
            </nav>
            <nav className="mt-auto grid gap-1 p-2">
                <SideBarIcon tooltip="Help">
                    <LifeBuoy className="size-5" />
                </SideBarIcon>
                <SideBarIcon tooltip="Account">
                    <SquareUser className="size-5" />
                </SideBarIcon>
            </nav>
        </aside>
    );
};
