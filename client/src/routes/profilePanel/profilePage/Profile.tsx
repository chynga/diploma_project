import { useNavigate } from "react-router-dom";
import { ProfileProps } from ".";
import { ProfilePicture } from "../../common/SvgImages";
import { Text2Xl, TextXl } from "../../common/TextElements";

function Profile({ user }: ProfileProps) {
    const navigate = useNavigate();

    return (
        <div>
            <div className="flex justify-center">
                <ProfilePicture imageUrl={user?.profileImageUrl} className="w-[168px] h-[168px]" />
            </div>

            <div className="mt-5">
                <div>
                    <TextXl><label htmlFor="name">ФИО: </label></TextXl><br />
                    <Text2Xl className="font-semibold">{user?.fullName}</Text2Xl>
                </div>
                <div className="mt-3">
                    <TextXl><label htmlFor="email">E-mail: </label></TextXl><br />
                    <Text2Xl className="font-semibold">{user?.email}</Text2Xl>
                </div>
                <div className="mt-3">
                    <TextXl><label htmlFor="phone">Номер телефона: </label></TextXl><br />
                    <Text2Xl className="font-semibold">{user?.phone}</Text2Xl>
                </div>

                <div className="mt-6 px-8 py-3 inline-block bg-blue-white dark:bg-blue-dark text-lg text-primary-dark font-semibold drop-shadow-lg rounded-full hover:cursor-pointer" onClick={() => { navigate("edit") }}>
                    Изменить
                </div>
            </div>
        </div>
    );
}

export default Profile;