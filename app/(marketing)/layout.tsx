import { HomeLayout } from 'fumadocs-ui/layouts/home';
import Footer from "@/components/layout/Footer";
import BrandLogo from "@/components/BrandLogo";
import { Github } from "lucide-react";

export default function MarketingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <HomeLayout
            nav={{
                title: <BrandLogo className="h-10 w-auto" height={40} width={104} />,
            }}
            searchToggle={{ enabled: false }}
            links={[
                { text: "Features", url: "/#architecture" },
                { text: "Solutions", url: "/#solutions" },
                { text: "Enterprise", url: "/#enterprise" },
                { text: "Documentation", url: "/docs" },
                { text: "Contact", url: "mailto:info@ultraviolet.rs" },
                {
                    text: "GitHub",
                    url: "https://github.com/ultravioletrs/cube",
                    icon: <Github />,
                    external: true,
                },
            ]}
        >
            <main>
                {children}
            </main>
            <Footer />
        </HomeLayout>
    );
}
