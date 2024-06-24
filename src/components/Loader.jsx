import  { Component } from 'react';
import { Oval } from 'react-loader-spinner';

class Loader extends Component {
  render() {
    return (
      <div className="loader">
        <Oval color="#00BFFF" height={80} width={80} />
      </div>
    );
  }
}

export default Loader;
