import { TrashBin } from "../../common/SvgImages";

function ViewService() {
    return (
        <div className="flex flex-col items-center gap-4">
            <h2 className="font-medium text-primary-white dark:text-primary-dark">Ортопедия</h2>
            <img src="/service-image.png" className="max-w-[220px]" />
            <h2 className="font-medium text-primary-white dark:text-primary-dark">Описание услуги</h2>
            <p className="text-sm text-primary-white dark:text-primary-dark">Неправильное пережевывание пищи <br />
                атрофия десны и костной ткани<br />
                смещение зубного ряда<br />
                изменение височно-нижнечелюстного сустава<br />
                В конце концов, нарушается эстетика. Поэтому, потеряв зуб необходимо пройти ортопедическое лечение. В нашей клинике понятие эстетическое протезирование и есть само протезирование в целом. Соответственно всё, что изготавливается в клинике «ИМАТЭК-ДЕНТ» это высоко эстетичные конструкции, ведь красота и эстетика – веление времени.
            </p>
            <h2 className="font-medium text-primary-white dark:text-primary-dark">Цена</h2>
            <h2 className="text-sm font-medium text-primary-white dark:text-primary-dark">20 000 - 30 000 тг</h2>
            <h2 className="font-medium text-primary-white dark:text-primary-dark">До и после</h2>
            <div className="flex justify-center gap-10">
                <img src="/service-before.png" className="max-w-[220px]" />
                <img src="/service-after.png" className="max-w-[220px]" />
            </div>
            <div className="px-8 py-3 flex items-center gap-3 bg-[#FF4646] dark:bg-[#B67474] text-lg text-primary-dark font-semibold drop-shadow-lg rounded-full hover:cursor-pointer">
                <TrashBin className="stroke-white" />
                Удалить
            </div>
            <div className="px-8 py-3 bg-blue-white dark:bg-blue-dark text-lg text-primary-dark font-semibold drop-shadow-lg rounded-full hover:cursor-pointer">
                Редактировать
            </div>
        </div>
    );
}

export default ViewService;