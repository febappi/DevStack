function YourStack({ stack, onRemoveFromStack, onRemoveAll }) {
  let countText
  let content

  if (stack.length === 0) {
    countText = 'No technologies selected yet.'
    content = (
      <div className="mt-1 rounded-xl border border-dashed border-slate-200 p-6 text-center text-xs text-slate-400">
        Your stack is empty.
      </div>
    )
  } else {
    countText = `${stack.length} Technology Selected`
    content = (
      <>
        <ul className="mt-1 space-y-1">
          {stack.map((technology) => (
            <li
              key={technology.id}
              className="flex h-[50px] items-center gap-2 rounded-lg border border-slate-200 px-2.5"
            >
              <img src={technology.icon} alt={`${technology.name} logo`} className="size-7" />
              <div className="flex-1">
                <p className="text-[10px] leading-tight font-bold text-slate-900">{technology.name}</p>
                <p className="text-[6px] leading-tight font-bold text-slate-400">{technology.category}</p>
              </div>
              <button
                type="button"
                aria-label={`Remove ${technology.name}`}
                onClick={() => onRemoveFromStack(technology)}
                className="flex size-6 cursor-pointer items-center justify-center text-slate-400 hover:text-red-500"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={onRemoveAll}
          className="btn mt-12 mb-3.5 h-7.5 w-full rounded-lg border border-red-200 bg-white font-inter text-sm font-semibold text-red-600 shadow-none hover:bg-red-50"
        >
          Remove All
        </button>
      </>
    )
  }

  return (
    <aside className="sticky top-28 col-span-3 self-start rounded-2xl border border-slate-100 bg-white p-5 shadow-xs">
      <h3 className="font-bold text-slate-900">Your Stack</h3>
      <p className="mt-1 pb-3 text-xs text-slate-400">{countText}</p>
      {content}
    </aside>
  )
}

export default YourStack
