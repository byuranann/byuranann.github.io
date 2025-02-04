// Get the form and result elements
const form = document.getElementById('yieldForm');
const resultElement = document.getElementById('result');
const totalWetEarElement = document.getElementById('totalWetEar');
const hybridDropdown = document.getElementById('hybrid');
const femaleAreaRatioDropdown = document.getElementById('femaleAreaRatio');
const kernelsPerKgInput = document.getElementById('kernelsPerKg');
const femaleAreaInput = document.getElementById('femaleArea');

// Add event listener for hybrid selection
hybridDropdown.addEventListener('change', function () {
    // Get the selected value (kernels per kg)
    const selectedKernelsPerKg = hybridDropdown.value;

    // Auto-fill the Kernels per Kg (BB) field
    kernelsPerKgInput.value = selectedKernelsPerKg;
});

// Add event listener for female area ratio selection
femaleAreaRatioDropdown.addEventListener('change', function () {
    // Get the selected value (female area ratio)
    const selectedFemaleArea = femaleAreaRatioDropdown.value;

    // Auto-fill the Female Area (B) field
    femaleAreaInput.value = selectedFemaleArea;
});

// Add event listener for form submission
form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form from submitting

    // Get input values
    const rowSpacing = parseFloat(document.getElementById('rowSpacing').value); // K
    const earsIn4Meters = parseFloat(document.getElementById('earsIn4Meters').value); // N
    const kernelsPerEar = parseFloat(document.getElementById('kernelsPerEar').value); // W
    const femaleArea = parseFloat(document.getElementById('femaleArea').value); // B
    const uniformFactor = parseFloat(document.getElementById('uniformFactor').value); // X
    const kernelsPerKg = parseFloat(document.getElementById('kernelsPerKg').value); // BB
    const standingArea = parseFloat(document.getElementById('standingArea').value); // Standing Area (Rai)

    // Perform the calculation using the provided formula
    const yieldEstimate =
        (((((1600 / (rowSpacing / 100)) / (4 / earsIn4Meters)) * femaleArea) *
            kernelsPerEar *
            (uniformFactor / 100)) /
        kernelsPerKg) / 0.6;

    // Calculate Total Wet Ear (Kg)
    const totalWetEar = standingArea * yieldEstimate;

    // Display the result
    resultElement.innerHTML = `
        <strong>ผลผลิตต่อไร่:</strong><br>
        <span class="highlight-number">${yieldEstimate.toFixed(2)}</span> กิโลกรัม ต่อ ไร่
    `;

    // Display Total Wet Ear (Kg)
    totalWetEarElement.innerHTML = `
        <strong>ผลผลิตรวม (กก.):</strong><br>
        <span class="highlight-number">${totalWetEar.toFixed(2)}</span> กิโลกรัม
    `;
});