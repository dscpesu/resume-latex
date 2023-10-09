import gdscLogo from './assets/gdsclogo.svg'
import gitLogo from './assets/gitl.svg'
import './Header.css'

export let HeaderComp = () => {
  return (
    <nav style={{backgroundColor : "#0F1729"}} className='flex flex-col md:flex-row items-center gap-y-4 md:min-w-full p-2 md:p-10 justify-between md:sticky md:top-0'>
        <div className='p-2'>
          <a className='flex items-center gap-x-5' href="https://gdscpesu.com/" target="_blank" rel="noopener noreferrer">
            <img width={70} src={gdscLogo} alt="Logo" />
            <span className='text-xl font-semibold'>GDSC PESU</span>
          </a>
        </div>
        <div className='p-4 m-2 border-b-2 text-2xl border-purple-500 md:absolute md:left-1/2 md:adjust'>
          <span>LaTeX Resume Generator</span>
        </div>
        <div className=''>
          <a target='_blank' href="https://github.com/dscpesu/resume-latex" className=' flex items-center p-2 font-medium space-x-2'>
            <p className='text-xl'>Leave a Star</p> 
            <img src={gitLogo} width={24} alt="" />


          </a>
        </div>
    </nav>
  )
}