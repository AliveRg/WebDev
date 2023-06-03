<script setup>
import GuestLayout from "@/Layouts/GuestLayout.vue";

import { Head, Link } from "@inertiajs/vue3";
</script>

<template>
    <GuestLayout>
        <div class="grid grid-flow-row md:grid-flow-col gap-10 justify-center">
            <div
                class="flex flex-col z-10 gap-4 items-center justify-center md:items-start md:gap-10 overflow-hidden text-center md:text-start text-3xl text-textLight dark:text-textDark font-extrabold sm:text-4xl md:text-5xl lg:text-6xl"
            >
                <p>
                    Лендинг со <br />
                    скидкой
                    <span
                        class="text-accentLight dark:text-accentDark drop-shadow-[0px_5px_5px_rgba(242,207,102,.65)] dark:drop-shadow-[0px_5px_5px_rgba(242,174,48,.55)]"
                        >20%</span
                    >
                </p>
                <div
                    class="text-black text-sm sm:text-lg md:text-xl text-center grid gap-2"
                >
                    <p
                        class="bg-accentLight dark:bg-accentDark py-1 px-3 rounded-xl text-textLight dark:text-textDark"
                    >
                        Посмотреть тарифы
                    </p>
                </div>
            </div>
            <div class="max-w-lg relative">
                <img
                    class="relative z-10"
                    src="images/preview-design.webp"
                    alt=""
                />
                <img
                    class="hidden dark:block dark:absolute -top-32 left-44 h-full z-0"
                    src="images/meh1.png"
                    alt=""
                />
                <img
                    class="hidden dark:block dark:absolute top-0 -left-44 h-full z-0"
                    src="images/meh2.png"
                    alt=""
                />
                <img
                    class="hidden dark:block dark:absolute top-10 left-64 h-full z-0"
                    src="images/meh3.png"
                    alt=""
                />
                <img
                    class="hidden dark:block dark:absolute top-24 -left-32 h-full z-0"
                    src="images/meh4.png"
                    alt=""
                />
                <img
                    class="block dark:hidden absolute -top-32 left-44 h-full z-0"
                    src="images/meh12.png"
                    alt=""
                />
                <img
                    class="block dark:hidden absolute top-0 -left-44 h-full z-0"
                    src="images/meh22.png"
                    alt=""
                />
                <img
                    class="block dark:hidden absolute top-10 left-64 h-full z-0"
                    src="images/meh33.png"
                    alt=""
                />
                <img
                    class="block dark:hidden absolute top-24 -left-32 h-full z-0"
                    src="images/meh44.png"
                    alt=""
                />
            </div>
        </div>
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
    components: {},
};
</script>

<style></style>
