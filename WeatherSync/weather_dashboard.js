/**
 * HỆ THỐNG QUAN TRẮC WEATHERSYNC (BULLETPROOF VERSION)
 */

const sensorData = [
    { id: "S1", temp: 32.5, humidity: 80 },
    { id: "S2", temp: null, humidity: 90 },
    { id: "S3", temp: 35.1, humidity: 75 },
    { id: "S4", temp: 40.2 },
    "Tôi là hacker, tôi gửi chuỗi thay vì object",
    { id: "S5", temp: 28.0, humidity: 60 },

    // Test thêm dữ liệu lỗi
    { id: "S6", temp: 150, humidity: 50 },
    { id: "S7", temp: "35 độ", humidity: 70 }
];

function processWeatherData(dataList) {

    console.log("=== BẮT ĐẦU XỬ LÝ DỮ LIỆU ===");

    dataList.forEach(sensor => {

        const sensorId =
            (typeof sensor === "object" && sensor !== null && sensor.id)
                ? sensor.id
                : "UNKNOWN";

        try {
            if (typeof sensor !== "object" || sensor === null) {
                throw new Error("Dữ liệu không phải object hợp lệ");
            }

            if (!("temp" in sensor)) {
                throw new Error("Thiếu thuộc tính temp");
            }

            if (sensor.temp === null || sensor.temp === undefined) {
                throw new Error("Nhiệt độ bị null hoặc undefined");
            }

            if (typeof sensor.temp !== "number") {
                throw new Error("Nhiệt độ không phải number");
            }

            if (sensor.temp > 100 || sensor.temp < -50) {
                throw new Error("Dữ liệu nhiệt độ bất thường");
            }

            if (
                sensor.humidity !== undefined &&
                (sensor.humidity < 0 || sensor.humidity > 100)
            ) {
                throw new Error("Độ ẩm không hợp lệ");
            }

            const formattedTemp = sensor.temp.toFixed(1);

            console.log(
                `Cảm biến ${sensor.id}: Nhiệt độ là ${formattedTemp}°C`
            );

        } catch (error) {

            console.error(
                `Lỗi tại cảm biến ${sensorId}: ${error.message}`
            );

        } finally {

            console.warn(`Đã quét qua cảm biến ${sensorId}`);

        }

    });

    console.log("=== HOÀN THÀNH XỬ LÝ DỮ LIỆU ===");
}

processWeatherData(sensorData);