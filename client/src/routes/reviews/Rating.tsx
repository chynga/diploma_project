import { Dispatch, SetStateAction, useState } from "react";
import { Star } from "../common/SvgImages";

type RatingProps = {
    rating: number
    setRating: Dispatch<SetStateAction<number>>
}

function Rating({ rating, setRating }: RatingProps) {
    return (
        <div className="mt-5 flex gap-3">
            {[...Array(5)].map((star, index) => {
                const ratingValue = index + 1;
                return (
                    <div className="hover:cursor-pointer"
                        key={index}
                        onClick={() => setRating(ratingValue)}>
                        <Star filled={ratingValue <= rating}
                        />
                    </div>
                );
            })}
        </div>
    );
}

export default Rating;