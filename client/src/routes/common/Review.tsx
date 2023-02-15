import { Star } from "./SvgImages";

function Review() {
    return (
        <div className="px-8 pb-5 max-w-[936px] min-h-[120px] border-[1px] border-blue-white dark:border-blue-dark rounded-2xl">
            <h3 className="mt-3 font-bold text-lg text-primary-white dark:text-primary-dark">Ольга</h3>
            <p className="font-light text-primary-white dark:text-primary-dark">Отличная клиника ! Всё чисто, аккуратно и очень дружлюбный отзывчивый персонал, начиная с девушки-администратора </p>
            <div className="flex gap-3 mt-2">
                <Star filled />
                <Star filled />
                <Star filled />
                <Star />
                <Star />
            </div>
        </div>
    );
}

export default Review;