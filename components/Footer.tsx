import Link from "next/link"
import { Container } from "@/components/ui/Container"

const footerLinks = [
    {
        title: "Company",
        links: [
            { label: "About Us", href: "/about-us" },
            { label: "Leadership", href: "/leadership" },
            { label: "Featured Works", href: "/featured-works" },
            { label: "Contact", href: "/contact" },
        ],
    },
    {
        title: "Services",
        links: [
            { label: "Technology Solution", href: "/services#technology" },
            { label: "Government Advocacy", href: "/services#advocacy" },
            { label: "Event Management", href: "/services#events" },
            { label: "Production House", href: "/services#production" },
        ],
    },
    {
        title: "Sub-Brands",
        links: [
            { label: "GWI Collective", href: "/services#gwi" },
            { label: "DNA Podcast Studio", href: "/services#dna-podcast" },
            { label: "Clients & Partners", href: "/clients-partners" },
        ],
    },
]

export function Footer() {
    return (
        <footer className="bg-[#00174c] text-white">
            <Container className="pt-16 pb-8">
                {/* Top section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-white/10">
                    {/* Brand block */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-3 mb-5">
                            <div className="w-10 h-10 bg-[#e50113] rounded-sm flex items-center justify-center">
                                <span className="text-white font-serif font-bold text-lg">T</span>
                            </div>
                            <div>
                                <p className="font-serif font-bold text-lg leading-tight">TSA</p>
                                <p className="text-[9px] tracking-[0.2em] uppercase text-white/50">Tricatha Sempiternal Asia</p>
                            </div>
                        </div>
                        <p className="text-white/60 text-sm leading-relaxed max-w-sm mb-6">
                            One Stop Online &amp; Offline Strategic Solution — bridging technology, advocacy, and creative excellence for government, institutional, and corporate clients since 2012.
                        </p>
                        <div className="space-y-2 text-sm text-white/50">
                            <p>📍 Jakarta, Indonesia</p>
                            <p>📞 +62 21 XXXX XXXX</p>
                            <p>✉️ info@tsa.co.id</p>
                        </div>
                    </div>

                    {/* Link columns */}
                    {footerLinks.map((group) => (
                        <div key={group.title}>
                            <h4 className="text-xs font-semibold tracking-[0.15em] uppercase text-white/40 mb-4">
                                {group.title}
                            </h4>
                            <ul className="space-y-3">
                                {group.links.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            className="text-sm text-white/60 hover:text-[#e50113] transition-colors"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom bar */}
                <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-white/30">
                        &copy; {new Date().getFullYear()} Tricatha Sempiternal Asia. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6 text-xs text-white/30">
                        <Link href="#" className="hover:text-white/60 transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white/60 transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </Container>
        </footer>
    )
}
