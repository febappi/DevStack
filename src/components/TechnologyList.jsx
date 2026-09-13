import { use } from 'react'
import TechnologyCard from './TechnologyCard.jsx'

function TechnologyList({ technologiesPromise, stack, onAddToStack }) {
  const technologies = use(technologiesPromise)

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
