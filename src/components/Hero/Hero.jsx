import React from 'react'
import Logo from '../../assets/logo.svg'

const Hero = () => {
  return (
    <>
    <header className='w-full '>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img type='button'   src={Logo} alt="Github " />
        <button className='black_btn' onClick={()=> window.open("https://github.com/rajan7227/Summify", "_blank")} >GitHub</button>
      </nav>
      <h1 className="head_text">Summarize Article <br className='max-md:hidden' /> with <span className='orange_gradient'>OpenAI GPT-4</span></h1>
      <h2 className='desc'>Simplify your reading with Summize, an open-source article summarizer
        that transforms lengthy articles into clear and concise summaries</h2>
    </header>
    </>
  )
}

export default Hero;