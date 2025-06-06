let languageChart;

export function renderLanguageChart (repos) {
    const languageCounts = {};

    repos.forEach(repo => {
        const lang = repo.language;
        if (lang) {
            languageCounts[lang] = (languageCounts[lang] || 0) + 1;
        }
    });

    const labels = Object.keys(languageCounts);
    const data = Object.values(languageCounts);

    const ctx = document.querySelector('[data-languages-chart]').getContext('2d');

    if (languageChart) {
        languageChart.destroy();
    }

    languageChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: labels,
            datasets: [{
                label: 'languages',
                data: data,
                backgroundColor: generateColors(labels.length)
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: 'bottom'
            }
        }
    });
}

function generateColors (count) {
    const baseColors = ['#58a6ff', '#3fb950', '#f78166', '#c9d1d9', '#e3b341', '#da3633', '#1f6feb'];
    const colors = [];
    for (let i = 0; i <count; i++) {
        colors.push(baseColors[i % baseColors.length]);
    }
    return colors;
}