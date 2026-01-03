import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const HeroComp = () => {
  return (
    <div>
        <main>
            <div id="hero" className='min-h-screen bg-linear-to-br from-purple-50 via-orange-50 to-transparent'>
                {/* from-blue-400 to-purple-600 */}
                <div id="hero-container" className='max-w-4xl mx-auto px-6 pt-6 pb-32 flex flex-col sm:items-center sm:text-center'>
                    {/* VERSION BOX */}
                    <div id="version-text" className='my-6 flex gap-2 items-center border border-yellow-300 bg-yellow-50 rounded-lg px-3 py-1 w-fit shadow-md hover:shadow-lg hover:-translate-y-1 transition group'>
                        <div className='w-2 h-2 bg-yellow-400 rounded-full border border-yellow-600'></div>
                        <p className='font-display font-mono text-yellow-600'>v0.21.1: <span className='text-yellow-800'>Find-in-page bug fixes</span></p>
                        <FontAwesomeIcon icon={faArrowRight} className='text-yellow-600 group-hover:translate-x-1 transition duration-300' />
                    </div>

                    <h1 className='text-4xl font-semibold leading-snug mt-4'>Web app to desktop app in minutes</h1>
                    <p className='text-xl mt-4'>Take your web app codebase and transform it into a cross platform desktop app with native functionality.</p>
                    <div id="buttons-container" className='mt-12 flex flex-col sm:flex-row gap-4'>
                        <button className='bg-primary text-white font-semibold px-8 py-3 rounded-lg hover:opacity-90 '>Downlaod Now</button>
                        <button className='bg-white font-semibold px-8 py-3 rounded-lg border border-gray-400 hover:border-gray-800'>Read Docs</button>
                    </div>
                </div>

            </div>
        </main>
    </div>
  )
}

export default HeroComp