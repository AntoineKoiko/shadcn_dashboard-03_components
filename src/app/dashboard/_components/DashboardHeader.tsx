import { Bird, Rabbit, Settings, Share, Turtle } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";

import { FieldSet } from "./_froms/FieldSet";
import {
    SelectWithIconField,
    SelectItemWithIconProps,
} from "./_froms/SelectWithIconField";
import { InputField } from "./_froms/InputField";
import { TextAreaField } from "./_froms/TextAreaField";
import {
    SelectWithTextField,
    SelectItemWithTextProps,
} from "./_froms/SelectWithTextField";

export const DashboardHeader = () => {
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
        <header className="sticky top-0 z-10 flex h-[53px] items-center gap-1 border-b bg-background px-4">
            <h1 className="text-xl font-semibold">Playground</h1>
            <Drawer>
                <DrawerTrigger asChild>
                    <Button variant="ghost" size="icon" className="md:hidden">
                        <Settings className="size-4" />
                        <span className="sr-only">Settings</span>
                    </Button>
                </DrawerTrigger>
                <DrawerContent className="max-h-[80vh]">
                    <DrawerHeader>
                        <DrawerTitle>Configuration</DrawerTitle>
                        <DrawerDescription>
                            Configure the settings for the model and messages.
                        </DrawerDescription>
                    </DrawerHeader>

                    <form className="grid w-full items-start gap-6 overflow-auto p-4 pt-0">
                        <FieldSet legend="Settings">
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
                            />
                        </FieldSet>
                    </form>
                </DrawerContent>
            </Drawer>
            <Button
                variant="outline"
                size="sm"
                className="ml-auto gap-1.5 text-sm"
            >
                <Share className="size-3.5" />
                Share
            </Button>
        </header>
    );
};
