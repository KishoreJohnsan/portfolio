module.exports = {
  purge: ["*.html"],
  theme: {
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
      btnSecondary:"var(--color-btn-secopndary)",
    },
    borderColor: {
      primary:"var(--color-border-primary)",
      secondary:"var(--color-border-secondary)"
    },
    fontFamily: {
      display: ["Gilroy", "sans-serif"],
      body: ["Manrope", "sans-serif"],
    },
  },
  variants: {},
  plugins: [],
};
