
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion"

const FAQSection = () => {
    return (
        <section id="faq" className="scroll-mt-28 border-b border-zinc-200 py-12 sm:py-16 md:py-20 lg:py-28">
            <div className="mx-auto w-full px-3 sm:px-4 md:px-6 lg:px-8" style={{ maxWidth: '100%' }}>
                <div className="mx-auto max-w-7xl">
                    <h2 className="text-center text-2xl font-bold  text-zinc-900 sm:text-3xl md:text-4xl lg:text-5xl">
                        Frequently Asked Questions
                    </h2>

                    <div className="mx-auto mt-8 w-full max-w-xl lg:max-w-2xl xl:max-w-4xl 2xl:max-w-6xl sm:mt-10 md:mt-12 lg:mt-14 px-1 sm:px-0 " >
                        <Accordion type="single" collapsible defaultValue="item-1" className="w-full space-y-2 sm:space-y-3">

                            <AccordionItem value="item-1" className="border border-gray-300 rounded-2xl px-4 ">
                                <AccordionTrigger className="text-left text-sm sm:text-base md:text-lg py-3 sm:py-4 font-bold">
                                    Are you a registered company?
                                </AccordionTrigger>
                                <AccordionContent className="text-xs sm:text-sm md:text-base text-zinc-600 pb-3 sm:pb-4 border-t border-gray-300 pt-1 sm:pt-2">
                                    Yes, Kaiya Taxi is a fully licensed and insured transportation
                                    company operating legally under local transport regulations. All
                                    our drivers undergo background checks and professional training.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-2" className="border border-gray-300 rounded-2xl px-4">
                                <AccordionTrigger className="text-left text-sm sm:text-base md:text-lg py-3 sm:py-4 font-bold">
                                    Do you have English speaking drivers?
                                </AccordionTrigger>
                                <AccordionContent className="text-xs sm:text-sm md:text-base text-zinc-600 pb-3 sm:pb-4 border-t border-gray-300 pt-1 sm:pt-2">
                                    All our drivers speak fluent English and are trained in customer
                                    service. If you need assistance in other languages, we can arrange
                                    drivers speaking Bengali, Arabic, or other languages upon request.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-3" className="border border-gray-300 rounded-2xl px-4">
                                <AccordionTrigger className="text-left text-sm sm:text-base md:text-lg py-3 sm:py-4 font-bold">
                                    How can I change my booking?
                                </AccordionTrigger>
                                <AccordionContent className="text-xs sm:text-sm md:text-base text-zinc-600 pb-3 sm:pb-4 border-t border-gray-300 pt-1 sm:pt-2">
                                    You can modify your booking up to 60 minutes before your scheduled
                                    pickup through the mobile app or by calling support. Changes include
                                    pickup location, destination, vehicle type, and scheduled time.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-4" className="border border-gray-300 rounded-2xl px-4">
                                <AccordionTrigger className="text-left text-sm sm:text-base md:text-lg py-3 sm:py-4 font-bold">
                                    Do you provide child seats?
                                </AccordionTrigger>
                                <AccordionContent className="text-xs sm:text-sm md:text-base text-zinc-600 pb-3 sm:pb-4 border-t border-gray-300 pt-1 sm:pt-2">
                                    Yes, we provide certified child car seats for various age groups at
                                    no additional cost. Please request child seat availability when
                                    booking, and our drivers will ensure proper installation.
                                </AccordionContent>
                            </AccordionItem>

                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FAQSection