let languageChart;
let repoStatChart;

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

export function renderRepoStatChart (repos) {
    const totalRepos = repos.length;
    const totalStars = repos.reduce((sum, repo) => sum + repo.stargazers_count, 0);
    const totalForks = repos.reduce((sum, repo) => sum + repo.forks_count, 0);

    const ctx = document.querySelector('[data-repo-stats-chart]').getContext('2d');
    if (repoStatChart) {
        repoStatChart.destroy();
    }

    repoStatChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Repositories', 'Stars', 'Forks'],
            datasets: [{
                label: 'Repository Stats',
                data: [totalRepos, totalStars, totalForks],
                backgroundColor: ['#1f6feb', '#f78166', '#3fb950']
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        precision: 0
                    }
                }
            }
        }
    });
}