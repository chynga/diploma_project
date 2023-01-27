import { useState } from "react";
import { ProfileNoPicture } from "../../common/SvgImages";
import { Text2Xl, TextXl } from "../../common/TextElements";

function ProfilePage() {
    const [isEditMode, setEditMode] = useState(false);

    return (
        <div>
            <div className="flex justify-center">
                <ProfileNoPicture className="w-[168px] h-[168px]" />
            </div>

            <div className="mt-5">
                <div>
                    <TextXl><label htmlFor="name">Имя</label></TextXl>
                    {isEditMode ?
                        <Input id="name" value={"Зейнеп"} />
                        :
                        <Text2Xl className="font-semibold">Зейнеп</Text2Xl>
                    }
                </div>
                <div className="mt-3">
                    <TextXl><label htmlFor="surname">Фамилия</label></TextXl>
                    {isEditMode ?
                        <Input id="surname" value={"Айдар"} />
                        :
                        <Text2Xl className="font-semibold">Айдар</Text2Xl>
                    }
                </div>
                <div className="mt-3">
                    <TextXl><label htmlFor="email">E-mail</label></TextXl>
                    {isEditMode ?
                        <Input id="email" value={"camomilell@mail.ru"} />
                        :
                        <Text2Xl className="font-semibold">camomilell@mail.ru</Text2Xl>
                    }
                </div>
                <div className="mt-3">
                    <TextXl><label htmlFor="phone">Номер телефона</label></TextXl>
                    {isEditMode ?
                        <Input id="phone" value={"+7 707 810 90 27"} />
                        :
                        <Text2Xl className="font-semibold">+7 707 810 90 27</Text2Xl>
                    }
                </div>

                <button className="mt-6 px-8 py-3 inline-block bg-blue-white dark:bg-blue-dark text-lg text-primary-dark font-semibold drop-shadow-lg rounded-full" onClick={() => { setEditMode(!isEditMode) }}>
                    Изменить
                </button>
            </div>
        </div>
    );
}

type InputProps = {
    value: string,
    id: string,
}

function Input({ value, id }: InputProps) {
    return (
        <input type="text" value={value} id={id} className="mt-5 px-6 py-2 dark:bg-[#797979] dark:text-white border-black dark:border-[#eeeeee] border-[1px] rounded-md w-full" />
    );
}

export default ProfilePage;