import logo from '../chrome_chang.png';
import '../App.css';
import React from 'react'
// import { useParams } from 'react-router-dom'

function View(props) {
  console.log(props)
  const block = props.match.params.block
  console.log(block)

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

export default View;
