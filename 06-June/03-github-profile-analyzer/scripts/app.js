import { getUserData, getUserRepos } from "./github-api.js";
import { renderLanguageChart } from "./chart-manager.js";

const form = document.querySelector('#github-search-form');
const input = document.querySelector('#username-input');
const errorMessage = document.querySelector('[data-error-message]');
const loadingMessage = document.querySelector('[data-loading-message]');
const profileSelection = document.querySelector('[data-profile-section]');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = input.value.trim();
    if (!username) return;

    toggleLoading(true);
    try {
        const user = await getUserData(username);
        const repos = await getUserRepos(username);

        fillUserProfile(user);
        showProfile();
        renderLanguageChart(repos);
    } catch (err) {
        showError(err.message);
    } finally {
        toggleLoading(false);
    }

});

function fillUserProfile (user) {
    document.querySelector('[data-profile-avatar]').src = user.avatar_url;
    document.querySelector('[data-profile-name]').textContent = user.name;
    document.querySelector('[data-profile-username]').textContent = `@${user.login}`;
    document.querySelector('[data-profile-bio]').textContent = user.bio || '';
    document.querySelector('[data-repos-count]').textContent = user.public_repos;
    document.querySelector('[data-followers-count]').textContent = user.followers;
    document.querySelector('[data-following-count]').textContent = user.following;
    document.querySelector('[data-gists-count]').textContent = user.public_gists;
    document.querySelector('[data-profile-location]').textContent = user.location || '';
    document.querySelector('[data-profile-company]').textContent = user.company || '';
    const blogLink = document.querySelector('[data-profile-website]');
    blogLink.textContent = user.blog;
    blogLink.href = user.blog;
    document.querySelector('[data-profile-joined]').textContent = new Date(user.created_at).toLocaleDateString();

}

function toggleLoading (isLoading) {
    loadingMessage.style.display = isLoading ? 'flex' : 'none';
    form.querySelector('.search-button').disabled = isLoading;
}

function showError (msg) {
    errorMessage.classList.add('visible');
    errorMessage.querySelector('[data-error-text]').textContent = msg;
}

function showProfile () {
    errorMessage.classList.remove('visible');
    profileSelection.classList.add('visible');
}