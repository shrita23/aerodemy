import ICPP from "@/components/icpp";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "ICPP",
    description: "Description here",
};

export default function AICPPPage() {
    return (
        <>
            <ICPP />
        </>
    );
}
