"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GraduationCap, Calculator, Mail, CheckCircle2 } from "lucide-react";
import { contact } from "@/lib/data";
import { CgpaCalculator } from "@/components/cgpa-calculator";

const STORAGE_KEY = "sucf_scholarship_submissions_v1";

type Submission = {
  id: string;
  name: string;
  department: string;
  level: string;
  cgpa: string;
  submittedAt: string;
};

export function Scholarship() {
  const [calcOpen, setCalcOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    level: "ND1",
    cgpa: "",
    need: "",
  });
  const [mine, setMine] = useState<Submission[]>([]);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    try {
      const cached = window.localStorage.getItem(STORAGE_KEY);
      if (cached) setMine(JSON.parse(cached));
    } catch {
      // ignore malformed cache
    }
  }, []);

  const eligible =
    form.cgpa !== "" && !Number.isNaN(Number(form.cgpa)) && Number(form.cgpa) >= 3.0;

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.department) return;

    const subject = encodeURIComponent(
      `Scholarship Application: ${form.name} (${form.department})`
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nDepartment: ${form.department}\nLevel: ${form.level}\nCGPA: ${form.cgpa}\n\nStatement of need:\n${form.need}`
    );
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;

    const record: Submission = {
      id: `app_${Date.now()}`,
      name: form.name,
      department: form.department,
      level: form.level,
      cgpa: form.cgpa,
      submittedAt: new Date().toISOString(),
    };
    const updated = [record, ...mine];
    setMine(updated);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    setSent(true);
  };

  return (
    <section id="scholarship" className="relative bg-paper-100 py-28 lg:py-36">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <p className="font-mono text-[17px] uppercase tracking-[0.3em] text-green-500">
              International Scholarship
            </p>
            <h2 className="mt-4 font-display text-[41px] text-ink-950 sm:text-[53px]">
              Support for the next set
            </h2>
            <p className="mt-4 text-[19px] leading-relaxed text-slate-600">
              Following the International Scholarship seminar at the 9th
              Reunion, alumni and current students can apply here. Submitting
              opens an email to the alumni desk with your details, nothing is
              stored anywhere but this device.
            </p>
          </div>
          <button
            onClick={() => setCalcOpen(true)}
            className="glass-card flex shrink-0 items-center gap-2 rounded-full px-5 py-2.5 text-[15px] font-medium text-ink-800 transition-colors hover:text-green-700"
          >
            <Calculator className="h-4 w-4 text-green-700" />
            Check your CGPA
          </button>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <form
            onSubmit={onSubmit}
            className="glass-card space-y-4 rounded-3xl p-6 sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1.5 block text-[15px] font-medium text-ink-800">
                  Full name
                </span>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-xl border border-black/10 bg-white/70 px-4 py-2.5 text-[19px] text-ink-800 outline-none focus-visible:border-green-700"
                />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-[15px] font-medium text-ink-800">
                  Email
                </span>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-xl border border-black/10 bg-white/70 px-4 py-2.5 text-[19px] text-ink-800 outline-none focus-visible:border-green-700"
                />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-[15px] font-medium text-ink-800">
                  Phone
                </span>
                <input
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full rounded-xl border border-black/10 bg-white/70 px-4 py-2.5 text-[19px] text-ink-800 outline-none focus-visible:border-green-700"
                />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-[15px] font-medium text-ink-800">
                  Department
                </span>
                <input
                  required
                  value={form.department}
                  onChange={(e) =>
                    setForm({ ...form, department: e.target.value })
                  }
                  className="w-full rounded-xl border border-black/10 bg-white/70 px-4 py-2.5 text-[19px] text-ink-800 outline-none focus-visible:border-green-700"
                />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-[15px] font-medium text-ink-800">
                  Level
                </span>
                <select
                  value={form.level}
                  onChange={(e) => setForm({ ...form, level: e.target.value })}
                  className="w-full rounded-xl border border-black/10 bg-white/70 px-4 py-2.5 text-[19px] text-ink-800 outline-none focus-visible:border-green-700"
                >
                  {["ND1", "ND2", "HND1", "HND2"].map((l) => (
                    <option key={l} value={l}>
                      {l}
                    </option>
                  ))}
                </select>
              </label>
              <label className="block">
                <span className="mb-1.5 block text-[15px] font-medium text-ink-800">
                  Current CGPA
                </span>
                <input
                  required
                  type="number"
                  step="0.01"
                  min={0}
                  max={4}
                  value={form.cgpa}
                  onChange={(e) => setForm({ ...form, cgpa: e.target.value })}
                  className="w-full rounded-xl border border-black/10 bg-white/70 px-4 py-2.5 text-[19px] text-ink-800 outline-none focus-visible:border-green-700"
                />
              </label>
            </div>
            <label className="block">
              <span className="mb-1.5 block text-[15px] font-medium text-ink-800">
                Statement of need
              </span>
              <textarea
                rows={4}
                value={form.need}
                onChange={(e) => setForm({ ...form, need: e.target.value })}
                className="w-full rounded-xl border border-black/10 bg-white/70 px-4 py-2.5 text-[19px] text-ink-800 outline-none focus-visible:border-green-700"
              />
            </label>

            {form.cgpa && (
              <p
                className={`text-[15px] font-medium ${
                  eligible ? "text-green-700" : "text-slate-600"
                }`}
              >
                {eligible
                  ? "Indicative: your CGPA meets the typical 3.0+ threshold discussed at the seminar."
                  : "Indicative only: most awards favor 3.0 and above, you're still welcome to apply."}
              </p>
            )}

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-green-700 py-3 text-[15px] font-semibold uppercase tracking-wide text-white transition-colors hover:bg-green-600"
            >
              <Mail className="h-4 w-4" />
              Send Application
            </button>
            {sent && (
              <p className="flex items-center gap-2 text-[15px] text-green-700">
                <CheckCircle2 className="h-4 w-4" />
                Your email app should now be open with the details filled in.
                Send it to complete your application.
              </p>
            )}
          </form>

          <div className="glass-card rounded-3xl p-6 sm:p-8">
            <div className="mb-4 flex items-center gap-2 text-green-700">
              <GraduationCap className="h-4 w-4" />
              <h3 className="font-display text-[23px] text-ink-950">
                How it works
              </h3>
            </div>
            <ol className="space-y-3 text-[17px] leading-relaxed text-slate-600">
              <li>
                <span className="font-semibold text-ink-800">1.</span> Fill in
                your details and statement of need.
              </li>
              <li>
                <span className="font-semibold text-ink-800">2.</span>{" "}
                Submitting opens your email app with everything pre-filled,
                addressed to{" "}
                <span className="font-mono text-[15px] text-green-700">
                  {contact.email}
                </span>
                .
              </li>
              <li>
                <span className="font-semibold text-ink-800">3.</span> Send
                that email. The alumni desk reviews applications directly from
                your inbox message.
              </li>
            </ol>

            {mine.length > 0 && (
              <div className="mt-6 border-t border-black/8 pt-5">
                <p className="mb-2 font-mono text-[15px] uppercase tracking-[0.15em] text-slate-400">
                  Sent from this device
                </p>
                <ul className="space-y-2">
                  {mine.map((m) => (
                    <li
                      key={m.id}
                      className="rounded-xl bg-paper-100 px-4 py-2.5 text-[15px] text-ink-800"
                    >
                      {m.name} &middot; {m.department} {m.level} &middot; CGPA{" "}
                      {m.cgpa}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      <CgpaCalculator open={calcOpen} onClose={() => setCalcOpen(false)} />
    </section>
  );
}
