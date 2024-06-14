function rotateText() {
  var btn = document.querySelector('.main--content-button');
  btn.classList.toggle('rotate'); // 버튼에 rotate 클래스를 토글링하여 회전 효과를 적용
}

// 참고자료
document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('toggleButton');
  const hiddenContent = document.getElementById('hiddenContent');

  toggleButton.addEventListener('click', () => {
    if (hiddenContent.classList.contains('hidden')) {
      hiddenContent.classList.remove('hidden');
    } else {
      hiddenContent.classList.add('hidden');
    }
  });
});
