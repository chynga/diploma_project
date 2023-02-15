import { Star } from "./SvgImages";
import { Review } from "./types";

type ReviewProps = {
    review: Review
}

function ReviewCard({ review }: ReviewProps) {
    return (
        <div className="px-8 pb-5 max-w-[936px] min-h-[120px] border-[1px] border-blue-white dark:border-blue-dark rounded-2xl">
            <h3 className="mt-3 font-bold text-lg text-primary-white dark:text-primary-dark">{review.client.fullName}</h3>
            <p className="font-light text-primary-white dark:text-primary-dark">{review.body}</p>
            <div className="flex gap-3 mt-2">
                {[...Array(5)].map((star, index) => {
                    const ratingValue = index + 1;
                    return (
                        <div className="hover:cursor-pointer"
                            key={index}>
                            <Star filled={ratingValue <= review.rating}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default ReviewCard;