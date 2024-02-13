// Function to create and display modal for adding employee details
function showAddForm() {
    // Create form elements
    const form = document.createElement('form');
    form.onsubmit = addEmployee;
    form.innerHTML = `
        <h2>Add Employee Detail</h2>
        <input type="text" placeholder="Name" required>
        <input type="text" placeholder="Address" required>
        <input type="number" placeholder="Employee ID" required>
        <input type="text" placeholder="Designation" required>
        <input type="submit" value="Add Employee">
    `;
    
    // Display form in modal
    showModal(form);
}

// Function to create and display modal for editing employee details
function showEditForm() {
    // Create form elements
    const form = document.createElement('form');
    form.onsubmit = editEmployee;
    form.innerHTML = `
        <h2>Edit Employee Detail</h2>
        <input type="number" placeholder="Employee ID" required>
        <input type="text" placeholder="New Name">
        <input type="text" placeholder="New Address">
        <input type="text" placeholder="New Designation">
        <input type="submit" value="Edit Employee">
    `;
    
    // Display form in modal
    showModal(form);
}

// Function to show modal
function showModal(content) {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = content.outerHTML;
    
    document.body.appendChild(modal);
}

// Function to close modal
function closeModal() {
    const modal = document.querySelector('.modal');
    if (modal) {
        modal.remove();
    }
}

// Function to add employee details
function addEmployee(event) {
    event.preventDefault();
    // Implement logic to add employee details
    alert('Employee added successfully!');
    closeModal();
}

// Function to edit employee details
function editEmployee(event) {
    event.preventDefault();
    // Implement logic to edit employee details
    alert('Employee details edited successfully!');
    closeModal();
}

// Function to display all employee details
function showAllDetails() {
    // Display all employee details in the main content area
    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = `
        <h2>All Employee Details</h2>
        <!-- Display all employee details here -->
    `;
}
