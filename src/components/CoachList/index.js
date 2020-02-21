import React, { Component } from 'react';
import CoachItem from '../CoachItem';
import coachListStyle from './list.module.css';

class CoachList extends Component {
  constructor (props) {
    super(props);
    this.state = {
      selected: [],
      coaches: [],
      isFetching: false,
      error: null,
    };
  }

  loadData = () => {
    const limit = 5;

    this.setState({
                    isFetching: true,
                  });
    fetch(
      `http://192.168.0.113:3030/admin/users?limit=${limit}&offset=${this.state.coaches.length}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
                        coaches: [...this.state.coaches, ...data],
                        isFetching: false,
                      });
      })
      .catch((e) => {
        this.setState({ error: e, isFetching: false });
      });
  };

  componentDidMount () {
    this.loadData();
  }

  handleSelect = (coach) => {

    let toArr=[{...this.state.selected, coach}];

    this.setState({
                    selected: toArr
                  });
  };

  renderCoaches = () => {
    const { coaches } = this.state;

    return coaches.map((item) => (

      <li key={item.id}
          className={coachListStyle.container}>
        <CoachItem onSelectChange={this.handleSelect}
                   coach={{ ...item, isSelected: false }}
                   level={item.id}/>
      </li>
    ));
  };

  render () {
    let { selected } = this.state;

    console.log(selected);

    return (<>
        <div>selected</div>
        <ul>{this.renderCoaches()}</ul>
      </>
    );
  }
}

export default CoachList;
