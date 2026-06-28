import CopyButton from '@/components/CopyButton';
import {
  checklistText,
  documents,
  faq,
  guideMeta,
  importantNotes,
  norwaySteps,
  quickPaths,
  specialCases,
  syriaSteps,
  type Step
} from '@/data/guide';

function StepCard({ step, index }: { step: Step; index: number }) {
  return (
    <article className="glass-card rounded-[2rem] p-6 transition hover:-translate-y-1">
      <div className="mb-4 flex items-center justify-between gap-4">
        <span className="grid h-11 w-11 place-items-center rounded-2xl bg-ink text-lg font-black text-white">
          {index + 1}
        </span>
        {step.tag ? (
          <span className="rounded-full bg-teal/10 px-3 py-1 text-xs font-bold text-teal">{step.tag}</span>
        ) : null}
      </div>
      <h3 className="text-xl font-black text-ink">{step.title}</h3>
      <p className="mt-3 leading-8 text-slate-700">{step.description}</p>
      {step.bullets ? (
        <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-700">
          {step.bullets.map((bullet) => (
            <li key={bullet} className="flex gap-2">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-teal" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}

function SectionTitle({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className="mb-3 text-sm font-black tracking-wide text-teal">{eyebrow}</p>
      <h2 className="text-3xl font-black text-ink md:text-4xl">{title}</h2>
      <p className="mt-4 leading-8 text-slate-700">{description}</p>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <header className="no-print sticky top-0 z-50 border-b border-white/50 bg-white/70 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-8">
          <a href="#top" className="font-black text-ink">
            {guideMeta.appName}
          </a>
          <div className="hidden items-center gap-3 text-sm font-bold text-slate-700 md:flex">
            <a href="#norway" className="hover:text-teal">النرويج</a>
            <a href="#syria" className="hover:text-teal">سورية</a>
            <a href="#documents" className="hover:text-teal">الأوراق</a>
            <a href="#special-cases" className="hover:text-teal">الحالات الخاصة</a>
          </div>
          <a
            href={guideMeta.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-teal px-4 py-2 text-sm font-black text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-ink"
          >
            تواصل واتساب
          </a>
        </nav>
      </header>

      <section id="top" className="relative mx-auto max-w-7xl px-4 pb-16 pt-12 md:px-8 md:pb-24 md:pt-20">
        <div className="absolute -left-28 top-20 h-72 w-72 rounded-full bg-teal/20 blur-3xl" />
        <div className="absolute -right-28 top-48 h-72 w-72 rounded-full bg-ink/10 blur-3xl" />

        <div className="relative grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <div className="mb-5 inline-flex rounded-full border border-teal/20 bg-white/70 px-4 py-2 text-sm font-black text-teal shadow-sm">
              {guideMeta.preparedBy}
            </div>
            <h1 className="max-w-4xl text-4xl font-black leading-[1.25] text-ink md:text-6xl">
              دليل عملي لمعادلة الشهادات الجامعية في سورية
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-9 text-slate-700">
              تطبيق عربي مبسط يساعد الطلاب السوريين والخريجين من الخارج على فهم خطوات تجهيز الوثائق،
              التصديقات، الترجمة، والحالات الخاصة قبل مراجعة الجهات الرسمية.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#documents"
                className="rounded-full bg-ink px-6 py-3 font-black text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-teal"
              >
                ابدأ بقائمة الأوراق
              </a>
              <a
                href="#norway"
                className="rounded-full border border-ink/15 bg-white/70 px-6 py-3 font-black text-ink transition hover:-translate-y-0.5 hover:border-teal hover:text-teal"
              >
                مسار الشهادات النرويجية
              </a>
            </div>
          </div>

          <aside className="glass-card rounded-[2.5rem] p-6 md:p-8">
            <h2 className="text-2xl font-black text-ink">قبل أن تبدأ</h2>
            <div className="mt-5 space-y-3">
              {importantNotes.map((note) => (
                <div key={note} className="rounded-2xl border border-teal/10 bg-white/55 p-4 text-sm leading-7 text-slate-700">
                  {note}
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 md:px-8">
        <div className="grid gap-4 md:grid-cols-4">
          {quickPaths.map((path) => (
            <a
              href={path.href}
              key={path.title}
              className="glass-card rounded-[1.75rem] p-5 transition hover:-translate-y-1 hover:border-teal/40"
            >
              <h3 className="text-lg font-black text-ink">{path.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-700">{path.description}</p>
            </a>
          ))}
        </div>
      </section>

      <section id="norway" className="section-anchor mx-auto max-w-7xl px-4 py-16 md:px-8">
        <SectionTitle
          eyebrow="المسار الأول"
          title="إذا كانت شهادتك صادرة من النرويج"
          description="هذه الخطوات تلخص المسار العملي قبل الوصول إلى سورية: توثيق نرويجي، تصديق الخارجية النرويجية، ثم تصديق السفارة السورية في السويد."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {norwaySteps.map((step, index) => (
            <StepCard key={step.title} step={step} index={index} />
          ))}
        </div>
      </section>

      <section id="syria" className="section-anchor mx-auto max-w-7xl px-4 py-16 md:px-8">
        <SectionTitle
          eyebrow="المسار الثاني"
          title="بعد الوصول إلى سورية"
          description="ابدأ بالترجمة، ثم تصديق الترجمة والوثائق، ثم جهّز النسخ المطلوبة وقدّم ملف التعديل في وزارة التعليم العالي."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {syriaSteps.map((step, index) => (
            <StepCard key={step.title} step={step} index={index} />
          ))}
        </div>
      </section>

      <section id="documents" className="section-anchor mx-auto max-w-7xl px-4 py-16 md:px-8">
        <SectionTitle
          eyebrow="قائمة تحقق"
          title="الأوراق المطلوبة"
          description="استخدم هذه القائمة كمرجع أولي لتجهيز ملفك، ثم تحقق من المتطلبات النهائية حسب اختصاصك وبلد الدراسة."
        />
        <div className="mb-6 flex flex-wrap items-center justify-center gap-3 no-print">
          <CopyButton text={checklistText} />
          <button
            type="button"
            onClick={undefined}
            className="hidden rounded-full border border-ink/15 bg-white px-5 py-3 text-sm font-bold text-ink"
          >
            طباعة
          </button>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {documents.map((document) => (
            <label
              key={document.name}
              className="check-card glass-card flex cursor-pointer gap-4 rounded-[1.5rem] border p-5 transition hover:-translate-y-0.5"
            >
              <input type="checkbox" className="mt-1 h-5 w-5 accent-teal" />
              <span>
                <span className="block text-lg font-black text-ink">{document.name}</span>
                <span className="mt-2 inline-flex rounded-full bg-ink/5 px-3 py-1 text-xs font-bold text-ink">
                  {document.required} · {document.when}
                </span>
                <span className="mt-3 block leading-7 text-slate-700">{document.notes}</span>
              </span>
            </label>
          ))}
        </div>
      </section>

      <section id="special-cases" className="section-anchor mx-auto max-w-7xl px-4 py-16 md:px-8">
        <SectionTitle
          eyebrow="انتبه لهذه الحالات"
          title="الحالات الخاصة"
          description="بعض الملفات تحتاج وثائق إضافية، خاصة إذا درست في أكثر من جامعة، أو كانت شهادتك من لبنان، أو كان اختصاصك طبيًا."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {specialCases.map((item) => (
            <article key={item.title} className="glass-card rounded-[1.75rem] p-6">
              <h3 className="text-xl font-black text-ink">{item.title}</h3>
              <p className="mt-3 leading-7 text-slate-700">{item.summary}</p>
              <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-700">
                {item.items.map((bullet) => (
                  <li key={bullet} className="flex gap-2">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-teal" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16 md:px-8">
        <SectionTitle
          eyebrow="أسئلة شائعة"
          title="إجابات مختصرة"
          description="أسئلة تتكرر كثيرًا عند تجهيز ملف معادلة الشهادة."
        />
        <div className="space-y-4">
          {faq.map((item) => (
            <details key={item.question} className="glass-card rounded-[1.5rem] p-5">
              <summary className="cursor-pointer text-lg font-black text-ink">{item.question}</summary>
              <p className="mt-3 leading-8 text-slate-700">{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-20 md:px-8">
        <div className="glass-card rounded-[2rem] p-6 text-center md:p-10">
          <h2 className="text-2xl font-black text-ink">هل تحتاج مساعدة في فهم الخطوات؟</h2>
          <p className="mx-auto mt-3 max-w-2xl leading-8 text-slate-700">
            يمكنك التواصل مباشرة عبر واتساب لطرح سؤال حول ترتيب الأوراق أو فهم المسار المناسب لحالتك.
          </p>
          <a
            href={guideMeta.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex rounded-full bg-teal px-7 py-3 font-black text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-ink"
          >
            تواصل عبر واتساب
          </a>
        </div>
      </section>

      <footer className="border-t border-white/60 bg-ink px-4 py-8 text-center text-white md:px-8">
        <p className="font-black">{guideMeta.ownerLine}</p>
        <p className="mt-2 text-sm text-white/75">
          {guideMeta.appName} · {guideMeta.preparedBy} · آخر تحديث: {guideMeta.lastUpdated}
        </p>
        <p className="mt-3 text-xs leading-6 text-white/60">
          المعلومات إرشادية وقد تتغير. الرجاء مراجعة وزارة التعليم العالي والجهات الرسمية قبل تقديم أي معاملة.
        </p>
      </footer>
    </main>
  );
}
