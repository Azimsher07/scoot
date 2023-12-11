/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{html,js}",
    "./components/**/*.{html,js}",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/public/images/homeImages/heroImg.png')",
        aboutHero: "url('/public/images/otherPages/heroOfOtherPages.png')",
        aboutHeroSM: "url('/public/images/otherPages/aboutHeroSM.png')",
      },
      fontFamily: {
        mf: "spaceMono",
        sf: "lexend",
      },
      colors: {
        yw: {
          DEFAULT: "#FCB72B",
          1: "#FFF4DF",
        },
        gr: {
          DEFAULT: "#495567",
          1: "#939CAA",
          2: "#E5ECF4",
          3: "#F2F5F9",
          4: "#2E3A58",
          5: "#333A44",
        },
        wt: "#fff",
      },

      container: {
        center: true,
        screens: {
          sm: "375px",
          md: "760px",
          xl: "1440px",
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const columnFuntion = {
        ".smPadding": {
          paddingLeft: "32px",
          paddingRight: "32px",
        },
        ".dfCenter": {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
        ".dfBetween": {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        },
        ".dfCol": {
          display: "flex",
          flexDirection: "column",
        },
        ".dfRow": {
          display: "flex",
          flexDirection: "row",
        },
      };
      addUtilities(columnFuntion, ["responsive", "hover"]);
    },
  ],
};
