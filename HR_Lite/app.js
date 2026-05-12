let employees = [];

const employeeForm = document.getElementById("employeeForm");
const employeeNameInput = document.getElementById("empName");
const employeeSalaryInput = document.getElementById("empSalary");
const employeeListElement = document.getElementById("employeeList");
const totalSalaryElement = document.getElementById("totalSalary");

function renderEmployees(employeeList) {
    const n = employeeList.length;
    let i = 0;
    employeeListElement.innerHTML = '';

    if (n === 0) {
        const li = document.createElement('li');
        li.className = 'employee-item';
        li.style.color = 'gray';
        li.style.fontStyle = 'italic';
        li.textContent = 'Chưa có dữ liệu nhân sự...';
        employeeListElement.appendChild(li);
        totalSalaryElement.textContent = '0';
        return;
    }

    while (i < n) {
        const employee = employeeList[i];
        const li = document.createElement('li');
        li.className = 'employee-item';
        li.textContent = `${employee.name} - ${employee.salary.toLocaleString()} VND`;
        employeeListElement.appendChild(li);
        i++;
    }

    totalSalaryElement.textContent = calculateTotalSalary(employeeList).toLocaleString();
}

function calculateTotalSalary(employeeList) {
    if (employeeList.length === 0) {
        return 0;
    }

    const n = employeeList.length;
    let i = 0;
    let total = 0;

    while (i < n) {
        total += employeeList[i].salary;
        i++;
    }
    return total;
}

function addEmployee(employeeList, name, salary) {
    const newEmployee = { name, salary };
    employeeList.push(newEmployee);
    alert("Thêm nhân sự thành công!");
    renderEmployees(employeeList);
}

const searchInput = document.getElementById("searchInput");

function searchEmployees(query) {
    if (!query.trim()) {
        renderEmployees(employees);
        return;
    }

    const filteredEmployees = [];
    const n = employees.length;
    let i = 0;

    while (i < n) {
        if (employees[i].name.toLowerCase().includes(query.toLowerCase())) {
            filteredEmployees.push(employees[i]);
        }
        i++;
    }

    renderEmployees(filteredEmployees);
}

searchInput.addEventListener("input", function () {
    const query = searchInput.value;
    searchEmployees(query);
});

employeeForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = employeeNameInput.value.trim();
    const salary = parseFloat(employeeSalaryInput.value);

    if (!name || isNaN(salary) || salary <= 0) {
        alert("Vui lòng nhập đầy đủ và chính xác thông tin nhân sự!");
        return;
    }

    addEmployee(employees, name, salary);
    employeeForm.reset();
});

renderEmployees(employees);