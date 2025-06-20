"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

export default function FAQs() {
    return (
        <section
            id="faq"
            className="relative py-24 md:py-32 bg-muted/40 border-t border-border overflow-hidden"
        >
            {/* Artistic background blur pulses */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-primary/10 blur-3xl rounded-full -z-10 animate-pulse-slow" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/10 blur-2xl rounded-full -z-10 animate-pulse-slower" />

            <div className="max-w-4xl mx-auto px-4 text-center">
                <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground flex justify-center items-center gap-2">
                        <HelpCircle className="w-7 h-7 text-primary" />
                        Frequently Asked Questions
                    </h2>
                    <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
                        Answers to some of the most common questions we get about Devnixa and our services.
                    </p>
                </div>

                <Accordion
                    type="single"
                    collapsible
                    className="w-full text-left space-y-4"
                >
                    {[
                        {
                            question: "What services does Devnixa offer?",
                            answer:
                                "We provide end-to-end web development, UI/UX design, backend systems, and scalable SaaS and AI-driven platforms.",
                        },
                        {
                            question: "Do you work with startups or only enterprises?",
                            answer:
                                "We work with both! Whether you're a startup founder or a scaling enterprise, we tailor our solutions to your needs.",
                        },
                        {
                            question: "How long does a typical project take?",
                            answer:
                                "Timelines vary, but most projects take 4–12 weeks depending on scope and complexity.",
                        },
                        {
                            question: "What technologies do you use?",
                            answer:
                                "We specialize in Next.js, React, Tailwind CSS, NestJS, PostgreSQL, Solana, and modern DevOps stacks like Docker and AWS.",
                        },
                    ].map((faq, i) => (
                        <AccordionItem
                            value={`item-${i}`}
                            key={i}
                            className="border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all bg-background"
                        >
                            <AccordionTrigger className="text-lg font-medium px-5 py-4 hover:bg-muted/30 transition-all">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground px-5 py-4 text-base leading-relaxed">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}
