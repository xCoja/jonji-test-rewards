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

closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
});

// Close popup if user clicks outside content
popup.addEventListener('click', (e) => {
  if(e.target === popup){
    popup.style.display = 'none';
  }
});
