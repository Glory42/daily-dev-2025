let languageChart;
let repoStatChart;
let repoTypeChart;
let timelineChart;

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

export function renderRepoTypeChart (repos) {
    const forkedCount = repos.filter(repo => repo.fork).length;
    const originalCount = repos.length - forkedCount;

    const ctx = document.querySelector('[data-repo-types-chart]').getContext('2d');


    if (repoTypeChart) {
        repoTypeChart.destroy();
    }

    repoTypeChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Original', 'Forked'],
            datasets: [{
                label: 'Repository Types',
                data: [originalCount, forkedCount],
                backgroundColor: ['#58a6ff', '#f78166']
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                position: 'bottom'
                }
            }
        }   
    });
}

export function renderRepoTimelineChart (repos) {
    const yearCounts = {};

    repos.forEach(repo => {
        const year = new Date(repo.created_at).getFullYear();
        yearCounts[year] = (yearCounts[year] || 0) + 1;
    });

    const sortedYears = Object.keys(yearCounts).sort();
    const counts = sortedYears.map(year => yearCounts[year]);

    const ctx = document.querySelector('[data-activity-timeline-chart]').getContext('2d');

    if (timelineChart) {
        timelineChart.destroy();
    }

    timelineChart = new Chart(ctx, {
        type: 'line',
        data: {
        labels: sortedYears,
        datasets: [{
            label: 'Repositories Created',
            data: counts,
            borderColor: '#1f6feb',
            backgroundColor: 'rgba(31, 111, 235, 0.1)',
            tension: 0.3,
            fill: true
        }]
        },
        options: {
        responsive: true,
        plugins: {
            legend: {
            position: 'top'
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