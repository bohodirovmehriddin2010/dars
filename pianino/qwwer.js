document.querySelectorAll('.key').forEach(key => {
    key.addEventListener('mousedown', () => {
        playSound(key.dataset.note);
        key.classList.add('active');
    });
    key.addEventListener('mouseup', () => {
        key.classList.remove('active');
    });
    key.addEventListener('mouseleave', () => {
        key.classList.remove('active');
    });
});

function playSound(note) {
    // Bu erda audio faylni o'ynatishni qo'shishingiz mumkin
    console.log(`Playing note: ${note}`);
}
