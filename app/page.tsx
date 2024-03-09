import Courses from "@/components/courses";
import HomeAbout from "@/components/home-about";
import HomeBanner from "@/components/home-banner";
import HomeHero from "@/components/home-hero";
import Testimonials from "@/components/home-testimonials";
import Image from "next/image";

export default function Home() {
    return (
        <div>
            <HomeHero />
            <HomeAbout />
            <Courses />
            <Testimonials />
        </div>
    );
}
