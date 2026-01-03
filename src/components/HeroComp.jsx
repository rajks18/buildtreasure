import { faArrowRight, faFileCode, faHandBackFist, faLaptop } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import asset2 from "../assets/asset 2.svg"
import asset3 from "../assets/asset 3.png";
import React from 'react'

const HeroComp = () => {
  return (
    <div>
        <main>
            <div id="hero" className='min-h-screen bg-linear-to-b from-purple-50 via-orange-50 to-transparent'>
                {/* from-blue-400 to-purple-600 */}
                <div id="hero-container" className='max-w-4xl mx-auto px-6 pt-6 pb-32 flex flex-col sm:items-center sm:text-center sm:pt-12'>
                    {/* VERSION BOX */}
                    <div id="version-text" className='my-6 flex gap-2 items-center border border-yellow-300 bg-yellow-50 rounded-lg px-3 py-1 w-fit shadow-md hover:shadow-lg hover:-translate-y-1 transition group'>
                        <div className='w-2 h-2 bg-yellow-400 rounded-full border border-yellow-600'></div>
                        <p className='font-display font-mono text-yellow-600'>v0.21.1: <span className='text-yellow-800'>Find-in-page bug fixes</span></p>
                        <FontAwesomeIcon icon={faArrowRight} className='text-yellow-600 group-hover:translate-x-1 transition duration-300' />
                    </div>

                    <div id="hero-features" className='hidden sm:flex gap-8 my-6'>
                        <div className='flex justify-center items-center gap-2 text-gray-500'>
                            <FontAwesomeIcon icon={faFileCode} className='text-sm'/>
                            <p>Code Optional</p>
                        </div>
                        <div className='flex justify-center items-center gap-2 text-gray-500'>
                            <FontAwesomeIcon icon={faHandBackFist} className='text-sm'/>
                            <p>Drag & Drop Builder</p>
                        </div>
                        <div className='flex justify-center items-center gap-2 text-gray-500'>
                            <FontAwesomeIcon icon={faLaptop} className='text-sm'/>
                            <p>Windows, Mac, Linux</p>
                        </div>
                    </div>

                    <h1 className='text-4xl font-semibold leading-snug mt-4 sm:text-7xl sm:leading-normal'>Web app to desktop app in minutes</h1>
                    <p className='text-xl mt-4 sm:text-2xl sm:mt-8 text-gray-800'>Take your web app codebase and transform it into a cross platform desktop app with native functionality.</p>
                    <div id="buttons-container" className='mt-12 flex flex-col sm:flex-row gap-4'>
                        <button className='bg-primary text-white font-semibold px-8 py-3 rounded-lg hover:opacity-90 '>Downlaod Now</button>
                        <button className='bg-white font-semibold px-8 py-3 rounded-lg border border-gray-400 hover:border-gray-800'>Read Docs</button>
                    </div>
                </div>

            </div>

            <div id="companies-container">
                <div id='companies-title' className='flex justify-center gap-2 '>
                <img className='translate-y-2' src={asset2} alt=""/>
                <span>APPS POWERED BY TODESKTOP</span>
                <img className='translate-y-2 -scale-x-100' src={asset2} alt=""/>
            </div>
            <div id="companies-lines-group" className='flex flex-col'>
                <div id="line1" className='flex gap-4 w-screen'>
                    <div className='flex flex-col min-w-24 min-h-24 items-center justify-center rounded-xl border border-gray-300'>
                        <img className='h-12 w-12 md:h-16 md:w-16' src={asset3} alt="" />
                        <span className='text-[12px] md:text-[16px] font-semibold'>Unbounce</span>
                    </div>
                    <div className='flex flex-col min-w-24 min-h-24 items-center justify-center rounded-xl border border-gray-300'>
                        <img className='h-12 w-12 md:h-16 md:w-16' src={asset3} alt="" />
                        <span className='text-[12px] md:text-[16px] font-semibold'>Unbounce</span>
                    </div>
                </div>
                <div id="line1" className='flex gap-4 w-screen'>
                    <div className='flex flex-col min-w-24 min-h-24 items-center justify-center rounded-xl border border-gray-300'>
                        <img className='h-12 w-12 md:h-16 md:w-16' src={asset3} alt="" />
                        <span className='text-[12px] md:text-[16px] font-semibold'>Unbounce</span>
                    </div>
                    <div className='flex flex-col min-w-24 min-h-24 items-center justify-center rounded-xl border border-gray-300'>
                        <img className='h-12 w-12 md:h-16 md:w-16' src={asset3} alt="" />
                        <span className='text-[12px] md:text-[16px] font-semibold'>Unbounce</span>
                    </div>
                </div>
                <div id="line1" className='flex gap-4 w-screen'>
                    <div className='flex flex-col min-w-24 min-h-24 items-center justify-center rounded-xl border border-gray-300'>
                        <img className='h-12 w-12 md:h-16 md:w-16' src={asset3} alt="" />
                        <span className='text-[12px] md:text-[16px] font-semibold'>Unbounce</span>
                    </div>
                    <div className='flex flex-col min-w-24 min-h-24 items-center justify-center rounded-xl border border-gray-300'>
                        <img className='h-12 w-12 md:h-16 md:w-16' src={asset3} alt="" />
                        <span className='text-[12px] md:text-[16px] font-semibold'>Unbounce</span>
                    </div>
                </div>
            </div>
            </div>
            
            <div className='h-250'></div>
        </main>
    </div>
  )
}

export default HeroComp