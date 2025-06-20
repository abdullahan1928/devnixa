"use client";

import CountUp from "react-countup";
import { Briefcase, Clock, Smile, Settings } from "lucide-react";

const stats = [
    { label: "Projects Completed", value: 40, suffix: "+", icon: <Briefcase className="w-5 h-5 text-primary" /> },
    { label: "Years of Experience", value: 4, suffix: "+", icon: <Clock className="w-5 h-5 text-primary" /> },
    { label: "Happy Clients", value: 30, suffix: "+", icon: <Smile className="w-5 h-5 text-primary" /> },
    { label: "Stack Expertise", value: 15, suffix: "+ Tools", icon: <Settings className="w-5 h-5 text-primary" /> },
];

export default function Stats() {
    return (
        <section className="bg-muted/40 py-24 border-t border-border relative overflow-hidden">
            {/* Background Blobs */}
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse-slow z-0" />
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-accent/10 rounded-full blur-2xl animate-pulse-slow z-0" />

            <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">
                    Our Impact in Numbers
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, i) => (
                        <div
                            key={i}
                            className="transition duration-300 hover:scale-[1.05] hover:bg-background/80 backdrop-blur-sm rounded-xl p-6 shadow-md border border-border"
                        >
                            <div className="flex justify-center items-center gap-2 mb-2 text-muted-foreground text-sm font-medium">
                                {stat.icon}
                                {stat.label}
                            </div>
                            <span className="text-4xl font-extrabold text-foreground animate-fade-in-up">
                                <CountUp end={stat.value} duration={2} enableScrollSpy scrollSpyOnce />{stat.suffix}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
