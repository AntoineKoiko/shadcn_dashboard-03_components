import { Bird, Rabbit, Turtle } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

export const SelectItemWithChild = (
    props: PropsWithChildren<{ value: string; className?: string }>
) => {
    return (
        <SelectItem value={props.value}>
            <div className={cn("", props.className)}>{props.children}</div>
        </SelectItem>
    );
};

export const SelectFieldLayout = (
    props: PropsWithChildren<{
        label: string;
        id: string;
        placeholder?: string;
    }>
) => {
    const placeHolderLabel = props.placeholder || "Select...";

    return (
        <>
            <Label htmlFor={props.id}>{props.label}</Label>
            <Select>
                <SelectTrigger
                    id={props.id}
                    className="items-start [&_[data-description]]:hidden"
                >
                    <SelectValue placeholder={placeHolderLabel} />
                </SelectTrigger>
                <SelectContent>{props.children}</SelectContent>
            </Select>
        </>
    );
};
