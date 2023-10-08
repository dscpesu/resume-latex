import gdscLogo from '/gdsclogo.svg'
export let HeaderComp = () => {
  return (
    <nav className='flex flex-col md:flex-row items-center gap-y-4 md:min-w-full p-2 md:p-10 justify-evenly'>
        <div className='p-4'>
          <a className='flex items-center gap-x-5' href="https://gdscpesu.com/" target="_blank" rel="noopener noreferrer">
            <img width={70} src={gdscLogo} alt="Logo" />
            <span className='text-xl font-semibold'>GDSC PESU</span>
          </a>
        </div>
        <div className='p-4 m-4 md:m-0 border-b-2 text-2xl border-purple-500'>
          <span className=''>LaTeX Resume Generator</span>
        </div>
    </nav>
  )
}