import { Suspense, useState } from 'react'
import { toast } from 'react-toastify'
import TechnologyList from './TechnologyList.jsx'
import YourStack from './YourStack.jsx'

const loadTechnologies = async () => {
  const res = await fetch('/technologies.json')
  const data = await res.json()
  return data
}

// Created once, outside the component, so every render uses the same promise
const technologiesPromise = loadTechnologies()

function Technologies() {
  const [stack, setStack] = useState([])

  const handleAddToStack = (technology) => {
    const alreadyAdded = stack.some((item) => item.id === technology.id)

    if (alreadyAdded) {
      toast.warning(`${technology.name} is already in your stack!`)
    } else {
      setStack([...stack, technology])
      toast.success(`${technology.name} added to your stack!`)
    }
  }

  const handleRemoveFromStack = (technology) => {
    const remainingStack = stack.filter((item) => item.id !== technology.id)
    setStack(remainingStack)
    toast.info(`${technology.name} removed from your stack.`)
  }

  const handleRemoveAll = () => {
    setStack([])
    toast.info('All technologies removed from your stack.')
  }

  return (
    <section className="mt-28 pb-32">
      <h2 className="font-inter text-4xl font-extrabold tracking-tight text-slate-900">
        Explore the <span className="text-[#db2777]">Technologies</span>
      </h2>
      <p className="mt-2 text-slate-500">Pick one technology per category to build your ideal stack.</p>

      <div className="mt-10 grid grid-cols-12 gap-8">
        <div className="col-span-9 grid grid-cols-3 gap-5">
          <Suspense fallback={<p className="col-span-3 py-24 text-center text-slate-500">Loading technologies...</p>}>
            <TechnologyList technologiesPromise={technologiesPromise} stack={stack} onAddToStack={handleAddToStack} />
          </Suspense>
        </div>

        <YourStack stack={stack} onRemoveFromStack={handleRemoveFromStack} onRemoveAll={handleRemoveAll} />
      </div>
    </section>
  )
}

export default Technologies
