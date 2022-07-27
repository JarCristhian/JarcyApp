export const textAnimate = {
  offscreen: { y: 100, opacity: 0 },
  onscreen: { y: 0, opacity: 1, transition: { type: "spring", bounce: 0.2, duration: 0.5 } },
};

export const imageAnimate = {
  offscreen: { x: 100, opacity: 0 },
  onscreen: {
    x: 0,
    opacity: 1,
    rotate: [0, -10, 0],
    transition: { type: "spring", bounce: 0.4, duration: 1 },
  },
};
