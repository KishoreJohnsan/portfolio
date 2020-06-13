module.exports = {
  purge: ["*.html"],
  theme: {  
    screens: {
      'xs': '360px',    
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',      
    },
    colors: {},
    textColor: {
      primary: "var(--color-text-primary)",
      secondary: "var(--color-text-secondary)",
      tertiary: "var(--color-text-tertiary)",
      default:"var(--color-text-default)"
    },
    backgroundColor: {
      primary: "var(--color-bg-primary)",
      secondary: "var(--color-bg-secondary)",
      tertiary: "var(--color-bg-tertiary)",
      default: "var(--color-bg-default)",
      btnPrimary:"var(--color-btn-primary)",
      btnSecondary:"var(--color-btn-secondary)",
      btnDefault:"var(--color-btn-default)",
    },
    borderColor: {
      primary:"var(--color-border-primary)",
      secondary:"var(--color-border-secondary)"
    },
    fontFamily: {
      display: ["Carter One", "cursive"],
      body: ["Manrope", "sans-serif"],
    },
  },
  variants: {},
  plugins: [],
};
