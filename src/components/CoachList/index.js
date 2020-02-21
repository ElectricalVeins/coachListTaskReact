import React, { Component } from 'react';
import CoachItem from '../CoachItem';
import coachListStyle from './list.module.css';

class CoachList extends Component {
  constructor (props) {
    super(props);
    this.state = {
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

  renderCoaches = () => {
    const { coaches } = this.state;
    return coaches.map((item) => (
      <li key={item.id}
          className={coachListStyle.container}>
        <CoachItem coach={item} level={item.id}/>
      </li>
    ));
  };

  render () {

    return (

      <ul>
        {
          this.renderCoaches()
        }
      </ul>
    );

  }

}

export default CoachList;
