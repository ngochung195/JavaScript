/**
 * HỆ THỐNG RADAR ORION (LEGACY CODE)
 */
const canvas = document.getElementById('radarCanvas');
const ctx = canvas.getContext('2d');
// Dữ liệu mốc từ API (Chứa dữ liệu rác gây sập hệ thống)
const incomingFlights = [
    { id: "VN11", x: 150, y: 200, speed: 2 },
    { id: "JS404", x: null, y: "ba trăm", speed: 1 }, // LỖI: Tọa độ sai kiểu dữ liệu
    { id: "US55", x: 400, y: 150, speed: 3 },
    null, // LỖI: Object bị rỗng
    { id: "ER99" } // LỖI: Thiếu tọa độ
];
function drawRadar(flights) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    flights.forEach(flight => {
        if (flight && typeof flight.x === 'number' && typeof flight.y === 'number') {
            ctx.beginPath();
            ctx.arc(flight.x, flight.y, 5, 0, Math.PI * 2);
            ctx.fillStyle = "lime";
            ctx.fill();
        }
    });
}
drawRadar(incomingFlights);

canvas.addEventListener('click', function (event) {
    const rect = canvas.getBoundingClientRect();

    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    incomingFlights.forEach((flight, index) => {
        try {
            if (!flight) throw new Error(`Dữ liệu flight tại vị trí ${index} bị null/undefined`);

            if (typeof flight.x === 'number' && typeof flight.y === 'number') {

                const dx = mouseX - flight.x;
                const dy = mouseY - flight.y;

                const distanceSquared = dx * dx + dy * dy;

                const radiusSquared = 5 * 5;

                if (distanceSquared <= radiusSquared) {

                    ctx.beginPath();
                    ctx.arc(flight.x, flight.y, 5, 0, Math.PI * 2);
                    ctx.fillStyle = "red";
                    ctx.fill();
                    console.log("Bạn vừa click vào máy bay có ID: ", flight.id);
                }
            } else {
                console.warn("Lỗi dữ liệu tọa độ không hợp lệ cho ID: ", flight.id);
            }
        } catch (error) {
            console.warn(`Bỏ qua click check cho flight ${index}: `, error.message);
        }
    });
});