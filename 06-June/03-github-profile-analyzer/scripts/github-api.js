const BASE_URL = 'https://api.github.com/users';

export async function getUserData(username) {
    const response = await fetch(`${BASE_URL}/${username}`);

    if (!response.ok) throw new Error('User not found');

    return response.json();
}

export async function getUserRepos(username) {
    const response = await fetch(`${BASE_URL}/${username}/repos?per_page=100`);

    if (!response.ok) throw new Error('User repos not found');

    return response.json();
}