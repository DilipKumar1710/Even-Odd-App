import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  incrementRandomNumber = () => {
    const randomNumber = this.getRandomNumber()
    this.setState(prevState => ({count: prevState.count + randomNumber}))
  }

  render() {
    const {count} = this.state

    const result = count % 2 === 0

    let paragraph

    if (result) {
      paragraph = <p className="count-description">Count is Even</p>
    } else {
      paragraph = <p className="count-description">Count is Odd</p>
    }

    return (
      <div className="main-container">
        <div className="count-container">
          <h1 className="heading">Count {count}</h1>
          {paragraph}
          <button
            className="Increment-btn"
            type="button"
            onClick={this.incrementRandomNumber}
          >
            Increment
          </button>
          <p className="about-count-increment">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
