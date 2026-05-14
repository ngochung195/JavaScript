/**
 * HỆ THỐNG HIỂN THỊ THÔNG TIN NGƯỜI DÙNG (LEGACY CODE)
 * Cảnh báo: Đoạn mã này đang gây lỗi runtime khi dữ liệu người dùng thiếu sót.
 */
function getUserDashboard(user) {
    // 1. Xử lý hiển thị tên (Lỗi: Welcome, undefined)
    let displayName = (user.profile && user.profile.name) || "Guest";

    // 2. Xử lý hiển thị ảnh đại diện (Lỗi: Sập hệ thống nếu user.profile null)
    let avatarImg = (user.profile && user.profile.avatar) || "default-avatar.png";

    // 3. Xử lý hiển thị nút quản trị (Rất rối rắm)
    let adminPanel = (user.isLoggedIn && user.role == "ADMIN") ? "--- OPEN ADMIN PANEL ---" : "Please Login Admin";

    // 4. Xử lý màu sắc hiển thị dựa trên trạng thái (Dùng if-else dài dòng)
    let statusColor = (user.status == "active") && "green" || "gray";

    console.log("------------------------------------------");
    console.log("Welcome, " + displayName);
    console.log("Avatar: " + avatarImg);
    console.log("Status Color: " + statusColor);
    console.log("Action: " + adminPanel);
    console.log("------------------------------------------");
}
// --- KHU VỰC THỬ NGHIỆM CỦA HỌC VIÊN ---
// Trường hợp 1: User đầy đủ thông tin (Chạy tốt)
const user1 = { isLoggedIn: true, role: "ADMIN", status: "active", profile: { name: "Hoàng", avatar: "my-pic.jpg" } };
getUserDashboard(user1);

// Trường hợp 2: Thiếu profile (Gây lỗi: Cannot read property 'avatar' of undefined)
const user2 = { isLoggedIn: true, role: "USER", status: "inactive" };
getUserDashboard(user2);

// Trường hợp 3: Tên là chuỗi rỗng hoặc status bị thiếu
const user3 = { isLoggedIn: false, role: "USER", profile: { name: "", avatar: null } };
getUserDashboard(user3);