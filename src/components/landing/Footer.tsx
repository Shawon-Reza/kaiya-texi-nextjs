
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { ModeToggle } from "../common/theme-toggle-button";
import LanguageSwitcher from "../common/language-switcher";



const quickLinks = [
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
    { label: "Commercial Disclosure", href: "#" },
];

const socialLinks = [
    { label: "Facebook", href: "#", icon: FaFacebookF },
    { label: "LinkedIn", href: "#", icon: FaLinkedinIn },
    { label: "Instagram", href: "#", icon: FaInstagram },
];

const Footer = () => {
    return (
        <footer className="border-t border-zinc-800 bg-black text-zinc-100">
            <div className="mx-auto w-full  px-4 py-12 sm:px-6 lg:px-8 lg:py-12">
                <div className="grid gap-10 justify-center md:grid-cols-2 lg:grid-cols-3 lg:gap-14">
                    <div>
                        <div className="flex items-center gap-3">
                            <div className="grid h-10 w-10 place-items-center rounded-lg bg-zinc-100 text-black">
                                <span aria-hidden className="text-xs font-black tracking-wide">
                                    KT
                                </span>
                            </div>
                            <span className="text-2xl font-black tracking-tight">kaiya taxi</span>
                        </div>

                        <p className="mt-5 max-w-sm text-base leading-8 text-zinc-300">
                            Welcome to kaiya taxi, your trusted and registered transportation
                            service provider in kaiya, Japan.
                        </p>

                        <div className="mt-6 flex items-center gap-3">
                            {socialLinks.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <Link
                                        key={item.label}
                                        href={item.href}
                                        aria-label={item.label}
                                        className="grid h-10 w-10 place-items-center rounded-xl bg-zinc-800 text-zinc-200 transition-colors hover:bg-zinc-700"
                                    >
                                        <Icon className="h-4 w-4" />
                                    </Link>
                                );
                            })}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-sm font-extrabold tracking-[0.15em] text-zinc-100">
                            QUICK LINKS
                        </h3>
                        <ul className="mt-5 space-y-4 text-lg text-zinc-300">
                            {quickLinks.map((item) => (
                                <li key={item.label}>
                                    <Link href={item.href} className="transition-colors hover:text-white">
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-extrabold tracking-[0.15em] text-zinc-100">
                            CONTACT
                        </h3>

                        <ul className="mt-5 space-y-4 text-lg text-zinc-300">
                            <li className="flex items-start gap-3">
                                <Phone className="mt-1 h-5 w-5 shrink-0" />
                                <span>+81 11-XXX-XXXX</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Mail className="mt-1 h-5 w-5 shrink-0" />
                                <span>info@kiaya taxi.com</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin className="mt-1 h-5 w-5 shrink-0" />
                                <span>Sapporo, kiaya , Japan</span>
                            </li>
                        </ul>

                        <div className="mt-6 flex flex-wrap items-center gap-3">
                            <Link
                                href="#bookings"
                                className="inline-flex items-center gap-2 rounded-xl bg-zinc-100 px-5 py-3 text-sm font-bold text-black transition-colors hover:bg-zinc-300"
                            >
                                Book a Ride
                                <ArrowUpRight className="h-4 w-4" />
                            </Link>
                            <section className="text-black">
                                <ModeToggle />
                            </section>
                            <LanguageSwitcher />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;