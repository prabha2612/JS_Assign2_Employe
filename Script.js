// Employee array to store employee details
let employees = [];

// Function to add employee detail
function addEmployee() {
  let name = document.getElementById('name').value;
  let address = document.getElementById('address').value;
  const empId = document.getElementById('empId').value;
  const designation = document.getElementById('designation').value;

  const employee = {
    name: name,
    address: address,
    empId: empId,
    designation: designation
  };

  employees.push(employee);
  console.log('Employee added:', employee);
  alert("Employee added!");
  document.getElementById('employeeForm').clear();

}

// Function to edit employee detail
function editEmployee() {
    const empId = document.getElementById('editEmpId').value;
    const employee = employees.find(emp => emp.empId === empId);
    if (employee) {
      // Clear previous edit form
      const editFormContainer = document.getElementById('editFormContainer');
      if (editFormContainer) {
        editFormContainer.remove();
      }

      // Create edit form
      const editForm = document.createElement('div');
      editForm.id = 'editFormContainer';
      editForm.innerHTML = `
        <h3>Edit Employee</h3>
        <label for="editName">Name:</label>
        <input type="text" id="editName" value="${employee.name}">
        <label for="editAddress">Address:</label>
        <input type="text" id="editAddress" value="${employee.address}">
        <label for="editDesignation">Designation:</label>
        <input type="text" id="editDesignation" value="${employee.designation}">
        <button onclick="saveEditedEmployee('${empId}')">Save Changes</button>
      `;
      document.body.appendChild(editForm);
    } else {
      console.log('Employee not found with ID:', empId);
    }
  }

  function saveEditedEmployee(empId) {
    const editedName = document.getElementById('editName').value;
    const editedAddress = document.getElementById('editAddress').value;
    const editedDesignation = document.getElementById('editDesignation').value;

    const employeeIndex = employees.findIndex(emp => emp.empId === empId);
    if (employeeIndex !== -1) {
      employees[employeeIndex].name = editedName;
      employees[employeeIndex].address = editedAddress;
      employees[employeeIndex].designation = editedDesignation;
      console.log('Employee edited:', employees[employeeIndex]);
      // Remove edit form after saving changes
      const editFormContainer = document.getElementById('editFormContainer');
      if (editFormContainer) {
        editFormContainer.remove();
      }
    } else {
      console.log('Employee not found with ID:', empId);
    }
    alert("Employee details edited!");
  }
// Function to view all employee details
function viewEmployees() {
  const employeeList = document.getElementById('employeeList');
  employeeList.innerHTML = '';
  employees.forEach(employee => {
    const li = document.createElement('li');
    li.textContent = `Name: ${employee.name}, Address: ${employee.address}, Employee ID: ${employee.empId}, Designation: ${employee.designation}`;
    employeeList.appendChild(li);
  });
}