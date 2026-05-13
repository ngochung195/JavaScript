for (let i = 0; i < 2000000000; i++) { }

let employeeCode = prompt("Vui lòng nhập Mã nhân viên:");

if (employeeCode === null || employeeCode.trim() === "") {

    alert("Truy cập bị từ chối");

} else {

    let isConfirmed = confirm(
        `Bạn có chắc chắn muốn sử dụng mã ${employeeCode} để đăng nhập không?`
    );

    if (isConfirmed) {
        alert("Truy cập thành công!");
    } else {
        alert("Hủy đăng nhập");
    }
}