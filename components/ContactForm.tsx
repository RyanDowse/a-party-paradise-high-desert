"use client";

import { useId, useState } from "react";
import { useSearchParams } from "next/navigation";
import { siteContent } from "@/data/siteContent";
import {
  getCategory,
  getInterestForItem,
  getProductByCategoryAndSlug,
} from "@/data/inventoryCatalog";

const inputClass =
  "block w-full rounded-lg border border-[#1E2A3A]/20 bg-white px-3 py-2 text-base text-[#1E2A3A] shadow-sm focus:border-[#F97316] focus:outline-none focus:ring-2 focus:ring-[#F97316]/40";

function Field({
  id,
  label,
  required,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-[#1E2A3A]">
        {label} {required && <span className="text-[#F97316]">*</span>}
      </label>
      <div className="mt-1">{children}</div>
    </div>
  );
}

export default function ContactForm() {
  const { contact, slugToInterest } = siteContent;
  const formId = useId();
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");
  const itemParam = searchParams.get("item");

  const product =
    categoryParam && itemParam
      ? getProductByCategoryAndSlug(categoryParam, itemParam)
      : null;
  const productCategory = categoryParam ? getCategory(categoryParam) : null;

  const initialInterest = (() => {
    if (categoryParam) return getInterestForItem(categoryParam, itemParam);
    if (itemParam) return slugToInterest[itemParam] ?? null;
    return null;
  })();

  const detailsDefault = product
    ? `I'm interested in: ${product.name}${
        productCategory ? ` (${productCategory.title})` : ""
      }`
    : "";

  const [submitted, setSubmitted] = useState(false);
  const [interests, setInterests] = useState<Set<string>>(() =>
    initialInterest ? new Set([initialInterest]) : new Set<string>()
  );

  function toggleInterest(opt: string, checked: boolean) {
    setInterests((prev) => {
      const next = new Set(prev);
      if (checked) next.add(opt);
      else next.delete(opt);
      return next;
    });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-[#1E2A3A]/10 sm:p-8"
      >
        <span
          aria-hidden
          className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#F97316]/15 text-[#F97316]"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </span>
        <p className="mt-4 font-heading text-lg font-bold text-[#1E2A3A]">
          Thanks — your demo submission was received locally.
        </p>
        <p className="mt-2 text-sm text-[#1E2A3A]/80">
          No request was actually sent. This form is a placeholder until real form handling is connected. Please call to book.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-5 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-[#1E2A3A]/10 sm:p-8"
    >
      {(product || initialInterest) && (
        <p className="rounded-lg bg-[#F97316]/10 px-3 py-2 text-sm text-[#1E2A3A]">
          {product && productCategory ? (
            <>
              Pre-selected from your last page:{" "}
              <strong className="font-semibold">
                {productCategory.title} → {product.name}
              </strong>
            </>
          ) : (
            <>
              Pre-selected from your last page:{" "}
              <strong className="font-semibold">{initialInterest}</strong>
            </>
          )}
        </p>
      )}
      <Field id={`${formId}-name`} label="Your Name" required>
        <input
          id={`${formId}-name`}
          name="name"
          type="text"
          required
          autoComplete="name"
          className={inputClass}
        />
      </Field>
      <Field id={`${formId}-phone`} label="Phone Number" required>
        <input
          id={`${formId}-phone`}
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          className={inputClass}
        />
      </Field>
      <Field id={`${formId}-email`} label="Email Address">
        <input
          id={`${formId}-email`}
          name="email"
          type="email"
          autoComplete="email"
          className={inputClass}
        />
      </Field>
      <Field id={`${formId}-date`} label="Event Date" required>
        <input
          id={`${formId}-date`}
          name="eventDate"
          type="date"
          required
          className={inputClass}
        />
      </Field>
      <Field id={`${formId}-city`} label="City or Zip Code" required>
        <input
          id={`${formId}-city`}
          name="city"
          type="text"
          required
          autoComplete="address-level2"
          className={inputClass}
        />
      </Field>
      <fieldset>
        <legend className="text-sm font-semibold text-[#1E2A3A]">
          What Are You Interested In? <span className="text-[#F97316]">*</span>
        </legend>
        <div className="mt-3 grid gap-2 sm:grid-cols-2">
          {contact.interestOptions.map((opt) => (
            <label
              key={opt}
              className="flex cursor-pointer items-center gap-2 rounded-lg border border-[#1E2A3A]/15 px-3 py-2 text-sm text-[#1E2A3A] hover:bg-[#FAFAF8]"
            >
              <input
                type="checkbox"
                name="interest"
                value={opt}
                checked={interests.has(opt)}
                onChange={(e) => toggleInterest(opt, e.target.checked)}
                className="h-4 w-4 rounded border-[#1E2A3A]/40 text-[#F97316] focus:ring-[#F97316]"
              />
              {opt}
            </label>
          ))}
        </div>
      </fieldset>
      <Field id={`${formId}-details`} label="Additional Details or Questions">
        <textarea
          id={`${formId}-details`}
          name="details"
          rows={4}
          defaultValue={detailsDefault}
          className={`${inputClass} resize-y`}
        />
      </Field>
      <button
        type="submit"
        className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-[#F97316] px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-[#EA6A0A] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E2A3A]"
      >
        {contact.submitLabel}
      </button>
      <p className="text-center text-xs text-[#1E2A3A]/60">
        Demo form — no data is submitted to any service. Connect a real form before launch.
      </p>
    </form>
  );
}
