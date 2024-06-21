import { Button } from "@/components/ui/button";
import Link from "next/link";
import { GithubIcon } from "./_components/GithubIcon";

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
                        <Link href="/dashboard">Go to Dashboard</Link>
                    </Button>
                </div>
            </div>
            <div className="absolute bottom-4 right-4">
                <Button asChild className="p-2">
                    <Link
                        href="https://github.com/AntoineKoiko/shadcn_dashboard-03_components"
                        className="flex items-center"
                        target="_blank"
                    >
                        <p className="mr-2 hidden sm:block">View on Github</p>
                        <GithubIcon size={24} />
                    </Link>
                </Button>
            </div>
        </main>
    );
}
