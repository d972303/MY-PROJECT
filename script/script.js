document.addEventListener('DOMContentLoaded', () => {
  const clover = document.getElementById('clover');

  clover.addEventListener('animationend', (event) => {
    if (event.animationName === 'fall') {
      // 애니메이션이 끝나면 이미지를 숨기거나 다른 동작을 수행할 수 있습니다.
      clover.style.display = 'none';
    }
  });
});
