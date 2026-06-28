'use client';

export default function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="rounded-full border border-ink/15 bg-white px-5 py-3 text-sm font-bold text-ink transition hover:-translate-y-0.5 hover:border-teal hover:text-teal"
    >
      طباعة / حفظ PDF
    </button>
  );
}
