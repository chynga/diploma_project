function Review() {
    return (
        <div className="px-8 pb-5 max-w-[936px] min-h-[120px] border-[1px] border-blue-white dark:border-blue-dark rounded-2xl">
            <h3 className="mt-3 font-bold text-lg text-primary-white dark:text-primary-dark">Ольга</h3>
            <p className="font-light text-primary-white dark:text-primary-dark">Отличная клиника ! Всё чисто, аккуратно и очень дружлюбный отзывчивый персонал, начиная с девушки-администратора </p>
            <div className="flex gap-3 mt-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.0515 12.6822C23.4696 12.2741 23.7653 11.7572 23.9051 11.1899C24.0449 10.6226 24.0232 10.0276 23.8425 9.47195C23.6618 8.91634 23.3293 8.42235 22.8825 8.0458C22.4358 7.66926 21.8926 7.42519 21.3145 7.34116L17.4055 6.77316C17.224 6.74676 17.0518 6.67661 16.9035 6.56877C16.7553 6.46093 16.6355 6.31863 16.5545 6.15416L14.8065 2.61316C14.548 2.0891 14.148 1.64783 13.6517 1.33927C13.1555 1.03071 12.5828 0.867188 11.9985 0.867188C11.4141 0.867188 10.8414 1.03071 10.3452 1.33927C9.84895 1.64783 9.44896 2.0891 9.19046 2.61316L7.44246 6.15416C7.36147 6.31863 7.24168 6.46093 7.09342 6.56877C6.94516 6.67661 6.77289 6.74676 6.59146 6.77316L2.68246 7.34116C2.10408 7.42505 1.56069 7.66909 1.11377 8.0457C0.666853 8.42231 0.334223 8.91645 0.153501 9.47225C-0.0272217 10.028 -0.0488263 10.6233 0.0911303 11.1908C0.231087 11.7582 0.527021 12.2751 0.945465 12.6832L3.77446 15.4392C3.90574 15.567 4.00399 15.7248 4.06078 15.899C4.11757 16.0732 4.13119 16.2585 4.10046 16.4392L3.43346 20.3312C3.33497 20.9068 3.39943 21.4985 3.61958 22.0395C3.83972 22.5804 4.20677 23.049 4.67924 23.3922C5.15171 23.7355 5.71078 23.9398 6.29326 23.982C6.87575 24.0242 7.45843 23.9027 7.97546 23.6312L11.4755 21.7932C11.6375 21.7074 11.8181 21.6626 12.0015 21.6626C12.1848 21.6626 12.3654 21.7074 12.5275 21.7932L16.0275 23.6312C16.5443 23.9059 17.1281 24.0292 17.7119 23.9869C18.2956 23.9446 18.8556 23.7385 19.3275 23.3922C19.8021 23.0504 20.1707 22.5817 20.3909 22.0399C20.6111 21.4981 20.6741 20.9051 20.5725 20.3292L19.8985 16.4402C19.8677 16.2595 19.8812 16.0741 19.938 15.8999C19.9948 15.7257 20.0931 15.5679 20.2245 15.4402L23.0515 12.6822Z" fill="#7A95B9" />
                </svg>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.0515 12.6822C23.4696 12.2741 23.7653 11.7572 23.9051 11.1899C24.0449 10.6226 24.0232 10.0276 23.8425 9.47195C23.6618 8.91634 23.3293 8.42235 22.8825 8.0458C22.4358 7.66926 21.8926 7.42519 21.3145 7.34116L17.4055 6.77316C17.224 6.74676 17.0518 6.67661 16.9035 6.56877C16.7553 6.46093 16.6355 6.31863 16.5545 6.15416L14.8065 2.61316C14.548 2.0891 14.148 1.64783 13.6517 1.33927C13.1555 1.03071 12.5828 0.867188 11.9985 0.867188C11.4141 0.867188 10.8414 1.03071 10.3452 1.33927C9.84895 1.64783 9.44896 2.0891 9.19046 2.61316L7.44246 6.15416C7.36147 6.31863 7.24168 6.46093 7.09342 6.56877C6.94516 6.67661 6.77289 6.74676 6.59146 6.77316L2.68246 7.34116C2.10408 7.42505 1.56069 7.66909 1.11377 8.0457C0.666853 8.42231 0.334223 8.91645 0.153501 9.47225C-0.0272217 10.028 -0.0488263 10.6233 0.0911303 11.1908C0.231087 11.7582 0.527021 12.2751 0.945465 12.6832L3.77446 15.4392C3.90574 15.567 4.00399 15.7248 4.06078 15.899C4.11757 16.0732 4.13119 16.2585 4.10046 16.4392L3.43346 20.3312C3.33497 20.9068 3.39943 21.4985 3.61958 22.0395C3.83972 22.5804 4.20677 23.049 4.67924 23.3922C5.15171 23.7355 5.71078 23.9398 6.29326 23.982C6.87575 24.0242 7.45843 23.9027 7.97546 23.6312L11.4755 21.7932C11.6375 21.7074 11.8181 21.6626 12.0015 21.6626C12.1848 21.6626 12.3654 21.7074 12.5275 21.7932L16.0275 23.6312C16.5443 23.9059 17.1281 24.0292 17.7119 23.9869C18.2956 23.9446 18.8556 23.7385 19.3275 23.3922C19.8021 23.0504 20.1707 22.5817 20.3909 22.0399C20.6111 21.4981 20.6741 20.9051 20.5725 20.3292L19.8985 16.4402C19.8677 16.2595 19.8812 16.0741 19.938 15.8999C19.9948 15.7257 20.0931 15.5679 20.2245 15.4402L23.0515 12.6822Z" fill="#7A95B9" />
                </svg>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.0515 12.6822C23.4696 12.2741 23.7653 11.7572 23.9051 11.1899C24.0449 10.6226 24.0232 10.0276 23.8425 9.47195C23.6618 8.91634 23.3293 8.42235 22.8825 8.0458C22.4358 7.66926 21.8926 7.42519 21.3145 7.34116L17.4055 6.77316C17.224 6.74676 17.0518 6.67661 16.9035 6.56877C16.7553 6.46093 16.6355 6.31863 16.5545 6.15416L14.8065 2.61316C14.548 2.0891 14.148 1.64783 13.6517 1.33927C13.1555 1.03071 12.5828 0.867188 11.9985 0.867188C11.4141 0.867188 10.8414 1.03071 10.3452 1.33927C9.84895 1.64783 9.44896 2.0891 9.19046 2.61316L7.44246 6.15416C7.36147 6.31863 7.24168 6.46093 7.09342 6.56877C6.94516 6.67661 6.77289 6.74676 6.59146 6.77316L2.68246 7.34116C2.10408 7.42505 1.56069 7.66909 1.11377 8.0457C0.666853 8.42231 0.334223 8.91645 0.153501 9.47225C-0.0272217 10.028 -0.0488263 10.6233 0.0911303 11.1908C0.231087 11.7582 0.527021 12.2751 0.945465 12.6832L3.77446 15.4392C3.90574 15.567 4.00399 15.7248 4.06078 15.899C4.11757 16.0732 4.13119 16.2585 4.10046 16.4392L3.43346 20.3312C3.33497 20.9068 3.39943 21.4985 3.61958 22.0395C3.83972 22.5804 4.20677 23.049 4.67924 23.3922C5.15171 23.7355 5.71078 23.9398 6.29326 23.982C6.87575 24.0242 7.45843 23.9027 7.97546 23.6312L11.4755 21.7932C11.6375 21.7074 11.8181 21.6626 12.0015 21.6626C12.1848 21.6626 12.3654 21.7074 12.5275 21.7932L16.0275 23.6312C16.5443 23.9059 17.1281 24.0292 17.7119 23.9869C18.2956 23.9446 18.8556 23.7385 19.3275 23.3922C19.8021 23.0504 20.1707 22.5817 20.3909 22.0399C20.6111 21.4981 20.6741 20.9051 20.5725 20.3292L19.8985 16.4402C19.8677 16.2595 19.8812 16.0741 19.938 15.8999C19.9948 15.7257 20.0931 15.5679 20.2245 15.4402L23.0515 12.6822Z" fill="#7A95B9" />
                </svg>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.0515 12.6822C23.4696 12.2741 23.7653 11.7572 23.9051 11.1899C24.0449 10.6226 24.0232 10.0276 23.8425 9.47195C23.6618 8.91634 23.3293 8.42235 22.8825 8.0458C22.4358 7.66926 21.8926 7.42519 21.3145 7.34116L17.4055 6.77316C17.224 6.74676 17.0518 6.67661 16.9035 6.56877C16.7553 6.46093 16.6355 6.31863 16.5545 6.15416L14.8065 2.61316C14.548 2.0891 14.148 1.64783 13.6517 1.33927C13.1555 1.03071 12.5828 0.867188 11.9985 0.867188C11.4141 0.867188 10.8414 1.03071 10.3452 1.33927C9.84895 1.64783 9.44896 2.0891 9.19046 2.61316L7.44246 6.15416C7.36147 6.31863 7.24168 6.46093 7.09342 6.56877C6.94516 6.67661 6.77289 6.74676 6.59146 6.77316L2.68246 7.34116C2.10408 7.42505 1.56069 7.66909 1.11377 8.0457C0.666853 8.42231 0.334223 8.91645 0.153501 9.47225C-0.0272217 10.028 -0.0488263 10.6233 0.0911303 11.1908C0.231087 11.7582 0.527021 12.2751 0.945465 12.6832L3.77446 15.4392C3.90574 15.567 4.00399 15.7248 4.06078 15.899C4.11757 16.0732 4.13119 16.2585 4.10046 16.4392L3.43346 20.3312C3.33497 20.9068 3.39943 21.4985 3.61958 22.0395C3.83972 22.5804 4.20677 23.049 4.67924 23.3922C5.15171 23.7355 5.71078 23.9398 6.29326 23.982C6.87575 24.0242 7.45843 23.9027 7.97546 23.6312L11.4755 21.7932C11.6375 21.7074 11.8181 21.6626 12.0015 21.6626C12.1848 21.6626 12.3654 21.7074 12.5275 21.7932L16.0275 23.6312C16.5443 23.9059 17.1281 24.0292 17.7119 23.9869C18.2956 23.9446 18.8556 23.7385 19.3275 23.3922C19.8021 23.0504 20.1707 22.5817 20.3909 22.0399C20.6111 21.4981 20.6741 20.9051 20.5725 20.3292L19.8985 16.4402C19.8677 16.2595 19.8812 16.0741 19.938 15.8999C19.9948 15.7257 20.0931 15.5679 20.2245 15.4402L23.0515 12.6822Z" fill="#7A95B9" />
                </svg>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.0515 12.6822C23.4696 12.2741 23.7653 11.7572 23.9051 11.1899C24.0449 10.6226 24.0232 10.0276 23.8425 9.47195C23.6618 8.91634 23.3293 8.42235 22.8825 8.0458C22.4358 7.66926 21.8926 7.42519 21.3145 7.34116L17.4055 6.77316C17.224 6.74676 17.0518 6.67661 16.9035 6.56877C16.7553 6.46093 16.6355 6.31863 16.5545 6.15416L14.8065 2.61316C14.548 2.0891 14.148 1.64783 13.6517 1.33927C13.1555 1.03071 12.5828 0.867188 11.9985 0.867188C11.4141 0.867188 10.8414 1.03071 10.3452 1.33927C9.84895 1.64783 9.44896 2.0891 9.19046 2.61316L7.44246 6.15416C7.36147 6.31863 7.24168 6.46093 7.09342 6.56877C6.94516 6.67661 6.77289 6.74676 6.59146 6.77316L2.68246 7.34116C2.10408 7.42505 1.56069 7.66909 1.11377 8.0457C0.666853 8.42231 0.334223 8.91645 0.153501 9.47225C-0.0272217 10.028 -0.0488263 10.6233 0.0911303 11.1908C0.231087 11.7582 0.527021 12.2751 0.945465 12.6832L3.77446 15.4392C3.90574 15.567 4.00399 15.7248 4.06078 15.899C4.11757 16.0732 4.13119 16.2585 4.10046 16.4392L3.43346 20.3312C3.33497 20.9068 3.39943 21.4985 3.61958 22.0395C3.83972 22.5804 4.20677 23.049 4.67924 23.3922C5.15171 23.7355 5.71078 23.9398 6.29326 23.982C6.87575 24.0242 7.45843 23.9027 7.97546 23.6312L11.4755 21.7932C11.6375 21.7074 11.8181 21.6626 12.0015 21.6626C12.1848 21.6626 12.3654 21.7074 12.5275 21.7932L16.0275 23.6312C16.5443 23.9059 17.1281 24.0292 17.7119 23.9869C18.2956 23.9446 18.8556 23.7385 19.3275 23.3922C19.8021 23.0504 20.1707 22.5817 20.3909 22.0399C20.6111 21.4981 20.6741 20.9051 20.5725 20.3292L19.8985 16.4402C19.8677 16.2595 19.8812 16.0741 19.938 15.8999C19.9948 15.7257 20.0931 15.5679 20.2245 15.4402L23.0515 12.6822Z" fill="#7A95B9" />
                </svg>
            </div>
        </div>
    );
}

export default Review;