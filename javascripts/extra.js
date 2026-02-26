(() => {
  const path = window.location.pathname;

  // 只在 /splash/ 页面生效
  if (!path.includes('/splash/')) return;

  document.documentElement.classList.add('is-splash');

  const splash = document.querySelector('.splash');
  const enterBtn = document.getElementById('enter-btn');
  if (!splash || !enterBtn) return;

  const target = splash.getAttribute('data-enter-to') || './home/';

  enterBtn.addEventListener('click', () => {
    // 触发淡出动画
    splash.classList.add('is-leaving');

    // 等动画结束再跳
    window.setTimeout(() => {
      window.location.href = target;
    }, 260);
  });
})();