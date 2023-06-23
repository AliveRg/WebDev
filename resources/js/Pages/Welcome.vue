<script setup>
import GuestLayout from "@/Layouts/GuestLayout.vue";

import { Head, Link } from "@inertiajs/vue3";
import Carusel from "@/Components/Carusel.vue";
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

                <img
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
                />
                <img
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
                />
            </div>
        </section>
        <section class="grid grid-flow-row gap-12 pb-64">
            <div
                class="text-center md:text-start text-2xl text-textLight dark:text-textDark font-extrabold sm:text-3xl md:text-4xl lg:text-5xl"
            >
                <p class="text-center">Тарифы</p>
                <p class="text-center text-xl sm:text-2xl md:text-3xl">
                    Комплектом дешевле
                </p>
            </div>

            <Carusel :slider="slider" />
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
    -moz-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    user-select: none;
}
</style>
