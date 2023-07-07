<script setup>
import { ref } from "vue";
import ApplicationLogo from "@/Components/ApplicationLogo.vue";
import { Link } from "@inertiajs/vue3";
import { useDark, useToggle } from "@vueuse/core";
</script>

<template>
    <header class="w-full px-4 pt-8 bg-bgLight dark:bg-bgDark">
        <section
            class="w-full grid grid-flow-row gap-[20px] md:gap-2 max-w-sm sm:max-w-lg sm:grid-cols-2 mx-auto md:grid-cols-4 md:max-w-4xl lg:max-w-[1380px]"
        >
            <div
                class="text-2xl text-textLight dark:text-textDark font-extrabold uppercase flex items-center justify-between sm:justify-start gap-4 sm:items-center sm:gap-8 md:order-1 md:text-3xl lg:text-5xl gif"
            >
                <img src="images/logo.gif" alt="" class="h-16 sm:h-[80PX]" />
                <!-- <video src="images/logo.gif" class="h-16 sm:h-[80PX]"></video> -->
                <p
                    class="text-sm font-normal sm:text-xs sm:hidden md:text-sm lg:text-xl"
                >
                    Студия создания сайтов
                </p>
            </div>
            <div
                class="text-lg text-textLight dark:text-textDark font-extrabold leading-7 flex justify-start sm:justify-end md:order-3 md:items-center lg:text-2xl hover:animate-pulse"
            >
                <a
                    class="md:hidden flex items-center gap-2"
                    href="tel:+79192897505"
                    ><span class="material-symbols-outlined">
                        phone_forwarded
                    </span>
                    +7 (919) 289 75 05</a
                >
                <a
                    class="hidden md:flex md:items-center md:gap-4"
                    href="tel:+79192897505"
                    ><span class="material-symbols-outlined">
                        phone_forwarded
                    </span>
                    +7 (919) 28...</a
                >
            </div>
            <div
                class="w-full flex md: sm:col-span-2 md:order-4 md:col-span-4 md:justify-between"
            >
                <div
                    class="flex w-full justify-start items-center sm:col-span-2 md:order-4 md:col-span-2 md:justify-start md:gap-10 md:flex-row-reverse gap-12"
                >
                    <div class="text-black text-md text-center grid gap-2">
                        <p
                            class="bg-accentLight dark:bg-accentDark py-1 px-3 rounded-xl text-black dark:text-textDark"
                        >
                            Обратный Звонок
                        </p>
                    </div>

                    <label
                        class="switch relative inline-block w-[60px] h-[34px]"
                    >
                        <input
                            type="checkbox"
                            class="hidden"
                            :checked="isDark"
                            @click="toggleDark(), toggleCheckbox"
                        />
                        <div class="slider round"></div>
                    </label>
                </div>
                <div
                    class="hidden sm:flex text-textLight dark:text-textDark justify-self-start items-center"
                >
                    <p
                        class="text-sm font-normal sm:text-sm md:text-md lg:text-xl"
                    >
                        Студия создания сайтов
                    </p>
                </div>
            </div>

            <div
                class="flex justify-between items-center font-bold text-sm text-textLight dark:text-textDark sm:col-span-2 md:order-2 md:text-lg lg:text-2xl"
            >
                <a class="" href="">Расчет стоимости</a>
                <a class="" href="">Услуги</a>
                <a class="" href="">Портфолио</a>
            </div>
            <hr
                class="w-full border-black dark:border-accentDark outline-2 mt-2 sm:col-span-2 md:order-5 md:col-span-4"
            />
        </section>
    </header>

    <div class="bg-bgLight dark:bg-bgDark overflow-hidden">
        <div
            class="max-w-sm mx-auto sm:max-w-lg md:max-w-4xl lg:max-w-[1380px]"
        >
            <slot />
        </div>
    </div>
</template>

<script>
const isDark = useDark();
const toggleDark = useToggle(isDark);

export default {
    data() {
        return {
            checkbox: isDark,
        };
    },
    methods: {
        toggleCheckbox() {
            this.$emit("setCheckboxVal", this.isDark);
        },
    },
};
</script>

<style>
.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
}

.slider:before {
    position: absolute;
    content: "";
    background-image: url(/images/sun.png);
    background-size: 26px 26px;
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    -webkit-transition: 0.4s;
    opacity: 1;
    transition: 0.4s;
}
.slider:after {
    position: absolute;
    content: "";
    background-image: url(/images/moon.svg);
    background-size: 26px 26px;
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    transform: rotate(0deg);
    opacity: 0;
}

input:checked + .slider {
    background-color: #f2ae30;
}

input:focus + .slider {
    box-shadow: 0 0 1px #101010;
}

input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px) rotate(90deg);
    opacity: 0;
}
input:checked + .slider:after {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px) rotate(100deg);
    opacity: 1;
}

.slider.round {
    border-radius: 34px;
}

.slider.round:before {
    border-radius: 50%;
}
</style>
