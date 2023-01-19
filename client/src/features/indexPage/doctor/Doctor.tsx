function Doctor() {
    return (
        <div className="py-20 px-20">
            <h2 className="text-center text-xl sm:text-4xl text-blue-white dark:text-blue-dark font-bold">
                Врачи
            </h2>
            <div className="mt-5 flex flex-col items-center xl:flex-row justify-around">
                <DoctorCard imageUrl={"real-doctor-1.png"} />
                <DoctorCard imageUrl={"real-doctor-2.png"} />
                <DoctorCard imageUrl={"real-doctor-3.png"} />
            </div>
            <div className="my-16 flex justify-center">
                <a className="px-6 py-2 bg-blue-white dark:bg-blue-dark text-md text-primary-dark font-semibold drop-shadow-lg rounded-full"
                    href="#">Просмотр всех врачей</a>
            </div>
        </div>
    );
}

function DoctorCard({ imageUrl }: any) {
    return (
        <div className="w-[292px] flex flex-col items-center gap-2">
            <div className="relative w-[292px] h-[420px]">
                <div className="w-[292px] h-[292px] absolute bottom-0 left-0 bg-blue-white dark:bg-blue-dark rounded-full z-0"></div>
                <img src={imageUrl} className="w-[292px] absolute bottom-0 left-0 rounded-b-full z-10" alt="" />
            </div>
            <h3 className="mt-3 font-bold text-lg text-blue-white dark:text-blue-dark">Попова Оксана Дмитриевна</h3>
            <div>
                <p className="text-primary-white dark:text-primary-dark text-center">Стоматолог-ортопед, стоматолог-хирург</p>
                <p className="text-primary-white dark:text-primary-dark text-center">Общий стаж работы: 12 лет</p>
            </div>
        </div>
    );
}

export default Doctor;