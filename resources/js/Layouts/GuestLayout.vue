<script setup>
import { ref } from "vue";
import ApplicationLogo from "@/Components/ApplicationLogo.vue";
import { Link } from "@inertiajs/vue3";
</script>

<template>
    <header class="w-full px-2 pt-8 bg-bgLight/40">
        <section class="w-full flex flex-col gap-12 justify-center">
            <div
                class="text-2xl text-black font-extrabold uppercase flex items-center justify-center gap-8"
            >
                <p>R & G</p>
                <p class="text-sm font-normal">Студия создания сайтов</p>
            </div>
            <div class="w-full flex justify-between items-center">
                <div
                    class="bg-currentLight text-black text-md text-center rounded-xl py-1 px-3"
                >
                    <p>Обратный Звонок</p>
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
        </section>
    </header>

    <div
        class="w-full sm:max-w-md mt-6 px-6 py-4 bg-white dark:bg-gray-800 shadow-md overflow-hidden sm:rounded-lg"
    >
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
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
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
    transform: translateX(26px);
}

.slider.round {
    border-radius: 34px;
}

.slider.round:before {
    border-radius: 50%;
}
</style>
