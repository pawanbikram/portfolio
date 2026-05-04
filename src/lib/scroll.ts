export function scrollToId(id: string) {
  if (typeof window !== "undefined" && id === "top") {
    window.history.replaceState(null, "", "#top");
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  const el = document.getElementById(id);
  if (!el) return;
  // Keep URL in sync for mobile tab navigation + deep links.
  if (typeof window !== "undefined") {
    const hash = `#${id}`;
    if (window.location.hash !== hash) {
      window.history.replaceState(null, "", hash);
    }
  }
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}
