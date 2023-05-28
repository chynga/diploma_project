import dayjs from "dayjs";
import { Star } from "./SvgImages";
import { TextBase, TextLg, TextSm, TextXl } from "./TextElements";
import { Review, dateFormat } from "./types";

type ReviewProps = {
    review: Review
}

function ReviewCard({ review }: ReviewProps) {
    return (
        <div className="px-8 pb-5 max-w-[936px] min-h-[120px] border-[1px] border-blue-white dark:border-blue-dark rounded-2xl">
            <TextXl>
                <p className="mt-3 font-medium">{review.client.fullName}</p>
            </TextXl>
            <TextSm>
                <p className="font-light">{dayjs(review.createdAt).format('DD.MM.YYYY')}</p>
            </TextSm>
            <TextLg>
                <p className="font-light">{review.body}</p>
            </TextLg>
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