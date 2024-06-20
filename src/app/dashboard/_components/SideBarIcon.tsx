import { Button } from "@/components/ui/button";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { SquareTerminal } from "lucide-react";
import { PropsWithChildren } from "react";

export const SideBarIcon = (
    props: PropsWithChildren<{ tooltip?: string; onClick?: () => void }>
) => {
    if (props.tooltip) {
        return (
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-lg bg-muted"
                        aria-label={props.tooltip}
                        onClick={props.onClick}
                    >
                        {/* <SquareTerminal className="size-5" /> */}
                        {props.children}
                    </Button>
                </TooltipTrigger>
                <TooltipContent side="right" sideOffset={5}>
                    {props.tooltip}
                </TooltipContent>
            </Tooltip>
        );
    }

    return (
        <Button
            variant="ghost"
            size="icon"
            className="rounded-lg bg-muted"
            aria-label="Playground"
            onClick={props.onClick}
            asChild
        >
            {props.children}
        </Button>
    );
};
