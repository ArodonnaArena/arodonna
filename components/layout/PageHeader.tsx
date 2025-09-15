type Props = { title: string; subtitle?: string }

export default function PageHeader({ title, subtitle }: Props) {
  return (
    <div className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 md:p-10 mb-8">
      {/* Animated background */}
      <div className="pointer-events-none absolute inset-0 -z-10 gradient-hero animate-gradient" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-[0.06]" />

      <div className="relative text-center space-y-2">
        <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight">
          <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#fff_0%,#FFDA44_50%,#fff_100%)] bg-[length:200%_auto] animate-gradient-text">{title}</span>
        </h1>
        {subtitle && <p className="text-sm md:text-base text-brand-neutral">{subtitle}</p>}
      </div>
    </div>
  )
}