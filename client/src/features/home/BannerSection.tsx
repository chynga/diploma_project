function BannerSection() {
    return (
        <div className="w-full h-[35rem] bg-[url('images/banner.jpg')]
                         bg-cover bg-center flex justify-center items-center
                         bg-black">
            <div className="flex flex-col max-w-2xl justify-center items-center">
                <h1 className="text-center text-4xl text-primary-white dark:text-primary-dark font-bold">Все виды
                    <span className="text-blue-white dark:text-blue-dark"> стамотологических услуг </span><br />
                    с фиксированной ценой<br />
                    и гарантией на 1 год
                </h1>
                <p className="mt-5 text-center text-lg text-white">Первое посещение <span className="text-blue-white dark:text-blue-dark">15%</span> скидка</p>
                <a className="mt-8 px-8 py-3 bg-blue-white dark:bg-blue-dark text-xl text-primary-dark font-semibold drop-shadow-lg rounded-full"
                    href="#">Записаться</a>
            </div>
        </div>
    );
}

export default BannerSection;