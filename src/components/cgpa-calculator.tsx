"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Plus, Trash2, Calculator } from "lucide-react";

type Course = {
  id: string;
  code: string;
  grade: string;
  credits: number;
};

type Semester = {
  id: string;
  name: string;
  courses: Course[];
};

const GRADE_POINTS: Record<string, number> = {
  A: 4.0,
  AB: 3.5,
  B: 3.25,
  BC: 3.0,
  C: 2.75,
  CD: 2.5,
  D: 2.25,
  E: 2.0,
  F: 0.0,
};

const STORAGE_KEY = "sucf_cgpa_calculator_v1";

function makeCourse(code: string, grade: string, credits: number): Course {
  return { id: `c_${Math.random().toString(36).slice(2)}`, code, grade, credits };
}

function defaultSemesters(): Semester[] {
  return [
    {
      id: "sem_1",
      name: "Semester 1",
      courses: [makeCourse("e.g. MET 111", "A", 3)],
    },
  ];
}

function classify(cgpa: number) {
  if (cgpa >= 3.5)
    return { label: "Distinction", tone: "text-green-700 bg-green-100 border-green-700/20" };
  if (cgpa >= 3.0)
    return { label: "Upper Credit", tone: "text-green-600 bg-green-100 border-green-600/20" };
  if (cgpa >= 2.5)
    return { label: "Lower Credit", tone: "text-ink-800 bg-paper-200 border-black/10" };
  if (cgpa >= 2.0)
    return { label: "Pass", tone: "text-slate-600 bg-paper-200 border-black/10" };
  return { label: "Needs Improvement", tone: "text-red-700 bg-red-50 border-red-200" };
}

export function CgpaCalculator({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [semesters, setSemesters] = useState<Semester[]>(defaultSemesters());
  const [activeId, setActiveId] = useState("sem_1");

  useEffect(() => {
    try {
      const cached = window.localStorage.getItem(STORAGE_KEY);
      if (cached) {
        const parsed = JSON.parse(cached) as Semester[];
        if (Array.isArray(parsed) && parsed.length) {
          setSemesters(parsed);
          setActiveId(parsed[0].id);
        }
      }
    } catch {
      // ignore malformed cache
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const id = setTimeout(() => {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(semesters));
    }, 300);
    return () => clearTimeout(id);
  }, [semesters]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const active = semesters.find((s) => s.id === activeId) ?? semesters[0];

  const gpaOf = (sem: Semester) => {
    let qp = 0;
    let credits = 0;
    sem.courses.forEach((c) => {
      qp += (GRADE_POINTS[c.grade] ?? 0) * c.credits;
      credits += c.credits;
    });
    return credits === 0 ? 0 : qp / credits;
  };

  const cgpa = (() => {
    let qp = 0;
    let credits = 0;
    semesters.forEach((sem) =>
      sem.courses.forEach((c) => {
        qp += (GRADE_POINTS[c.grade] ?? 0) * c.credits;
        credits += c.credits;
      })
    );
    return credits === 0 ? 0 : qp / credits;
  })();

  const result = classify(cgpa);

  const addSemester = () => {
    const next: Semester = {
      id: `sem_${Date.now()}`,
      name: `Semester ${semesters.length + 1}`,
      courses: [],
    };
    setSemesters((s) => [...s, next]);
    setActiveId(next.id);
  };

  const removeSemester = (id: string) => {
    if (semesters.length === 1) return;
    const updated = semesters.filter((s) => s.id !== id);
    setSemesters(updated);
    if (activeId === id) setActiveId(updated[0].id);
  };

  const addCourse = () => {
    setSemesters((all) =>
      all.map((s) =>
        s.id === activeId
          ? { ...s, courses: [...s.courses, makeCourse("", "A", 3)] }
          : s
      )
    );
  };

  const updateCourse = (courseId: string, patch: Partial<Course>) => {
    setSemesters((all) =>
      all.map((s) =>
        s.id === activeId
          ? {
              ...s,
              courses: s.courses.map((c) =>
                c.id === courseId ? { ...c, ...patch } : c
              ),
            }
          : s
      )
    );
  };

  const removeCourse = (courseId: string) => {
    setSemesters((all) =>
      all.map((s) =>
        s.id === activeId
          ? { ...s, courses: s.courses.filter((c) => c.id !== courseId) }
          : s
      )
    );
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="glass-card relative flex max-h-[85vh] w-full max-w-2xl flex-col overflow-hidden rounded-3xl !bg-white"
          >
            <div className="flex items-center justify-between border-b border-black/8 px-6 py-4">
              <div className="flex items-center gap-2.5">
                <Calculator className="h-4 w-4 text-green-700" />
                <h3 className="font-display text-[21px] text-ink-950">
                  CGPA Calculator
                </h3>
              </div>
              <button
                onClick={onClose}
                aria-label="Close"
                className="rounded-full p-1.5 text-slate-400 transition-colors hover:bg-black/5 hover:text-ink-950"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="overflow-y-auto px-6 py-5">
              <p className="mb-5 text-[17px] text-slate-600">
                Standard NBTE 4.0 grading scale. Calculations happen in your
                browser and are saved only on this device.
              </p>

              <div className="mb-4 flex flex-wrap items-center gap-2">
                {semesters.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setActiveId(s.id)}
                    className={`rounded-full px-3.5 py-1.5 text-[15px] font-medium transition-colors ${
                      s.id === activeId
                        ? "bg-green-700 text-white"
                        : "bg-paper-200 text-slate-600 hover:text-ink-950"
                    }`}
                  >
                    {s.name}
                  </button>
                ))}
                <button
                  onClick={addSemester}
                  className="flex items-center gap-1 rounded-full border border-dashed border-black/15 px-3.5 py-1.5 text-[15px] text-slate-600 hover:border-green-700 hover:text-green-700"
                >
                  <Plus className="h-3.5 w-3.5" /> Semester
                </button>
              </div>

              <div className="space-y-2">
                {active?.courses.map((c) => (
                  <div
                    key={c.id}
                    className="flex items-center gap-2 rounded-xl border border-black/8 bg-paper-100 p-2.5"
                  >
                    <input
                      value={c.code}
                      onChange={(e) =>
                        updateCourse(c.id, { code: e.target.value })
                      }
                      placeholder="Course code"
                      className="min-w-0 flex-1 rounded-lg border border-black/10 bg-white px-2.5 py-1.5 text-[15px] text-ink-800 outline-none focus-visible:border-green-700"
                    />
                    <select
                      value={c.grade}
                      onChange={(e) =>
                        updateCourse(c.id, { grade: e.target.value })
                      }
                      className="rounded-lg border border-black/10 bg-white px-2 py-1.5 text-[15px] text-ink-800 outline-none focus-visible:border-green-700"
                    >
                      {Object.keys(GRADE_POINTS).map((g) => (
                        <option key={g} value={g}>
                          {g}
                        </option>
                      ))}
                    </select>
                    <input
                      type="number"
                      min={1}
                      max={6}
                      value={c.credits}
                      onChange={(e) =>
                        updateCourse(c.id, {
                          credits: Number(e.target.value) || 1,
                        })
                      }
                      className="w-16 rounded-lg border border-black/10 bg-white px-2 py-1.5 text-[15px] text-ink-800 outline-none focus-visible:border-green-700"
                    />
                    <button
                      onClick={() => removeCourse(c.id)}
                      aria-label="Remove course"
                      className="shrink-0 rounded-lg p-1.5 text-slate-400 hover:bg-red-50 hover:text-red-700"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
                ))}
                <button
                  onClick={addCourse}
                  className="flex w-full items-center justify-center gap-1.5 rounded-xl border border-dashed border-black/15 py-2.5 text-[15px] text-slate-600 hover:border-green-700 hover:text-green-700"
                >
                  <Plus className="h-3.5 w-3.5" /> Add course
                </button>
              </div>

              {semesters.length > 1 && (
                <button
                  onClick={() => removeSemester(activeId)}
                  className="mt-3 text-[15px] text-red-700 hover:underline"
                >
                  Remove {active?.name}
                </button>
              )}

              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-black/8 bg-paper-100 p-4 text-center">
                  <p className="font-mono text-[15px] uppercase tracking-[0.15em] text-slate-400">
                    Semester GPA
                  </p>
                  <p className="mt-1 font-display text-[35px] text-ink-950">
                    {active ? gpaOf(active).toFixed(2) : "0.00"}
                  </p>
                </div>
                <div className="rounded-2xl border border-green-700/20 bg-green-100 p-4 text-center">
                  <p className="font-mono text-[15px] uppercase tracking-[0.15em] text-green-700">
                    Cumulative CGPA
                  </p>
                  <p className="mt-1 font-display text-[35px] text-green-700">
                    {cgpa.toFixed(2)}
                  </p>
                </div>
              </div>

              <div
                className={`mt-4 rounded-full border px-4 py-2 text-center text-[15px] font-semibold ${result.tone}`}
              >
                {result.label}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
