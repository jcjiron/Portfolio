/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: {
          "100": "#18181b",
          "200": "#111827",
        },
        dimgray: "#71717a",
        gold: "#ffd015",
        gainsboro: "#e5e7eb",
        whitesmoke: {
          "100": "#f4f4f5",
          "200": "#f0f2f5",
        },
        palegoldenrod: "rgba(255, 253, 186, 0.5)",
        goldenrod: "#b69900",
      },
      spacing: {},
      fontFamily: {
        merriweather: "Merriweather",
        karla: "Karla",
        inter: "Inter",
      },
      borderRadius: {
        "29xl": "48px",
        "281xl": "300px",
        "980xl": "999px",
        "13xl": "32px",
      },
    },
    fontSize: {
      sm: "14px",
      lg: "18px",
      "3xl": "22px",
      "37xl": "56px",
      "26xl": "45px",
      "15xl": "34px",
      "9xl": "28px",
      "32xl": "51px",
      "22xl": "41px",
      "12xl": "31px",
      base: "16px",
      xs: "12px",
      "27xl": "46px",
      "18xl": "37px",
      "53xl": "72px",
      "39xl": "58px",
      "24xl": "43px",
      inherit: "inherit",
    },
    screens: {
      mq1275: {
        raw: "screen and (max-width: 1275px)",
      },
      mq1100: {
        raw: "screen and (max-width: 1100px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
