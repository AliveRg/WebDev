import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.vue",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                transparent: "transparent",
                currentDark: "#",
                currentLight: "#91cac5",
                accentDark: "#",
                accentLight: "#51c1b7",
                textDark: "#",
                textLight: "#47716b",
                bgDark: "#",
                bgLight: "#2ea99e",
            },
        },
    },

    plugins: [forms],
};
