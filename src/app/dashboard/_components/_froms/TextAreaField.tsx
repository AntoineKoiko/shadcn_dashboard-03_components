import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

import { PropsWithChildren, HTMLInputTypeAttribute } from "react";

export const TextAreaField = (
    props: PropsWithChildren<{
        id: string;
        placeholder?: string;
        label?: string;
    }>
) => {
    return (
        <div className="grid gap-3">
            {props.label && <Label htmlFor={props.id}>{props.label}</Label>}
            <Textarea id={props.id} placeholder={props.placeholder} />
        </div>
    );
};
