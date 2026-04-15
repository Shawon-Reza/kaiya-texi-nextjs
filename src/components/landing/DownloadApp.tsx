"use client"
import Image from 'next/image'
import TextType from '../ui/TextType'
import { FaAppStore, FaGooglePlay } from 'react-icons/fa6'



const DownloadApp = () => {
    return (
        <section className=" px-4 sm:px-6 lg:px-8 py-5">

            {/* Main Container */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center bg-[#F5F5F5] rounded-3xl p-6 md:p-12 relative">

                {/* Left Content Section */}
                <div className="flex flex-col justify-center space-y-6 md:space-y-8">

                    {/* Heading */}
                    <div>
                        {/* <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                            Book Faster on the App
                        </h2> */}
                        <TextType
                            className='text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 dark:text-white max-w-2xl pb-2'
                            text={[
                                'Book Faster on the App',
                                'Drive with Kaiya Taxi',
                                'Instant booking, zero hassle',
                            ]}
                            typingSpeed={75}
                            pauseDuration={3000}
                            showCursor
                            cursorCharacter="_"
                            deletingSpeed={50}
                            variableSpeed={false}
                            cursorBlinkDuration={0.5}
                            onSentenceComplete={() => { }}
                        />
                        <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                            Save time with one-tap booking, live tracking, and instant updates for your airport rides.
                        </p>
                    </div>

                    {/* Download Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        {/* App Store Button */}
                        <button
                            className="group flex items-center justify-center gap-3 px-6 py-4 
    bg-gray-200 rounded-lg 
    transition-all duration-700 ease-out
    hover:bg-gray-100 hover:shadow-lg hover:-translate-y-1"
                        >
                            <FaGooglePlay
                                color='green'
                                className="text-lg transition-transform duration-700 ease-out 
      group-hover:scale-110"
                            />

                            <div className="text-left">
                                <p className="text-xs text-gray-500 transition-all duration-700 ease-out 
      group-hover:text-gray-700">
                                    Get on App Store
                                </p>
                            </div>
                        </button>

                        {/* Google Play Button */}
                        <button
                            className="group flex items-center justify-center gap-3 px-6 py-4 
    bg-gray-200 rounded-lg 
    transition-all duration-700 ease-out
    hover:bg-gray-100 hover:shadow-lg hover:-translate-y-1"
                        >
                            <FaAppStore
                                color='green'
                                className="text-lg transition-transform duration-700 ease-out 
      group-hover:scale-110"
                            />

                            <div className="text-left">
                                <p className="text-xs text-gray-500 transition-all duration-700 ease-out 
      group-hover:text-gray-700">
                                    Get on Play Store
                                </p>
                            </div>
                        </button>
                    </div>
                </div>

                {/* Right Phone Images Section */}
                <div className="md:absolute right-5 bottom-4 flex justify-center items-center ">
                    <Image
                        src="/images/phones.png"
                        alt="Kaiya App Mockup"
                        width={400}
                        height={800}
                    // className="w-64 sm:w-72 md:w-80 lg:w-96 object-contain animate-float"
                    />

                </div>
            </div>

        </section>
    )
}

export default DownloadApp