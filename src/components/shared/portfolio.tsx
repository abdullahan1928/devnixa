import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

const projects = [
    {
        title: "PropNerd.io",
        description:
            "Solana-based real estate investment platform with a powerful dashboard.",
        image: "/projects/propnerd.png",
        link: "https://www.propnerd.io/",
        tags: ["Solana", "Next.js", "Stripe"],
        featured: true,
    },
    {
        title: "BitWaly",
        description: "Smart link shortener with location-based analytics.",
        image: "/projects/bitwaly.png",
        link: "https://bitwaly.vercel.app/",
        tags: ["React", "MongoDB", "Node.js"],
    },
    {
        title: "Qalifi AI",
        description: "WebRTC-based voice assistant with ElevenLabs & GPT-4o.",
        image: "/projects/qalifi.png",
        link: "#",
        tags: ["AI", "WebRTC", "FFmpeg"],
    },
    {
        title: "Genia",
        description:
            "AI-based interior design suggestion engine built in days.",
        image: "/projects/genia.png",
        link: "https://genia-three.vercel.app/",
        tags: ["Next.js", "AI", "Vercel"],
    },
];

export default function Portfolio() {
    return (
        <section
            id="portfolio"
            className="py-24 md:py-32 bg-background border-t border-border relative overflow-hidden"
        >
            {/* Background accents */}
            <div className="absolute top-0 left-0 w-60 h-60 bg-primary/10 blur-3xl rounded-full -z-10 animate-pulse-slow" />
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-accent/10 blur-2xl rounded-full -z-10 animate-pulse-slow" />

            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                        Our Work
                    </h2>
                    <p className="mt-4 text-muted-foreground text-lg max-w-xl mx-auto">
                        A selection of real projects we&apos;ve crafted — fast, functional, and beautiful.
                    </p>
                </div>

                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
                    {projects.map((project, i) => (
                        <Link
                            href={project.link}
                            key={i}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`group relative rounded-2xl overflow-hidden border border-border bg-muted/70 backdrop-blur-sm shadow-xl transition-transform duration-300 hover:scale-[1.015] focus:outline-none focus:ring-2 focus:ring-ring ${project.featured
                                    ? "md:col-span-2 lg:col-span-2 row-span-1"
                                    : ""
                                }`}
                        >
                            {/* Image with hover zoom and shine */}
                            <div className="relative overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    width={800}
                                    height={500}
                                    className="w-full h-56 md:h-64 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent p-6 flex flex-col justify-end">
                                    <div className="flex items-center gap-2">
                                        <h3 className="text-xl font-semibold text-foreground">
                                            {project.title}
                                        </h3>
                                        <ExternalLink className="w-4 h-4 text-muted-foreground" />
                                    </div>
                                    <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                                        {project.description}
                                    </p>
                                    <div className="mt-3 flex flex-wrap gap-2 text-xs">
                                        {project.tags.map((tag, j) => (
                                            <span
                                                key={j}
                                                className="bg-primary/10 text-primary px-2 py-0.5 rounded-full hover:bg-primary/20 transition"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
