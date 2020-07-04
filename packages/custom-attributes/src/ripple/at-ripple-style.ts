export const rippleStyleObj = {
    "[data-animation]": { position: "relative", overflow: "hidden" },
    ".ripple": {
      width: "2px",
      height: "2px",
      position: "absolute",
      borderRadius: "50%",
      backgroundColor: "rgba(255, 255, 255, 0.5)",
      WebkitAnimation: "rippleEffect 0.5s ease-in-out",
      animation: "rippleEffect 0.5s ease-in-out"
    },
    "@-webkit-keyframes rippleEffect": {
      "0%": { WebkitTransform: "scale(1)", transform: "scale(1)" },
      "100%": {
        opacity: "0",
        WebkitTransform: "scale(var(--scale))",
        transform: "scale(var(--scale))"
      }
    },
    "@keyframes rippleEffect": {
      "0%": { WebkitTransform: "scale(1)", transform: "scale(1)" },
      "100%": {
        opacity: "0",
        WebkitTransform: "scale(var(--scale))",
        transform: "scale(var(--scale))"
      }
    }
  };
  