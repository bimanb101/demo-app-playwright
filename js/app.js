document.addEventListener('DOMContentLoaded', () => {
    const editbox = document.getElementById('editbox');
    const combo = document.getElementById('combo');
	combo.focus();
    const greenRadio = document.getElementById('green');
    const redRadio = document.getElementById('red');
    const submitButton = document.getElementById('submitButton');
    const resetButton = document.getElementById('resetButton');
    const disableComboCheckbox = document.getElementById('disable_combobox');
    const comboboxValueLabel = document.getElementById('comboboxValueLabel');
    const closeDialogButton = document.getElementById('closeDialogButton');

    let initialEditboxValue = "0";  // Initial value for the editbox

    // Function to check if the input is a decimal
    function isDecimal(value) {
		let isDec = /^(\d*\.\d+)$/.test(value.trim());
		//console.log('isDecimal:', isDec);
		return isDec;
    }

    // Handle keydown event for Tab or Enter to validate input
	editbox.addEventListener('blur', (event) => {
    const value = editbox.value.trim();
    //console.log(`Current editbox value: ${value}`);

    if (!isDecimal(value)) {
        alert("Invalid input, showing dialog...");
        // After the alert, immediately re-focus so user corrects it
        setTimeout(() => {
            editbox.focus();  
			}, 0);
		}
	});

    // Handle the Submit button logic
    submitButton.addEventListener('click', () => {
        const value = editbox.value.trim();
        //console.log(`Submit button clicked. Current value: ${value}`);

        if (!isDecimal(value)) {
            //console.log("Invalid input, showing dialog...");
            dialog.classList.remove('hidden');  // Show the dialog
            editbox.focus();  // Keep focus on the editbox
            return;  // Stop further execution until a valid input is entered
        }

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

    // // Close the dialog and focus back to the editbox
    // closeDialogButton.addEventListener('click', () => {
        // console.log("Closing dialog...");
        // dialog.classList.add('hidden');  // Hide the dialog
        // editbox.focus();  // Focus back to the editbox
    // });

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
