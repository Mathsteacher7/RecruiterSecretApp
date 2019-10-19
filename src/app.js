import React from 'react'
import ReactDOM from 'react-dom'

import Search from './components/Search'
import 'bulma'

class App extends React.Component {
  render(){
    return (
      <section className="section">
        <div className="container">
          <p>So if you really want to know what language your recrutee knows, just insert his GitHub user name, and you will find the your answer!</p>
        </div>
        <Search />
      </section>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
