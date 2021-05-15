import logo from './logo.svg';
import './App.css';

function App() {
  let block = null

  const url = new URL(window.location.href)
  const params = new URLSearchParams(url.search)
  console.log(params.get('block'))
  block = params.get('block')

  if(block === null){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            何しに来たんですか
          </p>
          <a
            className="App-link"
            href="https://Twitter.com/Tech_Kazu"
            target="_blank"
            rel="noopener noreferrer"
          >
            開発者Twitter
          </a>
        </header>
      </div>
    );
  }else{
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            お前がChromeちゃんを差し置いて<code>{block}</code>ばかり見ているので<br />
            Chromeちゃんが怒って<code>{block}</code>をブロックしちゃいました。
          </p>
          <p>お前のせいです。あーあ。</p>
          <a
            className="App-link"
            href="https://Twitter.com/Tech_Kazu"
            target="_blank"
            rel="noopener noreferrer"
          >
            開発者に抗議する
          </a>
        </header>
      </div>
    );
  }
}

export default App;
