
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion"

const FAQSection = () => {
    return (
        <section id="faq" className="scroll-mt-28 border-b border-zinc-200 bg-zinc-50 py-12 dark:border-zinc-700 dark:bg-zinc-950 sm:py-16 md:py-20 lg:py-28">
            <div className="mx-auto w-full px-3 sm:px-4 md:px-6 lg:px-8" style={{ maxWidth: '100%' }}>
                <div className="mx-auto max-w-7xl">
                    <h2 className="text-center text-2xl font-bold text-zinc-900 dark:text-zinc-100 sm:text-3xl md:text-4xl lg:text-5xl">
                        Frequently Asked Questions
                    </h2>

                    <div className="mx-auto mt-8 w-full max-w-xl lg:max-w-2xl xl:max-w-4xl 2xl:max-w-6xl sm:mt-10 md:mt-12 lg:mt-14 px-1 sm:px-0 " >
                        <Accordion type="single" collapsible defaultValue="item-1" className="w-full space-y-2 sm:space-y-3">

                            <AccordionItem value="item-1" className="rounded-2xl border border-gray-300 bg-white px-4 dark:border-zinc-700 dark:bg-zinc-900">
                                <AccordionTrigger className="py-3 text-left text-sm font-bold text-zinc-900 dark:text-zinc-100 sm:py-4 sm:text-base md:text-lg">
                                    Are you a registered company?
                                </AccordionTrigger>
                                <AccordionContent className="border-t border-gray-300 pb-3 pt-1 text-xs text-zinc-600 dark:border-zinc-700 dark:text-zinc-400 sm:pb-4 sm:pt-2 sm:text-sm md:text-base">
                                    Yes, Kaiya Taxi is a fully licensed and insured transportation
                                    company operating legally under local transport regulations. All
                                    our drivers undergo background checks and professional training.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-2" className="rounded-2xl border border-gray-300 bg-white px-4 dark:border-zinc-700 dark:bg-zinc-900">
                                <AccordionTrigger className="py-3 text-left text-sm font-bold text-zinc-900 dark:text-zinc-100 sm:py-4 sm:text-base md:text-lg">
                                    Do you have English speaking drivers?
                                </AccordionTrigger>
                                <AccordionContent className="border-t border-gray-300 pb-3 pt-1 text-xs text-zinc-600 dark:border-zinc-700 dark:text-zinc-400 sm:pb-4 sm:pt-2 sm:text-sm md:text-base">
                                    All our drivers speak fluent English and are trained in customer
                                    service. If you need assistance in other languages, we can arrange
                                    drivers speaking Bengali, Arabic, or other languages upon request.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-3" className="rounded-2xl border border-gray-300 bg-white px-4 dark:border-zinc-700 dark:bg-zinc-900">
                                <AccordionTrigger className="py-3 text-left text-sm font-bold text-zinc-900 dark:text-zinc-100 sm:py-4 sm:text-base md:text-lg">
                                    How can I change my booking?
                                </AccordionTrigger>
                                <AccordionContent className="border-t border-gray-300 pb-3 pt-1 text-xs text-zinc-600 dark:border-zinc-700 dark:text-zinc-400 sm:pb-4 sm:pt-2 sm:text-sm md:text-base">
                                    You can modify your booking up to 60 minutes before your scheduled
                                    pickup through the mobile app or by calling support. Changes include
                                    pickup location, destination, vehicle type, and scheduled time.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-4" className="rounded-2xl border border-gray-300 bg-white px-4 dark:border-zinc-700 dark:bg-zinc-900">
                                <AccordionTrigger className="py-3 text-left text-sm font-bold text-zinc-900 dark:text-zinc-100 sm:py-4 sm:text-base md:text-lg">
                                    Do you provide child seats?
                                </AccordionTrigger>
                                <AccordionContent className="border-t border-gray-300 pb-3 pt-1 text-xs text-zinc-600 dark:border-zinc-700 dark:text-zinc-400 sm:pb-4 sm:pt-2 sm:text-sm md:text-base">
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