import Image from "next/image";

export default function About() {
    return (
        <section
            id="about"
            className="py-24 md:py-32 border-t border-border bg-background relative overflow-hidden"
        >
            {/* Soft blurred background accent */}
            <div className="absolute -top-32 -left-32 w-72 h-72 bg-primary/10 blur-3xl rounded-full z-0 animate-pulse-slow" />
            <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-muted/20 blur-2xl rounded-full z-0" />

            <div className="relative z-10 max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Image */}
                <div className="w-full flex justify-center md:justify-start animate-fade-in-left">
                    <Image
                        src="/about-image.png"
                        alt="About Devnixa"
                        width={600}
                        height={400}
                        className="rounded-2xl shadow-lg object-cover w-full max-w-md md:max-w-full transition-transform duration-500 hover:scale-[1.02]"
                    />
                </div>

                {/* Text Content */}
                <div className="w-full flex flex-col justify-center text-center md:text-left space-y-6 animate-fade-in-right">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                        About <span className="text-primary">Devnixa</span>
                    </h2>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                        Devnixa is a full-stack web agency crafting high-performance, beautiful,
                        and scalable digital products. With a developer-led mindset and a focus
                        on design excellence, we help startups and enterprises bring ideas to life.
                    </p>
                    <p className="text-muted-foreground text-base">
                        Whether it&apos;s SaaS, eCommerce, AI, or real estate tech — our work delivers
                        results that are as functional as they are stunning.
                    </p>
                </div>
            </div>
        </section>
    );
}
