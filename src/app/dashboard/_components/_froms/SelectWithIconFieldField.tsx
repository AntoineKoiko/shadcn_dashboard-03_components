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

import { PropsWithChildren, PropsWithRef, PropsWithoutRef } from "react";

export const SelectItemWithChild = (
    props: PropsWithChildren<{ value: string }>
) => {
    return (
        <SelectItem value={props.value}>
            <div className="flex items-start gap-3 text-muted-foreground">
                {props.children}
            </div>
        </SelectItem>
    );
};

export type SelectItemWithIconProps = {
    value: string;
    icon: JSX.Element;
    title: string;
    description?: string;
    category?: string;
};

export const SelectItemWithIcon = (
    props: PropsWithChildren<SelectItemWithIconProps>
) => {
    return (
        <SelectItemWithChild value={props.value}>
            {props.icon}
            <div className="grid gap-0.5">
                <p>
                    {props.category ? `${props.category}  ` : ""}
                    <span className="font-medium text-foreground">
                        {props.title}
                    </span>
                </p>
                <p className="text-xs" data-description>
                    {props.description}
                </p>
            </div>
        </SelectItemWithChild>
    );
};

export const SelectWithIconField = (
    props: PropsWithChildren<{
        label: string;
        id: string;
        placeholder?: string;
        items: SelectItemWithIconProps[];
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
                <SelectContent>
                    {props.items.map((item) => (
                        <SelectItemWithIcon {...item} key={item.value} />
                    ))}
                </SelectContent>
            </Select>
        </>
    );
};
