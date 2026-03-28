import { FaRegStar, FaStar } from "react-icons/fa";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../ui/carousel";
import {
    Avatar,
    AvatarFallback,
    AvatarGroup,
    AvatarGroupCount,
    AvatarImage,
} from "../ui/avatar";

type Review = {
    id: number;
    name: string;
    country: string;
    quote: string;
    initials: string;
    star: number;
    avatar_URL?: string;
};

const reviews: Review[] = [
    {
        id: 1,
        name: "Sarah Johnson",
        country: "United States",
        quote:
            "Excellent service from start to finish. Our driver was punctual, professional, and made our trip from the airport so comfortable.",
        initials: "SJ",
        star: 1,
        avatar_URL: "https://api.dicebear.com/9.x/adventurer/svg?seed=Sarah",

    },
    {
        id: 2,
        name: "Daniel Carter",
        country: "Canada",
        quote:
            "Booking was effortless and the car arrived right on time. I highly recommend Kaiya Taxi for airport and city rides.",
        initials: "DC",
        star: 3,
        avatar_URL: "https://api.dicebear.com/9.x/adventurer/svg?seed=Daniel",
    },
    {
        id: 3,
        name: "Maya Lee",
        country: "Singapore",
        quote:
            "The ride felt safe and premium. Driver communication was clear and the overall experience exceeded my expectations.",
        initials: "ML",
        star: 4,
        avatar_URL: "https://api.dicebear.com/9.x/adventurer/svg?seed=Maya",
    },
    {
        id: 4,
        name: "James Brown",
        country: "United Kingdom",
        quote:
            "Great support team and transparent pricing. This is now my first choice whenever I need a dependable taxi service.",
        initials: "JB",
        star: 5,
        avatar_URL: "https://api.dicebear.com/9.x/adventurer/svg?seed=James",
    },
    {
        id: 5,
        name: "Aisha Rahman",
        country: "Bangladesh",
        quote:
            "Very smooth experience and super polite driver. The ride was safe, clean, and exactly on schedule.",
        initials: "AR",
        star: 4,
        avatar_URL: "https://api.dicebear.com/9.x/adventurer/svg?seed=Aisha",
    },
];

const featuredAvatars = reviews.slice(0, 3);
const extraAvatarCount = Math.max(reviews.length - featuredAvatars.length, 0);

function ReviewCard({ review }: { review: Review }) {
    return (
        <article className="flex h-full min-h-[250px] flex-col rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-700 dark:bg-zinc-900">
            <div
                className="flex items-center gap-1"
                aria-label={`${review.star} out of 5 stars`}
            >
                {Array.from({ length: 5 }).map((_, index) => (
                    index < review.star ? (
                        <FaStar
                            key={index}
                            className="h-4 w-4 text-zinc-900 dark:text-zinc-100"
                            aria-hidden
                        />
                    ) : (
                        <FaRegStar
                            key={index}
                            className="h-4 w-4 text-zinc-400 dark:text-zinc-500"
                            aria-hidden
                        />
                    )
                ))}
            </div>

            <p className="mt-5 text-base leading-8 text-zinc-700 dark:text-zinc-300">
                &ldquo;{review.quote}&rdquo;
            </p>

            <div className="mt-auto border-t border-zinc-200 pt-4 dark:border-zinc-700">
                <div className="flex items-center gap-3">
                    {review.avatar_URL ? (
                        <div
                            className="h-11 w-11 rounded-full border border-zinc-200 bg-cover bg-center dark:border-zinc-700"
                            style={{ backgroundImage: `url(${review.avatar_URL})` }}
                            aria-label={`${review.name} avatar`}
                        />
                    ) : (
                        <div className="grid h-11 w-11 place-items-center rounded-full bg-zinc-200 text-xs font-bold text-zinc-800 dark:bg-zinc-700 dark:text-zinc-100">
                            {review.initials}
                        </div>
                    )}
                    <div>
                        <p className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                            {review.name}
                        </p>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400">
                            {review.country}
                        </p>
                    </div>
                </div>
            </div>
        </article>
    );
}

const Reviews = () => {
    return (
        <section
            id="reviews"
            className=" border-zinc-200 bg-zinc-100 py-14 dark:border-zinc-800 dark:bg-zinc-950 sm:py-16 lg:py-20"
        >
            <div className="mx-auto w-full  px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <p className="inline-block border-b-2 border-zinc-900 pb-1 text-xs font-bold tracking-[0.2em] text-zinc-900 dark:border-zinc-100 dark:text-zinc-100">
                        TESTIMONIAL
                    </p>
                    <h2 className="mt-5 flex flex-wrap items-center justify-center gap-2 text-center text-3xl font-black tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl lg:text-5xl">
                        <span>Trusted by</span>
                        <AvatarGroup className="grayscal">
                            {featuredAvatars.map((review) => (
                                <Avatar key={review.id} size="lg">
                                    {review.avatar_URL ? (
                                        <AvatarImage
                                            src={review.avatar_URL}
                                            alt={review.name}
                                        />
                                    ) : null}
                                    <AvatarFallback>{review.initials}</AvatarFallback>
                                </Avatar>
                            ))}
                            {extraAvatarCount > 0 ? (
                                <AvatarGroupCount>
                                    +{extraAvatarCount}
                                </AvatarGroupCount>
                            ) : null}
                        </AvatarGroup>
                        <span>thousands of happy travelers.</span>
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-sm text-zinc-600 dark:text-zinc-400 sm:text-lg">
                        See what our customers say about their experience
                    </p>
                </div>

                <Carousel
                    className="mt-10 sm:mt-12"
                    opts={{ align: "start", dragFree: true }}
                >
                    <CarouselContent>
                        {reviews.map((review) => (
                            <CarouselItem
                                key={review.id}
                                className="basis-full sm:basis-1/2 lg:basis-1/3"
                            >
                                <ReviewCard review={review} />
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    <CarouselPrevious
                        className="-left-5 h-12 w-12 border-0 bg-zinc-400 text-white hover:bg-zinc-500 disabled:opacity-40 sm:-left-6"
                        size="icon"
                    />
                    <CarouselNext
                        className="-right-5 h-12 w-12 border-0 bg-zinc-900 text-white hover:bg-zinc-700 disabled:opacity-40 sm:-right-6"
                        size="icon"
                    />
                </Carousel>
            </div>
        </section>
    );
};

export default Reviews;