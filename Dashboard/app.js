function showWelcome(user) {
    let name = (user && user.name) || "Khách";

    let badge = (user && user.isVip) ? "Quản trị" : "";

    console.log("Chào mừng " + name + " " + badge);
}

