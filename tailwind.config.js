import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.vue",
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                transparent: "transparent",
                currentDark: "#F1F1F1",
                currentLight: "#91cac5",
                accentDark: "#F2AE30",
                accentLight: "#F2CF66",
                textDark: "#F2E3D5",
                textLight: "#506266",
                bgDark: "#1f1f1f",
                bgLight: "#fff",
            },
        },
    },

    plugins: [forms],
};
