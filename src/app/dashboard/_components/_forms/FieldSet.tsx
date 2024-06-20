import { PropsWithChildren } from "react";

export const FieldSet = (props: PropsWithChildren<{ legend: string }>) => {
    return (
        <fieldset className="grid gap-6 rounded-lg border p-4">
            <legend className="-ml-1 px-1 text-sm font-medium">
                {props.legend}
            </legend>
            {props.children}
        </fieldset>
    );
};
