<script setup>
import GuestLayout from "@/Layouts/GuestLayout.vue";

import { Head, Link } from "@inertiajs/vue3";
</script>

<template>
    <GuestLayout> </GuestLayout>
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
