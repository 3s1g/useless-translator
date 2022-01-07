import './App.css';
import { BiArrowFromLeft } from 'react-icons/bi'
import React, { useState, useEffect } from 'react';

function App() {
  const languages = ['af', 'sq', 'am', 'ar', 'hy', 'az', 'eu', 'be', 'bn', 'bs', 'bg', 'ca', 'ceb', 'zh', 'co', 'hr','cs', 'da', 'nl', 'eo', 'et', 'fi', 'fr', 'fy', 'gl', 'ka', 'de', 'el', 'gu', 'ht', 'ha', 'he', 'hi', 'hu', 'is', 'ig', 'id', 'ga', 'it', 'ja', 'jv', 'kn', 'kk', 'km', 'rw', 'ko', 'ku', 'ky', 'lo', 'lv', 'lt', 'lb', 'mk', 'mg', 'ms', 'ml', 'mt', 'mi', 'mr', 'mn', 'my', 'ne', 'no', 'ny', 'or', 'ps', 'fa', 'pl', 'pt', 'pa', 'ro', 'ru', 'sm', 'gd', 'sr', 'st', 'sn', 'sd', 'si', 'sk', 'sl', 'so', 'es', 'su', 'sw', 'sv', 'tl', 'tg', 'ta', 'tt', 'te', 'th', 'tr', 'tk', 'uk', 'ur', 'ug', 'uz', 'vi', 'cy', 'xh', 'yi', 'yo', 'zu'];
  
  const [language_array, set_language_array] = useState(languages);
  const [input, set_input] = useState("");
  const [output, set_output] = useState("");
  const [temp, set_temp] = useState("");
  const [output_1, set_output_1] = useState("");
  const [output_2, set_output_2] = useState("");
  const [output_3, set_output_3] = useState("");
  const [output_4, set_output_4] = useState("");
  const [output_5, set_output_5] = useState("");

  useEffect(() => {
    async function translated_data() {
      let response = await fetch_result(temp, 'en', language_array[0]);
      response = await response.json();
      const translatedText = response.data.translations[0].translatedText;
      set_output_1(translatedText);
    }
    translated_data();
  }, [temp]);

  useEffect(() => {
    async function translated_data() {
      let response = await fetch_result(output_1, language_array[0], language_array[1]);
      response = await response.json();
      const translatedText = response.data.translations[0].translatedText;
      set_output_2(translatedText);
    }
    translated_data();
  }, [output_1]);
  
  useEffect(() => {
    async function translated_data() {
      let response = await fetch_result(output_2, language_array[1], language_array[2]);
      response = await response.json();
      const translatedText = response.data.translations[0].translatedText;
      set_output_3(translatedText);
    }
    translated_data();
  }, [output_2]);

  useEffect(() => {
    async function translated_data() {
      let response = await fetch_result(output_3, language_array[2], language_array[3]);
      response = await response.json();
      const translatedText = response.data.translations[0].translatedText;
      set_output_4(translatedText);
    }
    translated_data();
  }, [output_3]);

  useEffect(() => {
    async function translated_data() {
      let response = await fetch_result(output_4, language_array[3], 'en');
      response = await response.json();
      const translatedText = response.data.translations[0].translatedText;
      set_output_5(translatedText);
    }
    translated_data();
  }, [output_4]);

  function shuffle(array) {
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
  }

  return array;
}

  function fetch_result(translation_string, source_lang, target_lang) {
    return fetch("https://translation.googleapis.com/language/translate/v2?key=AIzaSyCijnhZfoTUvLT9AueRXzHxYURWNXFYjkw", {
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
  }

  function translate() {
    set_language_array(shuffle(languages));
    console.log(language_array);
    set_temp(input);
    }

  return (
    <div className="App">
      <h1>GOOD Translator</h1>
      <div className="flex-container">
        <div className="box">
          <form>
            <input type="text" onChange={(e) => set_input(e.target.value)} value={input}></input>
          </form>
        </div>
        <button onClick={translate}>
          <BiArrowFromLeft size={50}/>
        </button>
        <div className="box">
          <p>{output_5}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
