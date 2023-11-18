/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        fontFamily: {
            nunito: "Nunito, sans-serif"
        },

        extend: {
            backgroundImage: {
                search: "url(/icons/searchicon.svg)",
            },
            colors: {
                light: "hsl(0, 0%, 98%)"
            }
        },
    },
    plugins: [],
}