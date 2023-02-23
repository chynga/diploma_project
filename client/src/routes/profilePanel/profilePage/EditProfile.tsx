import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { ProfileProps } from ".";
import { updateUserInfo } from "../../../features/auth/authSlice";
import { storage } from "../../../firebase";
import { EditIcon, ProfilePicture } from "../../common/SvgImages";
import { TextXl } from "../../common/TextElements";

function EditProfile({ user }: ProfileProps) {
    const [fullName, setFullName] = useState(user ? user.fullName : "");
    const [email, setEmail] = useState(user ? user.email : "");
    const [phone, setPhone] = useState(user ? user.phone : "");
    const [profileImageUrl, setProfileImageUrl] = useState(user?.profileImageUrl);
    const dispatch = useDispatch<any>();
    const navigate = useNavigate();
    const inputFile = useRef<HTMLInputElement | null>(null);

    const onNameChange = (e: React.FormEvent<HTMLInputElement>) => {
        setFullName(e.currentTarget.value);
    }

    const onEmailChange = (e: React.FormEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value);
    }

    const onPhoneChange = (e: React.FormEvent<HTMLInputElement>) => {
        setPhone(e.currentTarget.value);
    }

    const uploadFile = (imageUpload: File) => {
        if (imageUpload == null) return;
        const imageRef = ref(storage, `profile/${imageUpload.name + uuid()}`);
        uploadBytes(imageRef, imageUpload).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                setProfileImageUrl(url);
            });
        });
    };

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const userData = {
            fullName,
            phone,
            email,
            profileImageUrl,
        };

        dispatch(updateUserInfo(userData));
        navigate(-1);
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="flex justify-center">
                <div className="group relative w-[168px] h-[168px] flex justify-center items-center hover:cursor-pointer"
                    onClick={() => inputFile.current?.click()}>
                    <ProfilePicture imageUrl={profileImageUrl} className="absolute w-[168px] h-[168px]" />
                    <EditIcon className="absolute hidden group-hover:block" />
                </div>

                <input type='file' id='file' ref={inputFile} style={{ display: 'none' }}
                    onChange={(event: any) => {
                        uploadFile(event.target.files[0]);
                    }} />
            </div>

            <div className="mt-5">
                <div>
                    <TextXl><label htmlFor="name">ФИО</label></TextXl>
                    <input id="name" type="text" value={fullName} className="mt-5 px-6 py-2 dark:bg-[#797979] dark:text-white border-black dark:border-[#eeeeee] border-[1px] rounded-md w-full"
                        onChange={onNameChange} />
                </div>
                <div className="mt-3">
                    <TextXl><label htmlFor="email">E-mail</label></TextXl>
                    <input id="email" type="text" value={email} className="mt-5 px-6 py-2 dark:bg-[#797979] dark:text-white border-black dark:border-[#eeeeee] border-[1px] rounded-md w-full"
                        onChange={onEmailChange} />
                </div>
                <div className="mt-3">
                    <TextXl><label htmlFor="phone">Номер телефона</label></TextXl>
                    <input id="phone" type="text" value={phone} className="mt-5 px-6 py-2 dark:bg-[#797979] dark:text-white border-black dark:border-[#eeeeee] border-[1px] rounded-md w-full"
                        onChange={onPhoneChange} />
                </div>

                <button className="mt-6 px-8 py-3 inline-block bg-blue-white dark:bg-blue-dark text-lg text-primary-dark font-semibold drop-shadow-lg rounded-full">
                    Изменить
                </button>
            </div>
        </form>
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

export default EditProfile;