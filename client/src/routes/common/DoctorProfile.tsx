type ImageInfo = { imageUrl: string | undefined }

function DoctorProfile({ imageUrl }: ImageInfo) {
    return (
        <div className="relative w-[292px] h-[420px]">
            <div className="w-[292px] h-[292px] absolute bottom-0 left-0 bg-blue-white dark:bg-blue-dark rounded-full z-0"></div>
            <img src={imageUrl} className="w-[292px] absolute bottom-0 left-0 rounded-b-full z-10" alt="" />
        </div>
    );
}

export default DoctorProfile;