import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

function App() {
  // const [block, updateBlock] = useState('')
  let block = ''

  const urlParamStr = window.location.search.substring(1)
  console.log(urlParamStr)

  if(urlParamStr.length){
    let params = {}

    // クエリパラメータを取得する
    urlParamStr.split('&').forEach( param => {
      const tmp = param.split('=')
      params = {
        ...params,
        [tmp[0]]: tmp[1]
      }
    })
    console.log(params.block)

    block = params.block
  }

  if(block === ''){
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
