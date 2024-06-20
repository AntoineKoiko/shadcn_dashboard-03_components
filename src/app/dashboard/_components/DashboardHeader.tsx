import {
    Bird,
    Book,
    Bot,
    Code2,
    CornerDownLeft,
    LifeBuoy,
    Mic,
    Paperclip,
    Rabbit,
    Settings,
    Settings2,
    Share,
    Sidebar,
    SquareTerminal,
    SquareUser,
    Triangle,
    Turtle,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
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

import {
    SelectWithIconField,
    SelectItemWithIconProps,
} from "./_froms/SelectWithIconFieldField";

export const DashboardHeader = () => {
    const selectModelChoice: SelectItemWithIconProps[] = [
        {
            value: "genesis",
            icon: <Rabbit className="size-5" />,
            title: "Genesis",
            description: "Our fastest model for general use cases.",
        },
        {
            value: "explorer",
            icon: <Bird className="size-5" />,
            title: "Explorer",
            description: "Performance and speed for efficiency.",
        },
        {
            value: "quantum",
            icon: <Turtle className="size-5" />,
            title: "Quantum",
            description: "The most powerful model for complex computations.",
        },
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
                        <fieldset className="grid gap-6 rounded-lg border p-4">
                            <legend className="-ml-1 px-1 text-sm font-medium">
                                Settings
                            </legend>
                            <div className="grid gap-3">
                                <SelectWithIconField
                                    label="Model"
                                    id="model"
                                    placeholder="Select a model"
                                    items={selectModelChoice}
                                />
                            </div>
                            <div className="grid gap-3">
                                <Label htmlFor="temperature">Temperature</Label>
                                <Input
                                    id="temperature"
                                    type="number"
                                    placeholder="0.4"
                                />
                            </div>
                            <div className="grid gap-3">
                                <Label htmlFor="top-p">Top P</Label>
                                <Input
                                    id="top-p"
                                    type="number"
                                    placeholder="0.7"
                                />
                            </div>
                            <div className="grid gap-3">
                                <Label htmlFor="top-k">Top K</Label>
                                <Input
                                    id="top-k"
                                    type="number"
                                    placeholder="0.0"
                                />
                            </div>
                        </fieldset>
                        <fieldset className="grid gap-6 rounded-lg border p-4">
                            <legend className="-ml-1 px-1 text-sm font-medium">
                                Messages
                            </legend>
                            <div className="grid gap-3">
                                <Label htmlFor="role">Role</Label>
                                <Select defaultValue="system">
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a role" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="system">
                                            System
                                        </SelectItem>
                                        <SelectItem value="user">
                                            User
                                        </SelectItem>
                                        <SelectItem value="assistant">
                                            Assistant
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="grid gap-3">
                                <Label htmlFor="content">Content</Label>
                                <Textarea
                                    id="content"
                                    placeholder="You are a..."
                                />
                            </div>
                        </fieldset>
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
