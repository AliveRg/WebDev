<script setup>
import GuestLayout from "@/Layouts/GuestLayout.vue";

import { Head, Link } from "@inertiajs/vue3";
import Carusel from "@/Components/Carusel.vue";
import SvgComponent1 from "@/Components/SvgComponent1.vue";
import SvgComponent2 from "@/Components/SvgComponent2.vue";
import SvgComponent3 from "@/Components/SvgComponent3.vue";
import SvgComponent4 from "@/Components/SvgComponent4.vue";
</script>

<template>
    <GuestLayout>
        <section
            class="unselectable relative grid grid-flow-row md:grid-flow-col gap-10 justify-center pt-32 pb-64 px-4"
        >
            <!-- <div
                class="absolute top-0 left-0 right-0 bottom-10 bg-[url('images/bg.jpg')] bg-cover blur-sm"
            ></div> -->
            <div
                class="flex flex-col z-10 gap-4 items-center justify-center md:items-start md:gap-10 overflow-hidden text-center md:text-start text-3xl text-black dark:text-textDark font-extrabold sm:text-4xl md:text-5xl lg:text-6xl"
            >
                <p>
                    Лендинг со <br />
                    скидкой
                    <span
                        class="text-accentLight dark:text-accentDark drop-shadow-[0px_5px_5px_rgba(242,207,102,.85)] dark:drop-shadow-[0px_5px_5px_rgba(242,174,48,.55)]"
                        >20%</span
                    >
                </p>
                <div
                    class="text-black text-sm sm:text-lg md:text-xl text-center grid gap-2"
                >
                    <p
                        class="bg-accentLight dark:bg-accentDark py-1 px-3 rounded-xl text-black dark:text-textDark"
                    >
                        Посмотреть тарифы
                    </p>
                </div>
            </div>

            <div class="max-w-xl relative">
                <div class="relative z-20 flex justify-center gap-2 items-end">
                    <img
                        class="w-3/4 block dark:hidden"
                        src="images/preview-design.webp"
                        alt=""
                    />
                    <img
                        class="w-1/6 h-1/2 block dark:hidden"
                        src="images/preview-iphone.webp"
                        alt=""
                    />
                    <img
                        src="images/preview-designdark.webp"
                        alt=""
                        class="hidden dark:block w-3/4"
                    />
                    <img
                        src="images/preview-iphoneDark.webp"
                        alt=""
                        class="hidden dark:block w-1/6 h-1/2"
                    />
                </div>

                <!-- <img
                    class="hidden dark:block dark:absolute opacity-100 -top-32 left-44 h-full z-0 root-anim1"
                    src="images/meh12.png"
                    alt=""
                />
                <img
                    class="hidden dark:block dark:absolute opacity-100 top-0 -left-56 h-full z-0 root-anim"
                    src="images/meh22.png"
                    alt=""
                />
                <img
                    class="hidden dark:block dark:absolute opacity-100 top-10 left-64 h-full z-0 root-anim"
                    src="images/meh33.png"
                    alt=""
                />
                <img
                    class="hidden dark:block dark:absolute opacity-100 top-24 -left-0 h-full z-0 root-anim1"
                    src="images/meh44.png"
                    alt=""
                /> -->
                <!-- <img
                    class="hidden w-screen dark:block dark:absolute opacity-100 z-30"
                    src="images/animate_prevue.gif"
                /> -->
                <!-- <img
                    class="block dark:hidden absolute opacity-80 -top-32 left-44 h-full z-0 root-anim1"
                    src="images/meh12.png"
                    alt=""
                />
                <img
                    class="block dark:hidden absolute opacity-80 top-0 -left-56 h-full z-0 root-anim"
                    src="images/meh22.png"
                    alt=""
                />
                <img
                    class="block dark:hidden absolute opacity-80 top-10 left-64 h-full z-0 root-anim"
                    src="images/meh33.png"
                    alt=""
                />
                <img
                    class="block dark:hidden absolute opacity-80 top-24 -left-0 h-full z-0 root-anim1"
                    src="images/meh44.png"
                    alt=""
                /> -->
            </div>
        </section>
        <section class="grid grid-flow-row gap-12 pb-32 md:pb-64">
            <div
                class="text-center md:text-start text-2xl text-textLight dark:text-textDark font-extrabold sm:text-3xl md:text-4xl lg:text-5xl"
            >
                <p class="text-center">Тарифы</p>
                <p class="text-center text-xl sm:text-2xl md:text-3xl">
                    Комплектом дешевле
                </p>
            </div>

            <Carusel class="sm:hidden" :slider="slider" />
            <div
                class="hidden sm:grid grid-cols-1 md:grid-cols-3 w-full items-center justify-between gap-9 px-8"
            >
                <div
                    v-for="slide in slider"
                    :key="slide"
                    class="flex flex-col justify-between gap-9 px-5 py-4 bg-bgLight dark:bg-[#818080] text-black dark:text-textDark w-full h-full rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 duration-300"
                >
                    <div class="flex flex-col gap-9">
                        <div class="w-full text-left">
                            <p class="text-center text-xl md:text-2xl">
                                {{ slide.name }}
                            </p>
                        </div>
                        <div
                            class="flex flex-col gap-4 w-full text-left text-base md:text-md"
                        >
                            <div
                                class="flex items-center justify-start gap-8 relative"
                            >
                                <div
                                    class="absolute top-0 -left-[7%] w-4 h-4 bg-currentLight"
                                ></div>
                                <p class="text-md md:text-lg">
                                    Назначение тарифа
                                </p>
                            </div>

                            {{ slide.space }}
                            <div
                                class="flex items-center justify-start gap-8 relative"
                            >
                                <div
                                    class="absolute top-0 -left-[7%] w-4 h-4 bg-currentLight"
                                ></div>
                                <p class="text-md md:text-lg">Преимущества</p>
                            </div>
                            {{ slide.description }}
                        </div>
                    </div>

                    <div
                        class="w-full text-left text-xs sm:text-md flex flex-col justify-center items-center gap-4"
                    >
                        <div
                            class="text-black sm:text-xs md:text-sm text-center flex justify-center gap-2 w-full"
                        >
                            <p
                                class="bg-accentLight dark:bg-accentDark py-1 px-2 rounded-xl text-black dark:text-textDark w-2/3"
                            >
                                Узнать больше
                            </p>
                        </div>
                        <span class="material-symbols-outlined size">
                            update
                        </span>
                        <p>Срок выполнения {{ slide.time }} месяца</p>
                        <p class="text-xl">{{ slide.price }}</p>
                    </div>
                </div>
            </div>
            <div
                class="hover:animate-pulse md:text-start text-xs text-textLight dark:text-textDark font-extrabold sm:text-sm lg:text-lg"
            >
                <p class="text-center">
                    Создайте собственный тариф с расчетом стоимости
                </p>
            </div>
        </section>
        <section
            class="flex flex-col gap-10 sm:gap-40 pb-64 text-textLight dark:text-textDark text-xs text-md md:text-lg"
        >
            <div class="flex justify-evenly items-center">
                <div
                    class="w-1/3 flex flex-col jastify-start md:text-start text-textLight dark:text-textDark font-extrabold"
                >
                    <p class="text-center">Закажите консультацию</p>
                    <SvgComponent1 />
                </div>

                <hr class="rotate-90 w-1/5" />

                <div
                    class="w-1/3 flex flex-col md:text-start text-textLight dark:text-textDark font-extrabold"
                >
                    <p class="text-center">Выберете или сформируйте тариф</p>
                    <SvgComponent2 />
                </div>
            </div>
            <div class="flex justify-evenly items-center">
                <div
                    class="w-1/3 flex flex-col md:text-start text-textLight dark:text-textDark font-extrabold"
                >
                    <p class="text-center">Внесите корректировки в проект </p>
                    <SvgComponent3 />
                </div>
                <hr class="rotate-90 w-1/5" />
                <div
                    class="w-1/3 flex flex-col md:text-start text-textLight dark:text-textDark font-extrabold"
                >
                    <p class="text-center">Принимайте готовое задание</p>
                    <SvgComponent4 />
                </div>
            </div>
        </section>
    </GuestLayout>
</template>

<script>
export default {
    data() {
        return {
            slider: [
                {
                    id: 1,
                    name: "Минимальный",
                    space: "Одностраничный сайт, чтобы заявить о себе в сети интернет! Подходит для фрилансеров,  небольшого бизнеса и продвижения конкретных услуг или товаров на одной странице",
                    description:
                        "Небольшая цена! Маленькие сроки ожидания готового проекта! Простая поддержка и сопровождение сайта!",
                    price: 11200,
                    info: {
                        insight: "seo",
                    },
                    time: "1 - 2",
                },
                {
                    id: 2,
                    name: "Классичесикй",
                    space: "Многостраничный сайт для решения задач среднего бизнеса",
                    description:
                        "Все, что необходимо для качественного сайта в комплекте.",
                    price: 20200,
                    info: {
                        insight: "seo",
                    },
                    time: "1 - 2",
                },
                {
                    id: 3,
                    name: "Бизнес",
                    space: "Многостраничный сайт премиум класса с дизайном наивысшего качества.",
                    description:
                        "Высший сорт дизайна позволяет клиенту проще ознакомится с сайтом, и окунутся в атмосферу вашего продукта.",
                    price: 31200,
                    info: {
                        insight: "seo",
                    },
                    time: "1 - 2",
                },
            ],
        };
    },
    props: {
        users: Object,
    },
    name: "Welcome",
    components: {
        Carusel,
    },
};
</script>

<style scoped>
.root-anim {
    animation: 20s linear 0s normal none infinite running rot;
}
.root-anim1 {
    animation: 10s linear 0s normal none infinite running rotre;
}

@keyframes rot {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
@keyframes rotre {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(-360deg);
    }
}

.unselectable {
    background-image: url(/images/animate_prewuve.gif);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
    -moz-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    user-select: none;
}
</style>
