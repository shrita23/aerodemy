import AICP from "@/components/aicpp";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "AICPP",
    description: "Description here",
};

export default function AICPPPage() {
    return (
        <>
            <AICP />
        </>
    );
}
