// Lấy phần tử modal
const modal = document.querySelector('.idMyModal');
const modalImg = document.querySelector('.modal-content');
const closeBtn = document.querySelector('.close');

// Lấy tất cả các ảnh có class "toZoom"
const images = document.querySelectorAll('.toZoom');

images.forEach(img => {
  img.addEventListener('click', function () {
    modal.style.display = "block"; // Hiển thị modal
    modalImg.src = this.src; // Gán ảnh được click vào modal
  });
});

// Đóng modal khi click vào nút close
closeBtn.addEventListener('click', function () {
  modal.style.display = "none";
});

// Đóng modal khi click ra ngoài
modal.addEventListener('click', function (e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
