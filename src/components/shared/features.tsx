import { Code, Rocket, ShieldCheck } from "lucide-react";

const features = [
    {
        title: "Modern Stack",
        description:
            "We build apps using Next.js, Tailwind, TypeScript, and scalable cloud infrastructure.",
        icon: <Code className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />,
    },
    {
        title: "Pixel-Perfect Design",
        description:
            "Everything we build is obsessively polished — responsive, accessible, and brand-aligned.",
        icon: <Rocket className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />,
    },
    {
        title: "Secure & Reliable",
        description:
            "From authentication to deployment — we ensure production-grade security and uptime.",
        icon: (
            <ShieldCheck className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
        ),
    },
];

export default function Features() {
    return (
        <section
            id="features"
            className="bg-muted/40 py-20 md:py-28 border-t border-border relative overflow-hidden"
        >
            {/* Decorative floating element */}
            <div className="absolute -top-32 right-0 w-72 h-72 bg-primary/10 blur-3xl rounded-full z-0 animate-pulse-slow" />

            <div className="relative z-10 max-w-6xl mx-auto px-4">
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight animate-fade-in-up">
                        Why <span className="text-primary">Devnixa</span>?
                    </h2>
                    <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto animate-fade-in-up delay-100">
                        Our approach combines modern tools with timeless design and engineering principles.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 animate-fade-in-up delay-200">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group bg-background/90 backdrop-blur-sm border border-border rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className="mb-4 p-3 bg-primary/10 rounded-full w-fit">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-foreground">
                                {feature.title}
                            </h3>
                            <p className="text-sm text-muted-foreground">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
