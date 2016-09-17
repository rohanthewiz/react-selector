import React from 'react';
import _ from 'lodash';

class Dropdown extends React.Component {
  constructor(args) {
    super(args);
    this.state = {
      selected_index: null, count: 0
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.items) this.setState({selected_index: 0, count: nextProps.items.length});
  }

  render() {
    if (!this.props.visible) return null;
    return (
      <ul className="asset-selector__dropdown">
        <li className="dropdown__tally">{this.tally()}</li>
        {this.items()}
      </ul>
    )
  }

  tally() {
    if(this.props.searching) {
      return <span>Searching...</span>
    } else if(this.state.count >= 12) {
      return <span>12 items or more found</span>
    } else {
      return <span>{this.state.count} item{this.state.count != 1 ? 's' : ''} found</span>
    }
  }

  items() {
    return (
      _.map(this.props.items, (item, key) => {
        return (
          <li key={key} onClick={this.itemClicked.bind(this)}
              className={key === this.state.selected_index ?
                "dropdown__li dropdown__li--selected" : "dropdown__li" }
          >
            {item.label}
          </li>
        )
      })
    )
  }

  itemClicked(evt) {
    this.props.setSelected(evt.target.innerText);
    evt.preventDefault();
    return false;
  }

  incrementSelectedIndex() {
    let new_index = this.state.selected_index + 1;
    if (new_index >= this.props.items.length) new_index = this.props.items.length - 1;
    this.setState({selected_index: new_index});
  }

  decrementSelectedIndex() {
    let new_index = this.state.selected_index - 1;
    if (new_index < 0) new_index = 0;
    this.setState({selected_index: new_index});
  }

  selectedIndex() {
    return this.state.selected_index;
  }
}

export default Dropdown;
