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
        hero: "url('/images/homeImages/heroImg.png')",
        aboutHero: "url('/images/otherPages/heroOfOtherPages.png')",
        aboutHeroSM: "url('/images/otherPages/aboutHeroSM.png')",
        oPHeroSM: "url('/images//otherPages/careerHero.png')",
        oPHeroXL: "url('/images//otherPages/careerHeroBig.png')",
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
          md: "700px",
          lg: "1024",
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
        ".mdPadding": {
          paddingLeft: "100px",
          paddingRight: "100px",
        },
        ".lgPadding": {
          paddingLeft: "165px",
          paddingRight: "165px",
        },
        ".xlPadding": {
          paddingLeft: "165px",
          paddingRight: "165px",
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
