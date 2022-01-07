import logo from './logo.svg';
import './App.css';

function fetch_result(translation_string, source_lang, target_lang) {
  fetch("https://translation.googleapis.com/language/translate/v2?key=AIzaSyCijnhZfoTUvLT9AueRXzHxYURWNXFYjkw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          // Authorization: `Bearer ${key}`
        },
        redirect: "follow",
        referrer: "no-referrer",
        body: JSON.stringify({
          q: translation_string,
          source: source_lang,
          target: target_lang,
          format: "text"
        })
      })
        .then(res => res.json())
        .then(result => {
          console.log(result)
          console.log(result.data.translations[0])
          })
        .catch(error => console.log(error)); // reject in case of any error 
}
function App() {
  let translation = fetch_result("Hello World!", 'en', 'es');
  return (
    <div className="App">
      <h1>Useless Translator</h1>
      <div className="flex-container">
        <div className="box">
          <p>translation box</p>
        </div>
        <div>
          <p>Arrow</p>
        </div>
        <div className="box">
          <p>translated box</p>
          <p>{translation}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
