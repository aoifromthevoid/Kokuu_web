// ============================================================
//  FILE DỮ LIỆU CỦA KOKUU
//  Đây là NƠI DUY NHẤT cần chỉnh sửa để cập nhật web.
//  Không cần đụng vào file index.html.
//
//  CÁCH THÊM 1 TÁC PHẨM MỚI:
//  - Copy nguyên 1 khối { ... } bên dưới (từ dấu { tới dấu }),
//    dán thêm vào cuối mảng WORKS_DATA, rồi sửa nội dung lại.
//
//  CÁCH THÊM 1 CHƯƠNG MỚI CHO TÁC PHẨM CÓ SẴN:
//  - Vào đúng tác phẩm đó, tìm mảng "chapters: [ ... ]",
//    copy 1 khối chương { title, created_time, content },
//    dán thêm vào cuối mảng chapters, rồi sửa nội dung lại.
//
//  LƯU Ý:
//  - Nội dung chương viết trong dấu backtick `  `  (không phải
//    dấu nháy đơn/kép) để có thể xuống dòng thoải mái.
//  - Sau mỗi khối { ... } (trừ khối cuối cùng) phải có dấu phẩy ","
//  - stars: số sao đánh giá tác phẩm, từ 0 đến 5.
//  - Lưu file lại là web tự động hiện nội dung mới, không cần
//    sửa gì thêm.
// ============================================================

const WORKS_DATA = [
  {
    title: "Tên tác phẩm ví dụ",
    intro: "Giới thiệu ngắn gọn về tác phẩm, sẽ hiện ở trang danh sách và trang chi tiết.",
    stars: 5,
    created_time: "10/07/2026",
    chapters: [
      {
        title: "Chương 1: Mở đầu",
        created_time: "10/07/2026",
        content: `Nội dung chương 1 viết ở đây.

Có thể xuống dòng thoải mái, xuống dòng trong file này
thì lên web cũng sẽ xuống dòng y vậy.`
      },
      {
        title: "Chương 2: Tiếp theo",
        created_time: "10/07/2026",
        content: `Nội dung chương 2 viết ở đây.`
      }
    ]
  }

  // Thêm tác phẩm mới thì copy khối phía trên (từ dòng có dấu { đầu tiên
  // tới dấu } tương ứng), nhớ thêm dấu phẩy "," sau dấu } của khối cũ.
];
