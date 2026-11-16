/**
 * Fan's Portfolio - 全站共用腳本
 * 負責：
 * 1. 確保專案卡片內的外部連結點擊時不觸發外層卡片導覽
 * 2. 行動版導覽列點擊項目後自動收合選單
 */
document.addEventListener('DOMContentLoaded', function () {
  // 外部連結與按鈕區停止事件冒泡，避免與 .stretched-link 衝突
  var externalContainers = document.querySelectorAll('.project-card-links a');
  externalContainers.forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.stopPropagation();
    });
  });

  // 行動版導覽列點擊連結後自動收合
  var navbarCollapse = document.getElementById('navbarNav');
  if (navbarCollapse && typeof bootstrap !== 'undefined') {
    var navLinks = navbarCollapse.querySelectorAll('.nav-link');
    navLinks.forEach(function (navLink) {
      navLink.addEventListener('click', function () {
        if (navbarCollapse.classList.contains('show')) {
          var bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
          if (bsCollapse) {
            bsCollapse.hide();
          }
        }
      });
    });
  }
});
