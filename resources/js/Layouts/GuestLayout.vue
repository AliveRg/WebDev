<script setup>
import { ref } from "vue";
import ApplicationLogo from "@/Components/ApplicationLogo.vue";
import { Link } from "@inertiajs/vue3";
</script>

<template>
    <header class="w-full px-2 py-8 bg-bgLight/40">
        <section class="w-full grid grid-flow-row gap-[27px] justify-center">
            <div
                class="text-2xl text-black font-extrabold uppercase flex items-center justify-center gap-8"
            >
                <p>R & G</p>
                <p class="text-sm font-normal">Студия создания сайтов</p>
            </div>
            <div class="text-xl font-extrabold">
                <a href="">+7 (919) 289 75 05</a>
            </div>
            <div class="w-full flex justify-between items-center">
                <div class="text-black text-md text-center grid gap-2">
                    <p class="bg-currentLight py-1 px-3 rounded-xl">
                        Обратный Звонок
                    </p>
                </div>

                <label class="switch relative inline-block w-[60px] h-[34px]">
                    <input
                        type="checkbox"
                        class="hidden"
                        @click="toggleCheckbox"
                    />
                    <div class="slider round"></div>
                </label>
            </div>
            <div class="flex justify-between items-center font-bold text-sm">
                <a class="" href="">Расчет стоимости</a>
                <a class="" href="">Услуги</a>
                <a class="" href="">Портфолио</a>
            </div>
            <hr class="w-full border-black outline-2" />
        </section>
    </header>

    <div class="">
        <slot />
    </div>
</template>

<script>
export default {
    data() {
        return {
            checkbox: false,
        };
    },
    methods: {
        toggleCheckbox() {
            this.checkbox = !this.checkbox;
            this.$emit("setCheckboxVal", this.checkbox);
        },
        props: {
            users: Object,
        },
        name: "Welcome",
        components: {},
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
    background-color: #101010;
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
