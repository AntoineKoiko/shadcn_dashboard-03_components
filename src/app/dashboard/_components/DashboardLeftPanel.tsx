import { Bird, Rabbit, Turtle } from "lucide-react";

import {
    SelectWithIconField,
    SelectItemWithIconProps,
} from "@/components/_forms/SelectWithIconField";
import { InputField } from "@/components/_forms/InputField";
import { FieldSet } from "@/components/_forms/FieldSet";
import {
    SelectWithTextField,
    SelectItemWithTextProps,
} from "@/components/_forms/SelectWithTextField";
import { TextAreaField } from "@/components/_forms/TextAreaField";

export const DashboardLeftPanel = () => {
    const selectModelChoice: SelectItemWithIconProps[] = [
        {
            value: "genesis",
            icon: <Rabbit className="size-5" />,
            title: "Genesis",
            description: "Our fastest model for general use cases.",
            category: "Neural",
        },
        {
            value: "explorer",
            icon: <Bird className="size-5" />,
            title: "Explorer",
            description: "Performance and speed for efficiency.",
            category: "Neural",
        },
        {
            value: "quantum",
            icon: <Turtle className="size-5" />,
            title: "Quantum",
            description: "The most powerful model for complex computations.",
            category: "Neural",
        },
    ];
    const selectRoleChoice: SelectItemWithTextProps[] = [
        { value: "system", label: "System" },
        { value: "user", label: "User" },
        { value: "assistant", label: "Assistant" },
    ];

    return (
        <div
            className="relative hidden flex-col items-start gap-8 md:flex"
            x-chunk="dashboard-03-chunk-0"
        >
            <form className="grid w-full items-start gap-6">
                <FieldSet legend="Settigns">
                    <div className="grid gap-3">
                        <SelectWithIconField
                            label="Model"
                            id="model"
                            placeholder="Select a model"
                            items={selectModelChoice}
                        />
                    </div>
                    <InputField
                        id="temperature"
                        label="Temperature"
                        type="number"
                        placeholder="0.4"
                    />
                    <div className="grid grid-cols-2 gap-4">
                        <InputField
                            id="top-p"
                            type="number"
                            label="Top P"
                            placeholder="0.7"
                        />
                        <InputField
                            id="top-k"
                            type="number"
                            label="Top K"
                            placeholder="0.0"
                        />
                    </div>
                </FieldSet>
                <FieldSet legend="Messages">
                    <div className="grid gap-3">
                        <SelectWithTextField
                            label="Role"
                            id="role"
                            placeholder="Select a role"
                            items={selectRoleChoice}
                        />
                    </div>
                    <TextAreaField
                        id="content"
                        label="Content"
                        placeholder="You are a..."
                        className="min-h-[9.5rem]"
                    />
                </FieldSet>
            </form>
        </div>
    );
};
