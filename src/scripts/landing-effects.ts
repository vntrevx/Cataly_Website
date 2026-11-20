import { animate } from "motion/mini";

const easing: [number, number, number, number] = [0.22, 1, 0.36, 1];
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const hero = document.querySelector<HTMLElement>("[data-hero]");
const portrait = hero?.querySelector<HTMLImageElement>("[data-hero-art] img");

if (!reducedMotion.matches) {
  hero?.querySelectorAll<HTMLElement>("[data-hero-entrance]").forEach((element, index) => {
    animate(element, { opacity: [.72, 1], transform: ["translateY(12px)", "none"] }, {
      duration: .66, delay: index * .07, ease: easing,
    });
  });
  if (portrait) animate(portrait, { opacity: [.84, 1] }, { duration: .9, ease: easing });
}

const reveals = document.querySelectorAll<HTMLElement>("[data-scroll-reveal]");
if ("IntersectionObserver" in window && !reducedMotion.matches) {
  const observer = new IntersectionObserver((entries) => {
    for (const { target, intersectionRatio } of entries) {
      if (intersectionRatio < .15) continue;
      observer.unobserve(target);
      if (reducedMotion.matches) continue;
      animate(target, { opacity: [.68, 1], translate: ["0 12px", "none"] }, { duration: .7, ease: easing });
    }
  }, { threshold: .15 });
  reveals.forEach((element) => observer.observe(element));
}

if (hero && portrait) {
  let frame: number | undefined;

  const reset = () => {
    if (frame !== undefined) cancelAnimationFrame(frame);
    frame = undefined;
    hero.removeAttribute("data-portrait-active");
    for (const property of ["--portrait-x", "--portrait-y", "--light-x", "--light-y"]) {
      hero.style.removeProperty(property);
    }
  };

  hero.addEventListener("pointermove", (event) => {
    if (event.pointerType !== "mouse" || reducedMotion.matches) return;
    if (frame !== undefined) cancelAnimationFrame(frame);

    frame = requestAnimationFrame(() => {
      frame = undefined;
      const bounds = hero.getBoundingClientRect();
      const x = Math.max(-1, Math.min(1, (event.clientX - bounds.left) / bounds.width * 2 - 1));
      const y = Math.max(-1, Math.min(1, (event.clientY - bounds.top) / bounds.height * 2 - 1));
      hero.style.setProperty("--portrait-x", `${(x * 12).toFixed(2)}px`);
      hero.style.setProperty("--portrait-y", `${(y * 8).toFixed(2)}px`);
      hero.style.setProperty("--light-x", `${(x * 18).toFixed(2)}%`);
      hero.style.setProperty("--light-y", `${(y * 14).toFixed(2)}%`);
      hero.setAttribute("data-portrait-active", "");
    });
  }, { passive: true });

  hero.addEventListener("pointerleave", reset);
  hero.addEventListener("pointercancel", reset);
  window.addEventListener("blur", reset);
  reducedMotion.addEventListener("change", reset);
}

const copy = document.querySelector<HTMLButtonElement>("[data-copy-example]");
const example = document.querySelector<HTMLElement>("[data-example]");
const status = document.querySelector<HTMLElement>("#copy-status");
if (copy && example && status && navigator.clipboard?.writeText) {
  copy.hidden = false;
  copy.addEventListener("click", async () => {
    try {
      const prompt = example.textContent.trim().replace(/^“|”$/g, "");
      await navigator.clipboard.writeText(prompt);
      copy.textContent = "Prompt copied";
      status.textContent = "The example prompt was copied to your clipboard.";
    } catch {
      copy.textContent = "Try copying again";
      status.textContent = "Copying failed. You can select and copy the example text manually.";
    }
  });
}
