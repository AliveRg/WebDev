<script setup>
import GuestLayout from "@/Layouts/GuestLayout.vue";

import { Head, Link } from "@inertiajs/vue3";
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
</script>

<template>
    <GuestLayout>
        <section
            class="unselectable grid grid-flow-row md:grid-flow-col gap-10 justify-center pt-32 pb-64 px-4"
        >
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
                <div class="relative z-10 flex justify-center gap-2 items-end">
                    <img
                        class="w-3/4"
                        src="images/preview-design.webp"
                        alt=""
                    />
                    <img
                        class="w-1/6 h-1/2"
                        src="images/preview-iphone.webp"
                        alt=""
                    />
                </div>

                <img
                    class="hidden dark:block dark:absolute -top-32 left-44 h-full z-0 root-anim1"
                    src="images/meh1.png"
                    alt=""
                />
                <img
                    class="hidden dark:block dark:absolute top-0 -left-44 h-full z-0 root-anim"
                    src="images/meh2.png"
                    alt=""
                />
                <img
                    class="hidden dark:block dark:absolute top-10 left-64 h-full z-0 root-anim"
                    src="images/meh3.png"
                    alt=""
                />
                <img
                    class="hidden dark:block dark:absolute top-24 -left-0 h-full z-0 root-anim1"
                    src="images/meh4.png"
                    alt=""
                />
                <img
                    class="block dark:hidden absolute opacity-60 dark:opacity-100 -top-32 left-44 h-full z-0 root-anim1"
                    src="images/meh12.png"
                    alt=""
                />
                <img
                    class="block dark:hidden absolute opacity-60 dark:opacity-100 top-0 -left-44 h-full z-0 root-anim"
                    src="images/meh22.png"
                    alt=""
                />
                <img
                    class="block dark:hidden absolute opacity-60 dark:opacity-100 top-10 left-64 h-full z-0 root-anim"
                    src="images/meh33.png"
                    alt=""
                />
                <img
                    class="block dark:hidden absolute opacity-60 dark:opacity-100 top-24 -left-0 h-full z-0 root-anim1"
                    src="images/meh44.png"
                    alt=""
                />
            </div>
        </section>
        <section class="grid grid-flow-row justify-center gap-12 pb-64">
            <div
                class="text-center md:text-start text-2xl text-textLight dark:text-textDark font-extrabold sm:text-3xl md:text-4xl lg:text-5xl"
            >
                <p class="text-center">Тарифы</p>
                <p class="text-center text-xl sm:text-2xl md:text-3xl">
                    Комплектом дешевле
                </p>
            </div>

            <carousel v-bind="settings" :breakpoints="breakpoints">
                <slide v-for="slide in 3" :key="slide">
                    <div class="flex justify-center w-full items-center my-16">
                        <div
                            class="carousel__item bg-currentLight h-[333px] w-[213px] md:w-[256px] md:h-[400px] lg:w-[369px] lg:h-[570px] rounded-xl shadow-md hover:shadow-xl hover:scale-105 duration-300"
                        >
                            {{ slide }}
                        </div>
                    </div>
                </slide>

                <template #addons>
                    <navigation />
                    <pagination />
                </template>
            </carousel>
        </section>
    </GuestLayout>
</template>

<script>
export default {
    data() {
        return {};
    },
    props: {
        users: Object,
    },
    name: "Welcome",
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation,
    },
    data: () => ({
        // carousel settings
        settings: {
            itemsToShow: 1,
        },
        // breakpoints are mobile first
        // any settings not specified will fallback to the carousel settings
        breakpoints: {
            // 700px and up
            771: {
                itemsToShow: 1.5,
            },
            // 1024 and up
            1024: {
                itemsToShow: 2.4,
            },
        },
    }),
};
</script>

<style>
.root-anim {
    animation: 20s linear 0s normal none infinite running rot;
}
.root-anim1 {
    animation: 10s linear 0s normal none infinite running rot;
}
@keyframes rot {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

.unselectable {
    -moz-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    user-select: none;
}
</style>
