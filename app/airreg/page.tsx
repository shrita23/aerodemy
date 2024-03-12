import AirReg from "@/components/airreg";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Air Regulation",
    description: "Description here",
};

export default function AirRegPage() {
    return (
        <>
            <AirReg />
        </>
    );
}
