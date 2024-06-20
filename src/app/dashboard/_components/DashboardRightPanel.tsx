import { CornerDownLeft, Mic, Paperclip } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { ToolTipText } from "./ux/ToolTipText";
import { TextAreaField } from "./_forms/TextAreaField";

export const DashboardRightPanel = () => {
    return (
        <div className="relative flex h-full min-h-[50vh] flex-col rounded-xl bg-muted/50 p-4 lg:col-span-2 ">
            <Badge variant="outline" className="absolute right-3 top-3">
                Output
            </Badge>
            <div className="flex-1" />
            <form
                className="relative overflow-hidden rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring"
                x-chunk="dashboard-03-chunk-1"
            >
                <TextAreaField
                    id="message"
                    label="Message"
                    placeholder="Type your message here..."
                    className="min-h-12 resize-none border-0 p-3 shadow-none focus-visible:ring-0"
                    labelClassName="sr-only"
                />

                <div className="flex items-center p-3 pt-0">
                    <ToolTipText text="Attach Ffile" side="top">
                        <Button variant="ghost" size="icon">
                            <Paperclip className="size-4" />
                            <span className="sr-only">Attach file</span>
                        </Button>
                    </ToolTipText>
                    <ToolTipText text="Use Microphone" side="top">
                        <Button variant="ghost" size="icon">
                            <Mic className="size-4" />
                            <span className="sr-only">Use Microphone</span>
                        </Button>
                    </ToolTipText>

                    <Button type="submit" size="sm" className="ml-auto gap-1.5">
                        Send Message
                        <CornerDownLeft className="size-3.5" />
                    </Button>
                </div>
            </form>
        </div>
    );
};
