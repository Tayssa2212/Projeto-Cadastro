class FormHandler {
    constructor(formId, tableId) {
        this.form = document.getElementById(formId);
        this.table = document.getElementById(tableId);
        this.setupForm();
    }

    setupForm() {
        this.form.addEventListener('submit', (event) => {
            event.preventDefault();
            const formData = this.getFormData();
            if (formData) {
                this.addRow(formData);
                this.clearForm();
            }
        });
    }

    getFormData() {
        const input = this.form.querySelector('input[type="text"]');
        const value = input.value.trim();
        return value ? value : null;
    }

    clearForm() {
        this.form.querySelector('input[type="text"]').value = '';
    }

    addRow(data) {
        const row = this.table.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);

        cell1.textContent = data;
        cell2.appendChild(this.createActionButtons(row));
    }

    createActionButtons(row) {
        const container = document.createElement('div');

        const editButton = document.createElement('button');
        editButton.className = 'edit';
        editButton.textContent = 'Edit';
        editButton.onclick = () => this.editRow(row);

        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete';
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => this.deleteRow(row);

        container.appendChild(editButton);
        container.appendChild(deleteButton);

        return container;
    }

    editRow(row) {
        const input = this.form.querySelector('input[type="text"]');
        input.value = row.cells[0].textContent;
        this.deleteRow(row);
    }

    deleteRow(row) {
        row.remove();
    }
}

// Inicializando o manipulador com o formulário e tabela
document.addEventListener('DOMContentLoaded', () => {
    new FormHandler('myForm', 'myTable');
});
console.log
