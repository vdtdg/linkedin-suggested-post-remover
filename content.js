const feedSelector = 'div[data-finite-scroll-hotkey-context="FEED"]';
const suggestedLabels = [
  "suggested",
  "sugerido",
  "suggerito",
  "vorgeschlagen",
  "suggéré",
  "предложено",
  "aanbevolen",
  "推薦",
  "推荐",
  "提案された",
  "추천",
  "önerilen",
  "suggerert",
  "foreslået",
  "ehdotettu",
];

function removeSuggestedPosts() {
  const feed = document.querySelector(feedSelector);

  if (feed) {
    feed.querySelectorAll('[data-view-name="feed-full-update"]')
      .forEach((post) => {
        const label = post.querySelector(".update-components-header__text-view");
        if (label && suggestedLabels.includes(label.textContent.trim().toLowerCase())) {
          // post.closest('[data-id^="urn:li:activity:"]').remove();
          post.style.border = '2px solid red';
        }
      });
  }
}

function observePageChanges() {
  setInterval(() => {
    if (window.location.href.includes("/feed")) {
      const button = document.querySelector(buttonSelector);
      if (!button) {
        removeSuggestedPosts();
      }
    }
  }, 500);
}

document.addEventListener("DOMContentLoaded", removeSuggestedPosts);
document.addEventListener("DOMContentLoaded", observePageChanges);
