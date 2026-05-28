"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const packageTypes = [
  "skill-pack", "agent-pack", "project-template", "command-recipe",
  "workspace-layout", "design-pack", "ui-kit", "automation-pack",
  "runbook-pack", "checklist-pack", "integration-pack", "testing-pack",
  "security-pack", "database-pack", "docs-pack", "theme-pack", "plugin",
];

const steps = ["Type", "Metadata", "Files", "Pricing", "Permissions", "Preview"];

export default function CreatePackagePage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedType, setSelectedType] = useState<string | null>(null);

  return (
    <div className="mx-auto max-w-3xl">
      <Link
        href="/app/creator"
        className="mb-4 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" /> Back to Creator
      </Link>

      <h1 className="text-2xl font-bold text-foreground">Create Package</h1>
      <p className="mt-1 text-sm text-muted-foreground">
        Publish a new package to the marketplace.
      </p>

      {/* Steps */}
      <div className="mt-8 flex items-center gap-2">
        {steps.map((step, i) => (
          <div key={step} className="flex items-center gap-2">
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-medium ${
                i === currentStep
                  ? "bg-teskel-accent text-white"
                  : i < currentStep
                  ? "bg-teskel-green text-white"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              {i < currentStep ? <Check className="h-4 w-4" /> : i + 1}
            </div>
            <span className={`text-xs ${i === currentStep ? "font-medium text-foreground" : "text-muted-foreground"}`}>
              {step}
            </span>
            {i < steps.length - 1 && (
              <div className={`h-px w-8 ${i < currentStep ? "bg-teskel-green" : "bg-border"}`} />
            )}
          </div>
        ))}
      </div>

      {/* Step content */}
      <div className="mt-8 rounded-xl border border-border bg-white p-6">
        {currentStep === 0 && (
          <div>
            <h2 className="text-base font-semibold text-foreground">
              Select package type
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Choose what kind of package you&apos;re creating.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3">
              {packageTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`rounded-lg border p-3 text-left text-sm transition-colors ${
                    selectedType === type
                      ? "border-teskel-accent bg-teskel-accent-soft text-teskel-accent"
                      : "border-border text-muted-foreground hover:border-foreground/20"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        )}

        {currentStep === 1 && (
          <div className="space-y-4">
            <h2 className="text-base font-semibold text-foreground">Package metadata</h2>
            <div>
              <label className="text-sm font-medium">Package name</label>
              <input className="mt-1 w-full rounded-lg border border-border px-3 py-2 text-sm outline-none focus:border-teskel-accent" placeholder="my-awesome-pack" />
            </div>
            <div>
              <label className="text-sm font-medium">Title</label>
              <input className="mt-1 w-full rounded-lg border border-border px-3 py-2 text-sm outline-none focus:border-teskel-accent" placeholder="My Awesome Pack" />
            </div>
            <div>
              <label className="text-sm font-medium">Description</label>
              <textarea rows={3} className="mt-1 w-full rounded-lg border border-border px-3 py-2 text-sm outline-none focus:border-teskel-accent" placeholder="A brief description of what this package does..." />
            </div>
            <div>
              <label className="text-sm font-medium">Compatibility</label>
              <div className="mt-2 flex flex-wrap gap-2">
                {["teskel", "claude", "cursor", "copilot", "windsurf"].map((target) => (
                  <Badge key={target} variant="secondary" className="cursor-pointer text-xs">{target}</Badge>
                ))}
              </div>
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div>
            <h2 className="text-base font-semibold text-foreground">Upload files</h2>
            <p className="mt-1 text-sm text-muted-foreground">Upload package files or paste a manifest.</p>
            <div className="mt-4 rounded-xl border-2 border-dashed border-border p-12 text-center">
              <p className="text-sm text-muted-foreground">Drag files here or click to upload</p>
              <p className="mt-1 text-xs text-muted-foreground">Supports .md, .json, .yaml, .ts, .js</p>
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div className="space-y-4">
            <h2 className="text-base font-semibold text-foreground">Pricing</h2>
            <div className="flex gap-3">
              <button className="flex-1 rounded-lg border border-teskel-accent bg-teskel-accent-soft p-4 text-center">
                <p className="text-sm font-semibold text-foreground">Free</p>
                <p className="text-xs text-muted-foreground">Open to everyone</p>
              </button>
              <button className="flex-1 rounded-lg border border-border p-4 text-center">
                <p className="text-sm font-semibold text-foreground">Paid</p>
                <p className="text-xs text-muted-foreground">Set your price</p>
              </button>
            </div>
            <div>
              <label className="text-sm font-medium">Price (USD)</label>
              <input type="number" className="mt-1 w-full rounded-lg border border-border px-3 py-2 text-sm outline-none focus:border-teskel-accent" placeholder="29" />
              <p className="mt-1 text-xs text-muted-foreground">You receive 80% of every sale.</p>
            </div>
          </div>
        )}

        {currentStep === 4 && (
          <div className="space-y-4">
            <h2 className="text-base font-semibold text-foreground">Permissions</h2>
            <p className="text-sm text-muted-foreground">Declare what this package does.</p>
            {[
              { label: "Modifies files", desc: "Package writes or changes project files" },
              { label: "Runs commands", desc: "Package includes command recipes" },
              { label: "Uses AI", desc: "Package includes AI behavior" },
              { label: "Requires approval", desc: "Actions need user approval" },
            ].map((perm) => (
              <label key={perm.label} className="flex items-center gap-3 rounded-lg border border-border p-3">
                <input type="checkbox" className="rounded" />
                <div>
                  <p className="text-sm font-medium text-foreground">{perm.label}</p>
                  <p className="text-xs text-muted-foreground">{perm.desc}</p>
                </div>
              </label>
            ))}
          </div>
        )}

        {currentStep === 5 && (
          <div className="text-center">
            <h2 className="text-base font-semibold text-foreground">Ready to publish</h2>
            <p className="mt-1 text-sm text-muted-foreground">Review your package and submit.</p>
            <Button className="mt-6 rounded-full px-8">Publish package</Button>
          </div>
        )}
      </div>

      <div className="mt-6 flex justify-between">
        <Button
          variant="outline"
          onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
          disabled={currentStep === 0}
        >
          Previous
        </Button>
        <Button
          onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
          disabled={currentStep === steps.length - 1}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
