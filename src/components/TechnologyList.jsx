import { use } from 'react'
import TechnologyCard from './TechnologyCard.jsx'

function TechnologyList({ technologiesPromise, stack, onAddToStack }) {
  const technologies = use(technologiesPromise)

  if (technologies.length === 0) {
    return (
      <p className="py-24 text-center text-slate-500 md:col-span-2 xl:col-span-3">
        Could not load technologies. Please try again later.
      </p>
    )
  }

  return (
    <>
      {technologies.map((technology) => (
        <TechnologyCard
          key={technology.id}
          technology={technology}
          isAdded={stack.some((item) => item.id === technology.id)}
          onAddToStack={onAddToStack}
        />
      ))}
    </>
  )
}

export default TechnologyList
