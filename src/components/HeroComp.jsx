import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const HeroComp = () => {
  return (
    <div>
        <main>
            <div id="hero" className='min-h-screen bg-linear-to-br from-purple-50 via-orange-50 to-transparent'>
                {/* from-blue-400 to-purple-600 */}
                <div id="hero-container" className='max-w-4xl mx-auto px-6 pb-32 flex flex-col'>
                    <div id="version-text" className='my-6 flex gap-2 items-center border border-yellow-300 bg-yellow-50 rounded-lg px-3 py-1 w-fit shadow-md hover:shadow-lg hover:-translate-y-1 transition group'>
                        <div className='w-2 h-2 bg-yellow-400 rounded-full border border-yellow-600'></div>
                        <p className='font-display font-mono text-yellow-600'>v0.21.1: <span className='text-yellow-800'>Find-in-page bug fixes</span></p>
                        <FontAwesomeIcon icon={faArrowRight} className='text-yellow-600 group-hover:translate-x-1 transition duration-300' />
                    </div>
                </div>

            </div>
        </main>
    </div>
  )
}

export default HeroComp