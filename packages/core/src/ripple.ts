import { injectStyle } from 'styl-injector';

const rippleStyleObj = {
  "[data-animation]": { position: "relative", overflow: "hidden" },
  ".ripple": {
    width: "2px",
    height: "2px",
    position: "absolute",
    borderRadius: "50%",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    WebkitAnimation: "rippleEffect 0.5s ease-in-out",
    animation: "rippleEffect 0.5s ease-in-out",
  },
  "@-webkit-keyframes rippleEffect": {
    "0%": { WebkitTransform: "scale(1)", transform: "scale(1)" },
    "100%": {
      opacity: "0",
      WebkitTransform: "scale(var(--scale))",
      transform: "scale(var(--scale))",
    },
  },
  "@keyframes rippleEffect": {
    "0%": { WebkitTransform: "scale(1)", transform: "scale(1)" },
    "100%": {
      opacity: "0",
      WebkitTransform: "scale(var(--scale))",
      transform: "scale(var(--scale))",
    },
  },
};

export function applyRippleEffect(htmlElement: HTMLElement) : void {
  injectStyle(rippleStyleObj, "at-ripple-style", false);

  htmlElement.setAttribute("data-animation", "ripple");
  htmlElement.addEventListener("mousedown", function (e) {
    const x = e.pageX - this.offsetLeft;
    const y = e.pageY - this.offsetTop;
    const w = this.offsetWidth.toString();
    const ripple = document.createElement("span");
    ripple.className = "ripple";
    ripple.style.left = x + "px";
    ripple.style.top = y + "px";
    ripple.style.setProperty("--scale", w);
    this.appendChild(ripple);
    setTimeout(() => {
      ripple.remove();
    }, 500);
  });
}

/*
[data-animation] {
    position: relative;
    overflow: hidden;
}

.ripple {
    width: 2px;
    height: 2px;
    position: absolute;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.5);
    -webkit-animation: rippleEffect 0.5s ease-in-out;
    animation: rippleEffect 0.5s ease-in-out;
}

@-webkit-keyframes rippleEffect {
    0% {
        -webkit-transform: scale(1);
        transform: scale(1);
    }

    100% {
        opacity: 0;
        -webkit-transform: scale(var(--scale));
        transform: scale(var(--scale));
    }
}

@keyframes rippleEffect {
    0% {
        -webkit-transform: scale(1);
        transform: scale(1);
    }

    100% {
        opacity: 0;
        -webkit-transform: scale(var(--scale));
        transform: scale(var(--scale));
    }
}
*/