import { PropsWithChildren } from "react";

import { SelectItemWithChild, SelectFieldLayout } from "./SelectFieldLayout";

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
        <SelectItemWithChild
            value={props.value}
            className="flex items-start gap-3 text-muted-foreground"
        >
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
        <SelectFieldLayout
            id={props.id}
            label={props.label}
            placeholder={placeHolderLabel}
        >
            {props.items.map((item) => (
                <SelectItemWithIcon {...item} key={item.value} />
            ))}
        </SelectFieldLayout>
    );
};
