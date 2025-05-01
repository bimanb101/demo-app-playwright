document.addEventListener('DOMContentLoaded', () => {
    const editbox = document.getElementById('editbox');
	editbox.focus();
    const combo = document.getElementById('combo');
	/* combo.focus(); */
    const greenRadio = document.getElementById('green');
    const redRadio = document.getElementById('red');
    const submitButton = document.getElementById('submitButton');
    const resetButton = document.getElementById('resetButton');
    const disableComboCheckbox = document.getElementById('disable_combobox');
    const comboboxValueLabel = document.getElementById('comboboxValueLabel');
    const closeDialogButton = document.getElementById('closeDialogButton');

    let initialEditboxValue = "";  // Initial value for the editbox

    // Handle the Submit button logic
    submitButton.addEventListener('click', () => {
        //const value = editbox.value.trim();

	// Add a 0.5 second delay for color change and combobox label
    setTimeout(() => {
        // Handle the color change of editbox based on radio button
        if (greenRadio.checked) {
            editbox.style.backgroundColor = 'green';
        } else if (redRadio.checked) {
            editbox.style.backgroundColor = 'red';
        }

        // Display the selected combo box value only if it is selected
        const selectedValue = combo.value;
        if (selectedValue) {
            comboboxValueLabel.textContent = `ComboBox Value: ${selectedValue}`;
        }

        // Disable ComboBox if checkbox is checked
		combo.disabled = disableComboCheckbox.checked;
		}, 500);  // 500ms = 0.5 seconds
    });

    // Reset button logic
    resetButton.addEventListener('click', () => {
        editbox.value = initialEditboxValue;
        combo.selectedIndex = 0;  // Set ComboBox back to the empty default option
        comboboxValueLabel.textContent = '';  // Keep ComboBox Value label empty
        greenRadio.checked = false;
        redRadio.checked = false;
        disableComboCheckbox.checked = false;
        editbox.style.backgroundColor = '';  // Reset the color

        // Reset combo box to enabled state
        combo.disabled = false;
    });
});
