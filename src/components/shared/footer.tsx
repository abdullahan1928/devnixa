import { email, socialLinks } from "@/data/social";

export default function Footer() {
    return (
        <footer className="border-t border-border bg-background pt-12 pb-4">
            <div className="max-w-6xl mx-auto px-4 grid gap-8 md:grid-cols-3 text-sm text-muted-foreground">

                {/* Left Column */}
                <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Devnixa</h3>
                    <p>
                        Devnixa builds elegant, scalable, and intelligent web solutions for modern businesses.
                    </p>

                    {/* Social Icons */}
                    <div className="flex gap-4 mt-4">
                        {socialLinks.map(({ name, url, icon: Icon }) => (
                            <a
                                key={name}
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={name}
                                className="text-foreground hover:text-primary transition"
                            >
                                <Icon className="w-5 h-5" />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Center Column */}
                <div>
                    <h4 className="font-semibold text-foreground mb-2">Quick Links</h4>
                    <ul className="space-y-2">
                        <li><a href="#features" className="hover:text-primary">Features</a></li>
                        <li><a href="#portfolio" className="hover:text-primary">Portfolio</a></li>
                        <li><a href="#testimonials" className="hover:text-primary">Testimonials</a></li>
                        <li><a href="#contact" className="hover:text-primary">Contact</a></li>
                    </ul>
                </div>

                {/* Right Column */}
                <div>
                    <h4 className="font-semibold text-foreground mb-2">Contact</h4>
                    <p>Email: <a href={`mailto:${email}`} className="hover:text-primary hover:underline">{email}</a></p>
                    <p className="mt-1">Islamabad, Pakistan</p>
                </div>
            </div>

            <div className="text-center text-xs mt-10 text-muted-foreground border-t border-border pt-4 mx-16">
                &copy; {new Date().getFullYear()} Devnixa. All rights reserved.
            </div>
        </footer>
    );
}
