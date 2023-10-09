import gdscLogo from './assets/gdsclogo.svg'
import insta from './assets/insta.svg'
import gitl from './assets/gitl.svg'
import linkd from './assets/linkedin.svg'


export let FooterComp = () => {
  return (
    <div>
      <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
        <section className='flex flex-col md:flex-row gap-4 items-center justify-center'>
          <img src={gdscLogo} width={70} alt="" />
          <p className='text-3xl'>Google Developer Student Clubs</p>
        </section>
        <nav className="grid grid-flow-col gap-4">
          <a className='hover:text-white font-semibold' href='https://gdscpesu.com/' target='_blank'>Official Webpage</a> 
          <a className='hover:text-white font-semibold' href='https://github.com/dscpesu/resume-latex' target='_blank'>Visit Repository</a> 
        </nav> 
        <div className=' footer-title'>
          Socials
        </div>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a href='https://www.instagram.com/gdscpesu.rr/' target='_blank'>
              <img src={insta} width={24} alt="" />
            </a> 

            <a href="https://github.com/dscpesu" target='_blank'>
              <img src={gitl} width={24} alt="" />
            </a>

            <a href='https://www.linkedin.com/company/gdscpesu/' target='_blank'>
              <img src={linkd} width={24} alt="" />
            </a>
          </div>
        </nav> 
        <div>
          <p>Found bugs or want a new feature? raise an issue/contribute by clicking <a target='_blank' href="https://github.com/dscpesu/resume-latex" className='link font-semibold text-primary-focus'>here</a> < br className='hidden md:block' /> or drop a mail to <span className=' tracking-wider font-semibold'>dsc@pes.edu</span> </p>
        </div>
        <aside>
        <p className='font-mono'>This website is licensed under the MIT License.<br/>Copyright (c) 2023 GDSC PESU</p>
        </aside>
      </footer>

    </div>
  )
}