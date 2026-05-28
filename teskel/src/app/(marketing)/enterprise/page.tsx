"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Shield,
  Lock,
  FileSearch,
  Users,
  Server,
  CheckCircle,
  Building2,
  KeyRound,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  { title: "Private Marketplace", desc: "Internal package store visible only to your organization.", icon: Lock },
  { title: "SSO / SAML", desc: "Single sign-on with your identity provider.", icon: KeyRound },
  { title: "Audit Logs", desc: "Complete trail of every workspace and package action.", icon: FileSearch },
  { title: "Policy Controls", desc: "Enforce package approval, runtime restrictions, and AI policies.", icon: Shield },
  { title: "Approved Packages", desc: "Control which marketplace packages your teams can use.", icon: CheckCircle },
  { title: "Private Runtime", desc: "Dedicated container runtime for your organization.", icon: Server },
  { title: "Role-based Access", desc: "Granular roles across workspaces, packages, and billing.", icon: Users },
  { title: "Compliance", desc: "SOC 2, GDPR, and custom compliance requirements.", icon: Building2 },
];

export default function EnterprisePage() {
  return (
    <>
      <section className="bg-gradient-to-b from-white to-[#F7F7F8] pb-16 pt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mx-auto max-w-2xl text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Teskel for Enterprise
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Private registry, governance, SSO, audit logs, and dedicated
              runtime for your engineering organization.
            </p>
            <div className="mt-8">
              <Link href="#contact">
                <Button size="lg" className="rounded-full px-8">
                  Contact sales
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#F7F7F8] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                className="rounded-2xl border border-border bg-white p-5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <div className="mb-3 inline-flex rounded-xl bg-teskel-accent-soft p-2.5">
                  <f.icon className="h-5 w-5 text-teskel-accent" />
                </div>
                <h3 className="text-sm font-semibold text-foreground">
                  {f.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-white py-16">
        <div className="mx-auto max-w-lg px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-foreground">
            Get in touch
          </h2>
          <p className="mt-2 text-center text-sm text-muted-foreground">
            Tell us about your team and requirements.
          </p>
          <form className="mt-8 space-y-4">
            <div>
              <label className="text-sm font-medium text-foreground">Name</label>
              <input className="mt-1 w-full rounded-lg border border-border bg-white px-3 py-2 text-sm outline-none focus:border-teskel-accent focus:ring-1 focus:ring-teskel-accent" />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground">
                Work email
              </label>
              <input
                type="email"
                className="mt-1 w-full rounded-lg border border-border bg-white px-3 py-2 text-sm outline-none focus:border-teskel-accent focus:ring-1 focus:ring-teskel-accent"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground">
                Company
              </label>
              <input className="mt-1 w-full rounded-lg border border-border bg-white px-3 py-2 text-sm outline-none focus:border-teskel-accent focus:ring-1 focus:ring-teskel-accent" />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground">
                Team size
              </label>
              <input className="mt-1 w-full rounded-lg border border-border bg-white px-3 py-2 text-sm outline-none focus:border-teskel-accent focus:ring-1 focus:ring-teskel-accent" />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground">
                Message
              </label>
              <textarea
                rows={4}
                className="mt-1 w-full rounded-lg border border-border bg-white px-3 py-2 text-sm outline-none focus:border-teskel-accent focus:ring-1 focus:ring-teskel-accent"
              />
            </div>
            <Button className="w-full rounded-full" size="lg">
              Submit
            </Button>
          </form>
        </div>
      </section>
    </>
  );
}
