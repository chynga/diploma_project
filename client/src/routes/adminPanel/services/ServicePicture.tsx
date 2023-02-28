type ProfilePictureParams = {
    imageUrl: string | undefined
    className: string
    editing?: boolean
}

function ServicePicture({ imageUrl, className, editing = false }: ProfilePictureParams) {
    return (
        <>
            {imageUrl ?
                <div className={className}>
                    <img src={imageUrl} className={`object-cover ${className}`} alt="" />
                </div>
                :
                editing ?
                    <div className={`flex justify-center items-center border-4 border-dashed border-gray-500 ${className}`}>
                        Загрузите фото
                    </div> :
                    <div className={`flex justify-center items-center border-4 border-gray-500 ${className}`}>
                        Фото не загружен
                    </div>
            }
        </>
    );
}

export default ServicePicture;