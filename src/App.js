import './App.scss';
import { signInWithGoogle } from './Firebase';
function App() {
  return (
    <div className="App">
      <button
        type="button"
        class="login-with-google-btn"
        onClick={signInWithGoogle}
      >
        Sign In With Google
      </button>
      <h1>Profile Name : {localStorage.getItem('name')}</h1>
      <h1>Email : {localStorage.getItem('email')}</h1>

      <h4>Profile Photo :</h4>
      <img
        src={localStorage.getItem('photo')}
        alt="photo"
        width="280"
        height="300"
      />
    </div>
  );
}

export default App;
