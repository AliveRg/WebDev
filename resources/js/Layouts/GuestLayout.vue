<script setup>
import { ref } from "vue";
import ApplicationLogo from "@/Components/ApplicationLogo.vue";
import { Link } from "@inertiajs/vue3";
import { useDark, useToggle } from "@vueuse/core";
</script>

<template>
    <header class="w-full px-4 pt-8 bg-bgLight dark:bg-bgDark"></header>

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
