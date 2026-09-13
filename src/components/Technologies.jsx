import { useEffect, useState } from 'react'
import TechnologyCard from './TechnologyCard.jsx'

function Technologies() {
  const [technologies, setTechnologies] = useState([])

  useEffect(() => {
    const loadTechnologies = async () => {
      const res = await fetch('/technologies.json')
      const data = await res.json()
      setTechnologies(data)
    }

    loadTechnologies()
  }, [])

  return (
    <section className="mt-28 pb-32">
      <h2 className="font-inter text-4xl font-extrabold tracking-tight text-slate-900">
        Explore the <span className="text-[#db2777]">Technologies</span>
      </h2>
      <p className="mt-2 text-slate-500">Pick one technology per category to build your ideal stack.</p>

      <div className="mt-10 grid grid-cols-12 gap-8">
        {/* Cards take 9 of 12 columns (the other 3 are for Your Stack later) */}
        <div className="col-span-9 grid grid-cols-3 gap-5">
          {technologies.map((technology) => (
            <TechnologyCard key={technology.id} technology={technology} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Technologies
