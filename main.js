// Copy-email button (shown only when the Clipboard API is available)
(() => {
  const copyButton = document.querySelector(".copy");
  if (!copyButton || !navigator.clipboard) return;

  const label = copyButton.textContent;
  let timer;
  copyButton.hidden = false;

  copyButton.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(copyButton.dataset.email);
      copyButton.textContent = copyButton.dataset.done;
    } catch {
      copyButton.textContent = copyButton.dataset.fail;
    }
    clearTimeout(timer);
    timer = setTimeout(() => {
      copyButton.textContent = label;
    }, 2000);
  });
})();
