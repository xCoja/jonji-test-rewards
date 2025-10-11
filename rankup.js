const claimButtons = document.querySelectorAll('.claim-btn');
const popup = document.getElementById('popup');
const popupText = document.getElementById('popup-text');
const closeBtn = document.getElementById('close-btn');

claimButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const rank = btn.dataset.rank;
    const wager = btn.dataset.wager;
    const reward = btn.dataset.reward;

    // Customize popup text based on the card clicked
    popupText.innerHTML = `If you met the wager requirement of ${wager}, open a ticket in our Discord to receive your ${reward} bonus.`;

    popup.style.display = 'flex';
  });
});







// ===== Claim Bonus Popup (for all card buttons) =====
const claimBonusOverlay = document.getElementById('claim-bonus-overlay');
const claimBonusClose = document.getElementById('claim-bonus-close');
const popupTitleEl = claimBonusOverlay.querySelector('h2');

function openClaimBonus(rankLabel) {
  // Optional: show which rank the user clicked
  if (rankLabel) {
    popupTitleEl.textContent = `How to Claim Your Bonus — ${rankLabel}`;
  } else {
    popupTitleEl.textContent = 'How to Claim Your Bonus';
  }

  claimBonusOverlay.style.display = 'flex';
  document.body.classList.add('modal-open');
}

function closeClaimBonus() {
  claimBonusOverlay.style.display = 'none';
  document.body.classList.remove('modal-open');
}

// Open when clicking ANY .claim-btn
document.addEventListener('click', (e) => {
  const btn = e.target.closest('.claim-btn');
  if (!btn) return;

  e.preventDefault();

  // Try to grab the rank text from the same card (optional nicety)
  const card = btn.closest('.card');
  const rankText = card?.querySelector('.rank-line')?.textContent?.trim();

  openClaimBonus(rankText);
});

// Close on X
claimBonusClose.addEventListener('click', (e) => {
  e.stopPropagation();
  closeClaimBonus();
});

// Close on overlay click (but not when clicking inside content)
claimBonusOverlay.addEventListener('click', (e) => {
  if (e.target === claimBonusOverlay) closeClaimBonus();
});

// Close on Esc
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeClaimBonus();
});



















