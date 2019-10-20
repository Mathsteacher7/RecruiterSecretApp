import React from 'react'
import axios from 'axios'

let developerName = 'Your develpoer'
let findingMostCommon
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
    developerName = e.target.value
  }

  handleSubmit(e){
    e.preventDefault()
    axios.get(`https://api.github.com/users/${developerName}/repos`)
      .then(res => {
        if (res.data.length === 0){
          this.setState({languages: ['No language in GitHub (his page is empty).']})
        } else {
          this.setState({languages: []})
          this.setState({languages: this.state.languages.concat(res.data.map(repo =>  repo.language))})
        }
      })
      .then(this.setState({ errors: {}}))
      .catch(err => this.setState({ errors: err.response.statusText }))
  }


  render(){

    findingMostCommon = this.state.languages.reduce(function(prev, cur) {
      prev[cur] = (prev[cur] || 0) + 1
      return prev
    }, {})
    return(
      <section className="section">
        <div className="search">
          <form onSubmit={this.handleSubmit}>
            <div className="field">
              <label className="label is-large">Developer main language</label>
              <input
                className="input"
                name="developer"
                placeholder="Developer007"
                onChange={this.handleChange}
              />
            </div>
            <button className="button has-background-grey" >Find favourite language</button>
          </form>

          <div>
            {!(this.state.errors === 'Not Found') ? <h3>{developerName} mostly worked with&nbsp;
              { Object.keys(findingMostCommon).filter(x => {
                return findingMostCommon[x] === Math.max.apply(null,
                  Object.values(findingMostCommon))
              }).filter(l => l !== 'null').join(' & ')}
            </h3> :
              <h3>GitHub does not know this username.
              </h3> }
          </div>
        </div>
      </section>
    )
  }
}

export default Search
