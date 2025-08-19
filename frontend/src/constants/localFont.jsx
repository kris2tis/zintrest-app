import localFont from "next/font/local";

const vazirFont = localFont({
    src: [
        {
            path: "../../public/fonts/vazir/Vazirmatn-Black.woff2",
            weight: "800",
            style: "black",
        },
        {
            path: "../../public/fonts/vazir/Vazirmatn-Bold.woff2",
            weight: "600",
            style: "bold",
        },
        {
            path: "../../public/fonts/vazir/Vazirmatn-Medium.woff2",
            weight: "500",
            style: "normal",
        },
        {
            path: "../../public/fonts/vazir/Vazirmatn-Regular.woff2",
            weight: "400",
            style: "regular",
        },
    ],
    variable: "--font-vazir",
    style: "normal",
    display: "block",
});

export default vazirFont;
