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

const iconBgColors = {
  sky: 'bg-sky-50',
  emerald: 'bg-emerald-50',
  orange: 'bg-orange-50',
  purple: 'bg-purple-50',
  blue: 'bg-blue-50',
  red: 'bg-red-50',
  amber: 'bg-amber-50',
  cyan: 'bg-cyan-50',
}

function TechnologyCard({ technology, isAdded, onAddToStack }) {
  const { name, category, description, icon, rating, difficulty, badge, badgeColor } = technology

  let buttonText
  let buttonStyle
  let cardBorder

  if (isAdded) {
    buttonText = '✓ Added to Stack'
    buttonStyle =
      'pointer-events-auto cursor-not-allowed border border-transparent bg-slate-100 text-slate-400 hover:border-red-400 hover:bg-slate-100'
    cardBorder = 'border-red-400'
  } else {
    buttonText = 'Add to Stack'
    buttonStyle = 'border-0 bg-[#0a0f1d] text-white hover:bg-slate-800'
    cardBorder = 'border-slate-100'
  }

  return (
    <div
      className={`card rounded-xl border bg-white p-4 font-inter shadow-xs lg:rounded-2xl lg:p-5 lg:font-sans lg:shadow-[0_2px_10px_-3px_rgba(0,0,0,0.05)] ${cardBorder}`}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div
            className={`flex size-10 items-center justify-center rounded-lg lg:bg-transparent ${iconBgColors[badgeColor] || iconBgColors.sky}`}
          >
            <img src={icon} alt={`${name} logo`} className="size-6 lg:size-7" />
          </div>

          <h3 className="text-base leading-5 font-bold text-slate-900 lg:hidden">{name}</h3>
        </div>
        <span
          className={`badge h-5 rounded-full px-2 text-[10.4px] font-bold lg:h-6 lg:px-2.5 lg:text-[11.5px] lg:font-semibold ${badgeColors[badgeColor] || badgeColors.sky}`}
        >
          {badge}
        </span>
      </div>

      <h3 className="mt-3 hidden text-lg font-bold text-slate-900 lg:block">{name}</h3>
      <p className="mt-2.5 text-xs leading-relaxed text-slate-600 lg:mt-1.5 lg:text-slate-500">{description}</p>

      <div className="mt-auto pt-2.5 lg:pt-4">
        <div className="flex items-center justify-between border-t border-slate-50 pt-3 lg:pt-2">
          <span className="rounded bg-slate-100/80 px-2 py-0.5 text-[11px] font-normal text-slate-600 lg:font-medium">
            {category}
          </span>
          <span className="text-[11px] font-normal text-slate-500 lg:font-medium">{difficulty}</span>
          <span className="flex items-center gap-1 text-[11px] font-normal text-amber-500 lg:font-semibold lg:text-slate-700">
            <svg viewBox="0 0 24 24" fill="currentColor" className="size-3 text-amber-400" aria-hidden="true">
              <path d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" />
            </svg>
            {rating}
          </span>
        </div>

        <button
          type="button"
          aria-disabled={isAdded}
          onClick={() => onAddToStack(technology)}
          className={`btn mt-2.5 h-9 w-full rounded-lg text-xs font-normal shadow-none lg:mt-4 lg:font-medium ${buttonStyle}`}
        >
          {buttonText}
        </button>
      </div>
    </div>
  )
}

export default TechnologyCard
