import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";

import { PropsWithChildren } from "react";

export const ToolTipText = (
    props: PropsWithChildren<{
        text: string;
        side?: "top" | "right" | "bottom" | "left" | undefined;
    }>
) => {
    return (
        <Tooltip>
            <TooltipTrigger asChild>{props.children}</TooltipTrigger>
            <TooltipContent side={props.side}>{props.text}</TooltipContent>
        </Tooltip>
    );
};
