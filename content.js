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

        // Find all <p> tags inside this specific post
        const paragraphs = post.querySelectorAll('p');

        // Check if ANY <p> tag contains ONLY the suggested word (exact match)
        const isSuggested = Array.from(paragraphs).some(p =>
          suggestedLabels.includes(p.innerText.trim().toLowerCase())
        );

        if (isSuggested) {
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
