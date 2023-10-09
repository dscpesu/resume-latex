import gdscLogo from '/gdsclogo.svg';
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
           <a target='_blank' href="https://github.com/dscpesu/resume-latex" className='font-semibold flex text-primary hover:text-secondary items-center p-2'>
             <p className='text-xl'>Leave a Star!</p>
              <svg width="24" height="24" viewBox="0 0 1024 1024" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M923.2 429.6H608l-97.6-304-97.6 304H97.6l256 185.6L256 917.6l256-187.2 256 187.2-100.8-302.4z" fill="#FAD97F" /><path d="M1024 396H633.6L512 21.6 390.4 396H0l315.2 230.4-121.6 374.4L512 770.4l316.8 232L707.2 628 1024 396zM512 730.4l-256 187.2 97.6-302.4-256-185.6h315.2l97.6-304 97.6 304h315.2l-256 185.6L768 917.6l-256-187.2z" fill="" /></svg>
            </a>
        </div>
    </nav>
  )
}