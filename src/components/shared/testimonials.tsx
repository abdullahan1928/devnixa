import Image from "next/image";
import { Quote } from "lucide-react";

const testimonials = [
    {
        name: "Sara Malik",
        role: "Product Manager @ TechSphere",
        avatar: "/avatars/sara.png",
        quote:
            "Working with Devnixa was a game-changer. Their attention to detail and speed blew us away. We shipped faster than ever before.",
    },
    {
        name: "Junaid Akhtar",
        role: "Founder @ ReviAI",
        avatar: "/avatars/junaid.png",
        quote:
            "Their ability to translate complex AI ideas into intuitive UI and backend logic is rare. Devnixa is elite.",
    },
    {
        name: "Emily Zhao",
        role: "CTO @ Orbit Marketplace",
        avatar: "/avatars/emily.png",
        quote:
            "Devnixa not only delivered clean code, but thought deeply about UX, scalability, and future-proofing. 10/10 would hire again.",
    },
];

export default function Testimonials() {
    return (
        <section
            id="testimonials"
            className="bg-muted/50 py-24 md:py-32 border-t border-border relative overflow-hidden"
        >
            {/* Soft background blur accents */}
            <div className="absolute top-0 left-0 w-60 h-60 bg-primary/10 blur-3xl rounded-full -z-10 animate-pulse-slow" />
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-accent/10 blur-2xl rounded-full -z-10 animate-pulse-slow" />

            <div className="max-w-6xl mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                    What Our Clients Say
                </h2>
                <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
                    We don’t just build products — we build long-lasting relationships through quality and clarity.
                </p>

                <div className="mt-16 grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-left">
                    {testimonials.map((t, i) => (
                        <div
                            key={i}
                            className="group relative bg-background border border-border rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300"
                        >
                            {/* Quotation icon */}
                            <Quote className="absolute top-4 right-4 w-6 h-6 text-primary/30 group-hover:scale-110 transition-transform" />

                            {/* Quote */}
                            <p className="text-muted-foreground italic leading-relaxed">
                                “{t.quote}”
                            </p>

                            {/* Person */}
                            <div className="flex items-center gap-4 mt-6">
                                <Image
                                    src={t.avatar}
                                    alt={t.name}
                                    width={48}
                                    height={48}
                                    className="rounded-full border object-cover"
                                />
                                <div>
                                    <p className="font-semibold text-foreground">{t.name}</p>
                                    <p className="text-sm text-muted-foreground">{t.role}</p>
                                </div>
                            </div>

                            {/* Shine animation on hover */}
                            <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-br from-transparent via-white/5 to-white/10 blur-md" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
