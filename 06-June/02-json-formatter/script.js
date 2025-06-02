function formatJSON() {
    // assiging html ids to js variables bla bla.
    const input = document.getElementById('json-entry');
    const resultEl = document.getElementById('result');
    const errorEl  = document.getElementById('error');

    resultEl.textContent = '';
    errorEl.textContent = '';

    // Using JSON '.parse' and '.stringify' first getting JSON entry than formatting.
    try {
        const parsed = JSON.parse(input.value); 
        const formatted = JSON.stringify(parsed, null, 2);
        resultEl.textContent = formatted;
    } catch (err) {
        errorEl.textContent = 'Invalid JSON: ' + err.message;
    }
}
