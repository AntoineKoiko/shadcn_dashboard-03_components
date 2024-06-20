import { PropsWithChildren } from "react";

import { SelectItemWithChild, SelectFieldLayout } from "./SelectFieldLayout";

export type SelectItemWithTextProps = {
    value: string;
    label: string;
};

export const SelectWithTextField = (
    props: PropsWithChildren<{
        label: string;
        id: string;
        placeholder?: string;
        items: SelectItemWithTextProps[];
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
                <SelectItemWithChild value={item.value} key={item.value}>
                    {item.label}
                </SelectItemWithChild>
            ))}
        </SelectFieldLayout>
    );
};
