import { Link } from "react-router-dom";
import Doctor2 from "../common/Doctor2";
import LinkButton from "../common/LinkButton";

function ReviewSection() {
    return (
        <div className="py-12 px-20">
            <h2 className="text-xl sm:text-4xl text-blue-white dark:text-blue-dark font-bold">
                Отзывы
            </h2>

            <div className="mt-16">
                <div className="relative" >
                    <div className="mt-5 px-8 pb-5 max-w-[936px] min-h-[120px] border-[1px] border-blue-white dark:border-blue-dark rounded-2xl">
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
                </div>
                <div className="relative">
                    <div className="mt-5 px-8 pb-5 max-w-[936px] min-h-[120px] border-[1px] border-blue-white dark:border-blue-dark rounded-2xl">
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
                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.0885 13.4656C23.5067 13.0422 23.8024 12.5058 23.9422 11.9171C24.082 11.3284 24.0603 10.7109 23.8796 10.1344C23.6989 9.5578 23.3664 9.04515 22.9195 8.65441C22.4727 8.26367 21.9295 8.0104 21.3512 7.92321L17.4415 7.33379C17.2601 7.3064 17.0878 7.23361 16.9395 7.1217C16.7912 7.00979 16.6714 6.86209 16.5904 6.69142L14.8421 3.01691C14.5836 2.47308 14.1835 2.01517 13.6872 1.69498C13.1909 1.37479 12.6181 1.20509 12.0336 1.20509C11.4492 1.20509 10.8764 1.37479 10.3801 1.69498C9.88377 2.01517 9.4837 2.47308 9.22517 3.01691L7.47691 6.69142C7.3959 6.86209 7.27606 7.00979 7.12779 7.1217C6.97952 7.23361 6.80719 7.3064 6.62574 7.33379L2.71611 7.92321C2.13763 8.01026 1.59416 8.26348 1.14716 8.65432C0.700165 9.04511 0.367481 9.55789 0.186729 10.1346C0.00597701 10.7114 -0.0156313 11.3291 0.124348 11.918C0.264328 12.5068 0.560309 13.0432 0.978823 13.4667L3.80829 16.3266C3.93959 16.4592 4.03786 16.6229 4.09466 16.8037C4.15145 16.9845 4.16507 17.1769 4.13435 17.3643L3.46723 21.4031C3.36872 22.0004 3.4332 22.6144 3.65338 23.1758C3.87356 23.7371 4.24067 24.2233 4.7132 24.5796C5.18577 24.9358 5.74492 25.1478 6.32752 25.1916C6.91008 25.2354 7.49287 25.1093 8.00997 24.8275L11.5106 22.9202C11.6727 22.8312 11.8533 22.7847 12.0367 22.7847C12.22 22.7847 12.4006 22.8312 12.5627 22.9202L16.0633 24.8275C16.5802 25.1126 17.1642 25.2406 17.748 25.1967C18.3319 25.1528 18.8919 24.9389 19.3638 24.5795C19.8385 24.2248 20.2072 23.7385 20.4275 23.1762C20.6477 22.6139 20.7107 21.9987 20.6091 21.401L19.935 17.3653C19.9041 17.1779 19.9177 16.9855 19.9745 16.8047C20.0313 16.6239 20.1297 16.4602 20.261 16.3276L23.0885 13.4656Z" stroke="#7A95B9" />
                            </svg>
                        </div>
                    </div>
                    <div className="hidden xl:block md:absolute top-[-265px] left-[890px]">
                        <Doctor2 />
                    </div>
                </div>

            </div>

            <div className="py-16">
                <LinkButton to={"/reviews"} text={"Прочитать больше"} />
            </div>
        </div >
    );
}

export default ReviewSection;