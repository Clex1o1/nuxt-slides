---
title: Transitions
---

```css
.slide-right-enter,
.slide-right-leave-to {
  opacity: 0;
}
.slide-right-leave-to {
  transform: translateX(-10vw);
}

.slide-right-enter {
  transform: translateX(10vw);
}
.slide-left-enter,
.slide-left-leave-to {
  opacity: 0;
}

.slide-left-leave-to {
  transform: translateX(10vw);
}

.slide-left-enter {
  transform: translateX(-10vw);
}
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  transition: opacity 150ms ease-in-out, transform 150ms ease-in-out;
}
```
