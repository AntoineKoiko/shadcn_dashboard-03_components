import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col justify-center items-center p-8">
            <h1 className="text-2xl absolute top-12 w-full text-center">
                A <span className="font-bold">Shadcn/ui</span> based page
            </h1>
            <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
                <div className="mx-auto grid columns-1 gap-8">
                    <p className=" leading-loose sm:text-sm">
                        A personal proposal for a breakdown into components of{" "}
                        <Link
                            href="https://ui.shadcn.com/blocks#dashboard-03"
                            className="p-2 border-transparent rounded-md bg-slate-200 hover:bg-slate-300"
                        >
                            Dashboard-03
                        </Link>{" "}
                        block proprosed by Shadcn/ui{" "}
                    </p>
                    <Button className="max-w-2xl mx-auto">
                        <a href="/dashboard">Go to Dashboard</a>
                    </Button>
                </div>
            </div>
        </main>
    );
}
