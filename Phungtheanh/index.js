// JavaScript để hiển thị/ẩn các tỉnh bổ sung
// const toggleButton = document.getElementById('toggleButton');
// const additionalLocations = document.getElementById('additional-locations');
// let isExpanded = false;

// toggleButton.addEventListener('click', () => {
//     if (isExpanded) {
//         additionalLocations.classList.add('hidden');
//         toggleButton.textContent = 'Xem thêm ▼';
//     } else {
//         additionalLocations.classList.remove('hidden');
//         toggleButton.textContent = 'Thu gọn ▲';
//     }
//     isExpanded = !isExpanded;
// });




// Lấy tất cả các nút có class .btn-cart
const btnCarts = document.querySelectorAll('.btn-cart');

// Thêm sự kiện click vào mỗi nút
btnCarts.forEach(btnCart => {
    btnCart.addEventListener('click', function() {
        // Tạo thông báo
        const notification = document.createElement('div');
        notification.classList.add('notification');
        notification.innerText = 'Đã thêm vào giỏ hàng!';

        // Thêm thông báo vào body
        document.body.appendChild(notification);

        // Ẩn thông báo sau 2 giây
        setTimeout(function() {
            notification.style.opacity = '0'; // Làm mờ dần
            setTimeout(function() {
                notification.remove(); // Xóa hẳn khỏi DOM
            }, 500); // Thời gian chờ để hoàn tất hiệu ứng
        }, 2000);
    });
});
