import { Suspense, useState } from 'react'
import { toast } from 'react-toastify'
import TechnologyList from './TechnologyList.jsx'
import YourStack from './YourStack.jsx'

const loadTechnologies = async () => {
  try {
    const res = await fetch('/technologies.json')
    const data = await res.json()
    return data
  } catch (error) {
    // Bad JSON or network problem: return an empty list so the page does not go blank
    console.error('Could not load technologies:', error)
    return []
  }
}

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
    <section className="mt-8 pb-14 md:mt-14 md:pb-20 lg:mt-28 lg:pb-32">
      <h2 className="text-center font-inter text-2xl font-bold tracking-tight text-slate-900 md:text-3xl lg:text-left lg:text-4xl lg:font-extrabold">
        Explore the <span className="text-[#db2777]">Technologies</span>
      </h2>
      <p className="mt-1 text-center font-inter text-xs text-slate-500 md:mt-2 md:font-sans md:text-base lg:text-left">
        Pick one technology per category to build your ideal stack.
      </p>

      <div className="mt-5 grid grid-cols-1 gap-5 md:mt-8 lg:mt-10 lg:grid-cols-12 lg:gap-8">
        <div className="grid grid-cols-1 gap-3.5 md:grid-cols-2 md:gap-5 lg:col-span-9 xl:grid-cols-3">
          <Suspense
            fallback={<p className="py-24 text-center text-slate-500 md:col-span-2 xl:col-span-3">Loading technologies...</p>}
          >
            <TechnologyList technologiesPromise={technologiesPromise} stack={stack} onAddToStack={handleAddToStack} />
          </Suspense>
        </div>

        <YourStack stack={stack} onRemoveFromStack={handleRemoveFromStack} onRemoveAll={handleRemoveAll} />
      </div>
    </section>
  )
}

export default Technologies
