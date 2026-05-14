/**
 * HỆ THỐNG XÁC THỰC MÃ GIẢM GIÁ - TECHBUGS (LEGACY CODE)
 * Nhiệm vụ: Kiểm tra xem khách hàng có đủ điều kiện nhận giảm giá hay không.
 */
function checkDiscount(userRole, voucherCode, orderTotal) {
    if (userRole === "ADMIN") return "Admin: Giảm giá đặc biệt 50%";

    if (userRole === "VIP") {
        if (voucherCode !== true) return "VIP: Cần có mã Voucher hợp lệ";
        if (orderTotal < 500) return "VIP: Đơn hàng chưa đủ 500k để giảm giá";
        return "VIP: Giảm giá 30%";
    }

    if (orderTotal >= 1000) return "Member: Đơn hàng lớn, giảm giá 10%";

    return "Khách hàng thường: Không có giảm giá";
}