function VacancyPage() {
    return (
        <div className="p-20 bg-backgroundSecondary-white dark:bg-backgroundSecondary-dark">
            <form>
                <h2 className="text-xl sm:text-4xl text-primary-white dark:text-primary-dark font-bold">
                    Ищите вакансию?
                </h2>
                <h3 className="mt-6 font-medium text-xl text-primary-white dark:text-primary-dark">
                    Выберите вакансию
                </h3>
                <div className="mt-5 grid grid-flow-col-dense grid-rows-3 gap-5 max-w-[800px] text-primary-white dark:text-primary-dark">
                    <div>
                        <input type="radio" id="doctorChoice1" className="mr-3"
                            name="doctor" value="value1" />
                        <label htmlFor="doctorChoice1">Стоматолог - ортодонт</label>
                    </div>

                    <div>
                        <input type="radio" id="doctorChoice2" className="mr-3"
                            name="doctor" value="value2" />
                        <label htmlFor="doctorChoice2">Стоматолог - терапевт</label>
                    </div>

                    <div>
                        <input type="radio" id="doctorChoice3" className="mr-3"
                            name="doctor" value="value3" />
                        <label htmlFor="doctorChoice3">Стоматолог - хирург</label>
                    </div>

                    <div>
                        <input type="radio" id="doctorChoice4" className="mr-3"
                            name="doctor" value="value4" />
                        <label htmlFor="doctorChoice4">Стоматолог - терапевт</label>
                    </div>

                    <div>
                        <input type="radio" id="doctorChoice5" className="mr-3"
                            name="doctor" value="value5" />
                        <label htmlFor="doctorChoice5">Стоматолог - ортопед</label>
                    </div>

                    <div>
                        <input type="radio" id="doctorChoice6" className="mr-3"
                            name="doctor" value="value6" />
                        <label htmlFor="doctorChoice6">Администратор</label>
                    </div>

                    <div>
                        <input type="radio" id="doctorChoice7" className="mr-3"
                            name="doctor" value="value7" />
                        <label htmlFor="doctorChoice7">Менеджер</label>
                    </div>
                </div>
                <h3 className="mt-6 font-medium text-xl text-primary-white dark:text-primary-dark">
                    Заполните бланк
                </h3>
                <div className="mt-6 flex gap-20">
                    <div>
                        <div className="flex flex-col gap-5 w-[365px]">
                            <input type="text" placeholder="Имя" className="dark:text-white bg-backgroundSecondary-white dark:bg-backgroundSecondary-dark border-b-[1px] border-primary-white dark:border-primary-dark" />
                            <input type="text" placeholder="Имя" className="dark:text-white bg-backgroundSecondary-white dark:bg-backgroundSecondary-dark border-b-[1px] border-primary-white dark:border-primary-dark" />
                            <input type="text" placeholder="Имя" className="dark:text-white bg-backgroundSecondary-white dark:bg-backgroundSecondary-dark border-b-[1px] border-primary-white dark:border-primary-dark" />
                            <input type="text" placeholder="Имя" className="dark:text-white bg-backgroundSecondary-white dark:bg-backgroundSecondary-dark border-b-[1px] border-primary-white dark:border-primary-dark" />
                        </div>

                        <button className="mt-6 px-8 py-3 inline-block bg-blue-white dark:bg-blue-dark text-lg text-primary-dark font-semibold drop-shadow-lg rounded-full">
                            Отправить
                        </button>
                    </div>

                    <textarea placeholder="Сообщение..." name="" id="" cols={30} rows={7} className="px-6 py-2 bg-background-white dark:bg-background-dark dark:text-white border-[1px] border-blue-white rounded-3xl w-full">

                    </textarea>
                </div>
            </form>
        </div>
    );
}

export default VacancyPage;