const badgeColors = {
  sky: 'border-sky-100 bg-sky-50 text-sky-500',
  emerald: 'border-emerald-100 bg-emerald-50 text-emerald-600',
  orange: 'border-orange-100 bg-orange-50 text-orange-600',
  purple: 'border-purple-100 bg-purple-100 text-purple-700',
  blue: 'border-blue-100 bg-blue-50 text-blue-600',
  red: 'border-red-100 bg-red-50 text-red-600',
  amber: 'border-amber-100 bg-amber-50 text-amber-600',
  cyan: 'border-cyan-100 bg-cyan-50 text-cyan-600',
}

function TechnologyCard({ technology }) {
  const { name, category, description, icon, rating, difficulty, badge, badgeColor } = technology

  return (
    <div className="card rounded-2xl border border-slate-100 bg-white p-5 shadow-[0_2px_10px_-3px_rgba(0,0,0,0.05)]">
      <div className="flex items-start justify-between">
        <div className="flex size-10 items-center justify-center">
          <img src={icon} alt={`${name} logo`} className="size-7" />
        </div>
        <span
          className={`badge h-6 rounded-full px-2.5 text-[11.5px] font-semibold ${badgeColors[badgeColor] || badgeColors.sky}`}
        >
          {badge}
        </span>
      </div>

      <h3 className="mt-3 text-lg font-bold text-slate-900">{name}</h3>
      <p className="mt-1.5 text-xs leading-relaxed text-slate-500">{description}</p>

      <div className="mt-auto pt-4">
        <div className="flex items-center justify-between border-t border-slate-50 pt-2">
          <span className="rounded bg-slate-100/80 px-2 py-0.5 text-[11px] font-medium text-slate-600">
            {category}
          </span>
          <span className="text-[11px] font-medium text-slate-500">{difficulty}</span>
          <span className="flex items-center gap-1 text-[11px] font-semibold text-slate-700">
            <svg viewBox="0 0 24 24" fill="currentColor" className="size-3 text-amber-400" aria-hidden="true">
              <path d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" />
            </svg>
            {rating}
          </span>
        </div>

        <button
          type="button"
          className="btn mt-4 h-9 w-full rounded-lg border-0 bg-[#0a0f1d] text-xs font-medium text-white shadow-none hover:bg-slate-800"
        >
          Add to Stack
        </button>
      </div>
    </div>
  )
}

export default TechnologyCard
