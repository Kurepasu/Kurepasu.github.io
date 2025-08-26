  const modal = document.getElementById("myImageModal");
  const modalImage = document.getElementById("modalImage");
  const closeButton = document.getElementsByClassName("close-button")[0];
  const allImages = document.querySelectorAll('.grid-item');
  const imagePaths = [];
  let currentImageIndex = 0;

  // 모든 이미지의 경로를 배열에 저장
  allImages.forEach(img => {
    imagePaths.push(img.src);
    img.onclick = function() {
      openImageModal(img.src);
    };
  });

  // 이미지 클릭 시 모달 열기
  function openImageModal(imageSrc) {
    modal.style.display = "flex";
    modalImage.src = imageSrc;
    currentImageIndex = imagePaths.indexOf(imageSrc);
  }

  // 닫기 버튼 클릭 시 모달 닫기
  closeButton.onclick = function() {
    modal.style.display = "none";
  }

  // 모달 바깥 영역 클릭 시 모달 닫기
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  // 이전 이미지 보기
  function showPrevImage() {
    if (currentImageIndex > 0) {
      currentImageIndex--;
    } else {
      currentImageIndex = imagePaths.length - 1; // 첫 이미지에서 이전 버튼 클릭 시 마지막 이미지로 이동
    }
    modalImage.src = imagePaths[currentImageIndex];
  }

  // 다음 이미지 보기
  function showNextImage() {
    if (currentImageIndex < imagePaths.length - 1) {
      currentImageIndex++;
    } else {
      currentImageIndex = 0; // 마지막 이미지에서 다음 버튼 클릭 시 첫 이미지로 이동
    }
    modalImage.src = imagePaths[currentImageIndex];
  }