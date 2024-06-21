import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { HTMLInputTypeAttribute, PropsWithChildren } from "react";

export const InputField = (
    props: PropsWithChildren<{
        id: string;
        type: HTMLInputTypeAttribute;
        placeholder?: string;
        label?: string;
    }>
) => {
    return (
        <div className="grid gap-3">
            {props.label && <Label htmlFor={props.id}>{props.label}</Label>}
            <Input
                id={props.id}
                type={props.type}
                placeholder={props.placeholder}
            />
        </div>
    );
};
