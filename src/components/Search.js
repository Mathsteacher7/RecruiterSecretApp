import React from 'react'
import axios from 'axios'

let developerName = 'Your develpoer'


class Search extends React.Component {

  constructor(){
    super()

    this.state={
      languages: [],
      errors: {}
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e){
    console.log(e.target.value)
    developerName = e.target.value
  }

  handleSubmit(e){
    e.preventDefault()
    axios.get(`https://api.github.com/users/${developerName}/repos`)
      .then(res => this.setState({languages: this.state.languages.concat(res.data.map(repo => repo.language))}))
      .then(this.setState({ errors: {}}))
      .catch(err => this.setState({ errors: err.response.statusText }))
  }




  render(){
    return(
      <section className="section">
        <div className="hero">
          <div className="hero-body">
            <form onSubmit={this.handleSubmit}>
              <div className="field">
                <label className="label">Developer main language</label>
                <input
                  className="input"
                  name="developer"
                  placeholder="Developer007"
                  onChange={this.handleChange}
                />

              </div>
              <button className="button is-primary" >Find out the developer's favourite language</button>
            </form>

            <div>
              {!(this.state.errors === 'Not Found') ? <h3>{developerName} mostly worked with&nbsp;
                { this.state.languages.sort((a,b) =>
                  this.state.languages.filter(v => v===a).length
        - this.state.languages.filter(v => v===b).length
                ).pop()}
              </h3> :
                <h3>GitHub does not know this username
                </h3> }
            </div>
          </div>
        </div>
      </section>
    )
  }

}

export default Search
