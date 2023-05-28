import axios from "axios";
import { SetStateAction, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../app/hooks";
import { selectAuth } from "../../../features/auth/authSlice";
import { Star, TrashBin } from "../../common/SvgImages";
import { Review } from "../../common/types";
import { DeleteForm, DeleteTrashCanButton } from "../../common/DeleteConfirmation";

function ReviewsPage() {
    const [reviews, setReviews] = useState<Review[]>([]);
    const [reviewId, setReviewId] = useState<string>();
    const { user } = useAppSelector(selectAuth);
    const navigate = useNavigate();

    const [showDeleteForm, setShowDeleteForm] = useState(false);

    useEffect(() => {
        const apiUrl = `/api/reviews`;

        axios.get(apiUrl).then((resp) => {
            const reviews: Review[] = resp.data;
            setReviews(reviews);
        });
    }, [])

    const deleteReview = (id?: string) => {
        if (!id) {
            return;
        }
        const config = {
            headers: {
                Authorization: `Bearer ${user?.token}`,
            },
        };
        axios.delete("/api/reviews/" + id, config)
            .then(() => {
                navigate(0);
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className="h-[70vh] p-10 overflow-auto shadow-lg rounded-lg">
            {reviews.map(review => {
                return (
                    <div key={review.id} className="p-3 border-b border-[#353535] flex justify-between items-center">
                        <div>
                            <div className="font-bold text-primary-white dark:text-primary-dark">
                                {review.client.fullName}
                            </div>
                            <div className="text-primary-white dark:text-primary-dark">
                                {review.body}
                            </div>
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
                        <div onClick={() => setReviewId(review.id)} className="hover:cursor-pointer">
                            <DeleteTrashCanButton setShow={setShowDeleteForm} />
                        </div>
                    </div>
                )
            })}
            <DeleteForm title={"Вы действительно хотите удалить запрос?"} setShow={setShowDeleteForm} show={showDeleteForm} onDelete={() => deleteReview(reviewId)} />
        </div>
    );
}

export default ReviewsPage;