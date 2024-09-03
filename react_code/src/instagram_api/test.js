// Generate URL dynamically
const baseUrl = 'https://github.com/';
const searchQuery = 'chatgpt';
// const url = `${baseUrl}/search?q=${searchQuery}`;
const url = `${baseUrl}`;

// Print the URL (for debugging purposes)
console.log(`Opening URL: ${url}`);

// Open URL in a new browser tab or window
window.open(url, '_blank');
