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
  const feed = document.querySelector("main");

  if (feed) {
    feed.querySelectorAll('div[data-id], div[role="listitem"]')
      .forEach((post) => {

        // Find all <div> tags inside this specific post
        const divs = [...post.querySelectorAll('div')]

        // Check if ANY <div> tag contains ONLY the suggested word (exact match)
        const isSuggested = divs.some(el => suggestedLabels.includes(el.innerText.trim().toLowerCase()))

        if (isSuggested) {
          console.log(`1 post was removed from the feed (suggested post)`)
          post.style.display = 'none';
          post.remove();
        }
      });
  }
}

function observePageChanges() {
  setInterval(() => {
    removeSuggestedPosts();
  }, 500);
}

document.addEventListener("DOMContentLoaded", removeSuggestedPosts);
document.addEventListener("DOMContentLoaded", observePageChanges);
