import { useState } from "react";
import "./App.css";

const movies = [
  { id: 1, title: "Interstellar", genre: "Sci-Fi", rating: "8.7", price: 220, color: "#263b66", emoji: "🚀" },
  { id: 2, title: "The Dark Knight", genre: "Action", rating: "9.0", price: 250, color: "#343434", emoji: "🦇" },
  { id: 3, title: "Inception", genre: "Thriller", rating: "8.8", price: 200, color: "#684b80", emoji: "🌌" },
  { id: 4, title: "Dune", genre: "Adventure", rating: "8.0", price: 230, color: "#a56a42", emoji: "🏜️" },
  { id: 5, title: "Avatar", genre: "Fantasy", rating: "7.9", price: 210, color: "#167d91", emoji: "🌊" },
  { id: 6, title: "Joker", genre: "Drama", rating: "8.3", price: 190, color: "#744b48", emoji: "🎭" },
];

function App() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);
  const [bookings, setBookings] = useState([]);

  const filtered = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  function bookTicket(movie) {
    setBookings([...bookings, movie.title]);
    setSelected(null);
    alert(`Booking confirmed for ${movie.title}!`);
  }

  return (
    <div className="app">
      <nav className="navbar">
        <a className="logo" href="#">i<span>Movies</span></a>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#movies">Movies</a>
          <a href="#bookings">My Bookings ({bookings.length})</a>
        </div>
        <a className="nav-btn" href="#movies">Book Tickets</a>
      </nav>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="eyebrow">YOUR CINEMA EXPERIENCE STARTS HERE</p>
            <h1>Big Screen.<br /><span>Big Emotions.</span></h1>
            <p className="hero-text">
              Discover your favourite movies, explore showtimes
              and book your next cinema experience.
            </p>
            <a className="primary-btn" href="#movies">Explore Movies →</a>
            <div className="stats">
              <div><strong>6+</strong><small>Movies</small></div>
              <div><strong>4K</strong><small>Big Screen Vibes</small></div>
              <div><strong>100%</strong><small>Entertainment</small></div>
            </div>
          </div>
          <div className="hero-art">
            <div className="orbit orbit-one"></div>
            <div className="orbit orbit-two"></div>
            <div className="hero-ticket">
              <span>NOW SHOWING</span>
              <div className="big-emoji">🎬</div>
              <h2>Lights. Camera.</h2>
              <h2 className="pink">iMovies!</h2>
              <p>Your next favourite film awaits.</p>
            </div>
          </div>
        </section>

        <section className="movies-section" id="movies">
          <div className="section-heading">
            <div>
              <p className="eyebrow">HANDPICKED FOR YOU</p>
              <h2>Explore Movies</h2>
            </div>
            <input
              className="search"
              type="text"
              placeholder="Search movies..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="movie-grid">
            {filtered.map((movie) => (
              <article className="movie-card" key={movie.id}>
                <div className="poster" style={{ background: movie.color }}>
                  <span className="poster-label">iMOVIES ORIGINALS</span>
                  <span className="poster-emoji">{movie.emoji}</span>
                  <span className="rating">★ {movie.rating}</span>
                </div>
                <div className="movie-info">
                  <div>
                    <h3>{movie.title}</h3>
                    <p>{movie.genre} · English</p>
                  </div>
                  <div className="movie-bottom">
                    <strong>₹{movie.price}<small> / ticket</small></strong>
                    <button onClick={() => setSelected(movie)}>Book Now</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
          {filtered.length === 0 && <p className="empty">No movies found. Try another title.</p>}
        </section>

        {selected && (
          <div className="modal-backdrop">
            <div className="booking-modal">
              <button className="close-btn" onClick={() => setSelected(null)}>✕</button>
              <p className="eyebrow">YOUR MOVIE NIGHT</p>
              <h2>{selected.title}</h2>
              <p>{selected.genre} · Rating {selected.rating}/10</p>
              <h3>Choose a showtime</h3>
              <div className="showtimes">
                <button>10:00 AM</button>
                <button>2:00 PM</button>
                <button>6:00 PM</button>
                <button>9:00 PM</button>
              </div>
              <p className="price">Ticket price: ₹{selected.price}</p>
              <button className="confirm-btn" onClick={() => bookTicket(selected)}>
                Confirm Demo Booking
              </button>
              <small>This is a college demo. No real payment is taken.</small>
            </div>
          </div>
        )}

        <section className="bookings-section" id="bookings">
          <p className="eyebrow">YOUR ACTIVITY</p>
          <h2>My Bookings</h2>
          {bookings.length === 0 ? (
            <p>No bookings yet. Choose a movie and click Book Now!</p>
          ) : (
            bookings.map((title, index) => (
              <div className="booking-row" key={index}>
                <span>🎟️ {title}</span><span>Demo booking confirmed</span>
              </div>
            ))
          )}
        </section>
      </main>

      <footer>
        <a className="logo" href="#home">i<span>Movies</span></a>
        <p>Made with ❤️ for movie lovers.</p>
        <small>© 2026 iMovies. College Project Demo.</small>
      </footer>
    </div>
  );
}

export default App;