import React from 'react';
import AssetSelector from './asset_selector.jsx';

class App extends React.Component {
  constructor(args) {
    super(args);
    this.state = {selectValue: 'Nothing chosen',
      // debounce: {timer: null, period: 300, // qe -- queue_empty, ctp -- clear_to_pass
      // results: null, input: null}
    }
  }
  render() {

    {/*const doFetch = (input) => {*/}
      {/*return fetch(`/product?q=${input}`, {credentials: 'include'})*/}
    //     .then((response) => {
    //       return response.json();
    //     }).then((data) => {
    //       let ret = {options: data};
    //       if(data.length < QueryLimit) ret['complete'] = true;
    //       return ret;
    //     });
    // };

    return (
      <div id="inferno_app">
        <h2>A Simple and easily customizable selector for React</h2>
        <AssetSelector
          // loadOptions={doFetch}
          minimumInput={2}
          placeholder="Search products"
          value={this.state.selectValue}
          selectionChanged={this.saveSelectedAsset.bind(this)}
          title="Choose a product"
        />
      </div>)
  }

  saveSelectedAsset(val) {
    console.log("Chosen:");
    console.log(val);
    //this.setState({selectValue: val});
  }
}

export default App
