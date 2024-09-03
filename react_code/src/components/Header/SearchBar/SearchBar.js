import './SearchBar.css';

export default function SearchBar() {
  function handleClick() {
    const username = document.getElementById('username');
    console.log(username.value);
  }
  return (
    <section>
      <label htmlFor="username">Search User:</label>
      <input
        type="text"
        placeholder="kanyisa.ntombini"
        required
        id="username"
      />
      <button onClick={handleClick}>Search</button>
    </section>
  );
}
