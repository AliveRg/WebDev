<script setup>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
</script>

<template>
    <div class="wrapper">
        <carousel
            v-bind="settings"
            :breakpoints="breakpoints"
            :wrapAround="true"
        >
            <slide v-for="slide in slider" :key="slide" class="w-full">
                <div
                    class="flex flex-col gap-5 px-5 py-4 bg-bgLight dark:bg-bgDark text-black dark:text-textDark w-full h-[600px] rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 duration-300"
                >
                    <div class="w-full text-left">
                        <p class="text-center text-3xl">{{ slide.name }}</p>
                    </div>
                    <div class="flex flex-col gap-4 w-full text-sm text-left">
                        <p class="text-xl">Назначение тарифа</p>
                        {{ slide.space }}
                        <p class="text-xl">Преиущества</p>
                        {{ slide.description }}
                    </div>
                    <div
                        class="text-black sm:text-ms md:text-base text-center flex justify-center gap-2 w-full"
                    >
                        <p
                            class="bg-accentLight dark:bg-accentDark py-1 px-2 rounded-xl text-black dark:text-textDark w-2/3"
                        >
                            Узнать больше
                        </p>
                    </div>
                    <div
                        class="w-full text-left flex flex-col justify-center items-center gap-4"
                    >
                        <span class="material-symbols-outlined size">
                            update
                        </span>
                        <p>Срок выполнения {{ slide.time }} месяца</p>
                        <p class="text-3xl">{{ slide.price }}</p>
                    </div>
                </div>
            </slide>

            <template #addons>
                <navigation />
                <pagination />
            </template>
        </carousel>
    </div>
</template>

<script>
export default {
    props: {
        slider: Object,
    },
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
                itemsToShow: 2.4,
            },
            // 1024 and up
            1400: {
                itemsToShow: 3.4,
            },
        },
    }),
};
</script>

<style scoped>
span.size {
    font-size: 40px;
    font-variation-settings: "OPSZ" 20;
}
.carousel__slide {
    padding: 25px 15px 25px 15px;
}
@media (min-width: 771px) {
    .carousel__slide {
        padding: 35px 25px 35px 25px;
    }
}
/* .carousel__slide--active {
    transform: scale(1.1);
}
.carousel__slide--sliding {
    transition: 0.5s;
} */
</style>
