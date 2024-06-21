import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

import { PropsWithChildren, HTMLInputTypeAttribute } from "react";
import { cn } from "@/lib/utils";

export const TextAreaField = (
    props: PropsWithChildren<{
        id: string;
        placeholder?: string;
        label?: string;
        className?: string;
        labelClassName?: string;
    }>
) => {
    return (
        <div className="grid gap-3">
            {props.label && (
                <Label
                    htmlFor={props.id}
                    className={cn("", props.labelClassName)}
                >
                    {props.label}
                </Label>
            )}
            <Textarea
                id={props.id}
                placeholder={props.placeholder}
                className={cn("", props.className)}
            />
        </div>
    );
};
