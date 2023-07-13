<script setup>
// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();
</script>
<template>
    <swiper-container
        speed="500"
        navigation="true"
        pagination="true"
        scrollbar="true"
    >
        <swiper-slide>
            <div class="flex w-full items-center">
                <div class="flex items-end justify-center gap-10">
                    <img class="w-3/5" src="images/macbook4.webp" alt="" />
                    <img class="w-2/12" src="images/iphone2.webp" alt="" />
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="flex w-full items-center">
                <div class="flex items-end justify-center gap-10">
                    <img class="w-3/5" src="images/macbook2.webp" alt="" />
                    <img class="w-2/12" src="images/iphone.webp" alt="" />
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="flex w-full items-center">
                <div class="flex items-end justify-center gap-10">
                    <img class="w-3/5" src="images/macbook.webp" alt="" />
                    <img class="w-2/12" src="images/iphone1.webp" alt="" />
                </div>
            </div>
        </swiper-slide>
        ...
    </swiper-container>
</template>

<script>
// // swiper element
// const swiperEl = document.querySelector("swiper-container");

// // swiper parameters
// const swiperParams = {
//     slidesPerView: 1,
//     breakpoints: {
//         640: {
//             slidesPerView: 2,
//         },
//         1024: {
//             slidesPerView: 3,
//         },
//     },
//     on: {
//         init() {
//             // ...
//         },
//     },
// };

export default {};
</script>

<style></style>
