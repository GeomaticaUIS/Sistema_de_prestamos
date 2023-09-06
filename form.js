document.addEventListener("DOMContentLoaded", function () {
    const loanForm = document.getElementById("loanForm");
    const loanTable = document.getElementById("loanTable");

    loanForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Get form values
        const borrowerName = document.getElementById("borrowerName").value;
        const lenderName = document.getElementById("lenderName").value;
        const loanDate = document.getElementById("loanDate").value;
        const loanReason = document.getElementById("loanReason").value;
        const borrowedItems = document.getElementById("borrowedItems").value;

        // Create a new row in the table
        const newRow = document.createElement("tr");
        newRow.innerHTML = `
            <td>${borrowerName}</td>
            <td>${lenderName}</td>
            <td>${loanDate}</td>
            <td>${loanReason}</td>
            <td>${borrowedItems}</td>
        `;

        // Append the new row to the table
        loanTable.appendChild(newRow);

        // Clear the form
        loanForm.reset();
    });
});
