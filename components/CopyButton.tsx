'use client';

export default function CopyButton({ text, label = 'نسخ القائمة' }: { text: string; label?: string }) {
  async function copyText() {
    try {
      await navigator.clipboard.writeText(text);
      alert('تم نسخ القائمة بنجاح');
    } catch {
      alert('تعذر النسخ تلقائيًا. يمكنك تحديد النص ونسخه يدويًا.');
    }
  }

  return (
    <button
      type="button"
      onClick={copyText}
      className="rounded-full bg-ink px-5 py-3 text-sm font-bold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-teal"
    >
      {label}
    </button>
  );
}
