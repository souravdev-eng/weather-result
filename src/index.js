import React from 'react';
import ReactDOM from 'react-dom';
import SeasionDisplay from './SeasionDisplay';

class App extends React.Component {
  state = { lat: null, errMessage: '' };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errMessage: err.message })
    );
  }
  render() {
    if (this.state.errMessage && !this.state.lat) {
      return <div>Error: {this.state.errMessage}</div>;
    } else if (this.state.lat && !this.state.errMessage) {
      return (
        <div>
          <SeasionDisplay lat={this.state.lat} />
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}
ReactDOM.render(<App />, document.querySelector('#root'));
