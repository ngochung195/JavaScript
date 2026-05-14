function checkLogin(inputPassword, storedPassword, userRole) {
    // LỖI: Sử dụng so sánh lỏng lẻo ==
    if (inputPassword !== storedPassword) {
        console.log("Sai mật khẩu!");
        return;
    }

    console.log("Đăng nhập thành công!");

    switch (userRole) {
        case "admin":
            console.log("Chào mừng quản trị viên.");
            break;
        case "editor":
            console.log("Chào mừng biên tập viên.");
            break;
        default:
            console.log("Chào mừng thành viên.");
    }
}

checkLogin(0, "0", "admin");
checkLogin("123", "123", "editor");