import React from 'react'
import ReactDOM from 'react-dom'

import Search from './components/Search'
import Header from './components/Header'
import 'bulma'
import './style.scss'

class App extends React.Component {
  render(){
    return (
      <section className="section">
        <div className="general">
          <Header />
          <Search />
        </div>
      </section>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
