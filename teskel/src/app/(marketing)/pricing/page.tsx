"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { pricingPlans, faqItems } from "@/lib/mock-data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function PricingPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-white to-[#F7F7F8] pb-4 pt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mx-auto max-w-2xl text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Simple, transparent pricing
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Start free. Upgrade when you need more power.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#F7F7F8] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pricingPlans.map((plan, i) => (
              <motion.div
                key={plan.name}
                className={`relative rounded-2xl border bg-white p-6 ${
                  plan.popular
                    ? "border-teskel-accent shadow-[0_1px_2px_rgba(0,0,0,.04),0_8px_24px_rgba(0,0,0,.05)]"
                    : "border-border"
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                {plan.popular && (
                  <Badge className="absolute -top-2.5 left-1/2 -translate-x-1/2 rounded-full bg-teskel-accent px-3 text-white">
                    Most popular
                  </Badge>
                )}
                <h3 className="text-lg font-semibold text-foreground">
                  {plan.name}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {plan.description}
                </p>
                <div className="mt-6">
                  {plan.price === -1 ? (
                    <p className="text-3xl font-bold text-foreground">Custom</p>
                  ) : (
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-bold text-foreground">
                        ${plan.price}
                      </span>
                      {plan.price > 0 && (
                        <span className="text-sm text-muted-foreground">
                          /mo{plan.perUser ? " per user" : ""}
                        </span>
                      )}
                    </div>
                  )}
                </div>
                <Button className="mt-6 w-full rounded-full">{plan.cta}</Button>
                <ul className="mt-6 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-teskel-accent" />
                      <span className="text-sm text-muted-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-foreground">
            Marketplace fees
          </h2>
          <div className="mx-auto mt-8 max-w-md rounded-2xl border border-border bg-white p-6 text-center shadow-sm">
            <p className="text-5xl font-bold text-teskel-accent">80 / 20</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Creators keep 80% of every sale. Teskel takes 20%.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F7F8] py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-foreground">
            Pricing FAQ
          </h2>
          <div className="mt-8">
            <Accordion className="space-y-3">
              {faqItems.slice(0, 4).map((item, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="rounded-2xl border border-border bg-white px-6"
                >
                  <AccordionTrigger className="text-left text-sm font-semibold text-foreground hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </>
  );
}
