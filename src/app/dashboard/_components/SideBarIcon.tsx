import { Button } from "@/components/ui/button";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { SquareTerminal } from "lucide-react";

export const SideBarIcon = ({}) => {
    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-lg bg-muted"
                    aria-label="Playground"
                >
                    <SquareTerminal className="size-5" />
                </Button>
            </TooltipTrigger>
            <TooltipContent side="right" sideOffset={5}>
                Playground
            </TooltipContent>
        </Tooltip>
    );
};
