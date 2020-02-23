import React, {Component} from 'react';
import CoachItem from '../CoachItem';
import coachListStyle from './list.module.css';
import SelectedItems from "../SelectedItems";
import Spinner from "../Spinner";

class CoachList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: [],
            coaches: [],
            isFetching: false,
            error: null,
        };
    }

    loadData = () => {
        const limit = 40;

        this.setState({
            isFetching: true,
        });
        fetch(
            `http://192.168.0.109:3030/admin/users?limit=${limit}&offset=${this.state.coaches.length}`)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    coaches: [...this.state.coaches, ...data],
                    isFetching: false,
                });
            })
            .catch((e) => {
                this.setState({error: e, isFetching: false});
            });
    };

    componentDidMount() {
        this.loadData();
    }

    handleSelectCoachItem = (coach) => {
        const selectedArr = this.state.selected;

        if (selectedArr.includes(coach)) {

            selectedArr.splice(selectedArr.indexOf(coach), 1);
            this.setState({
                selected: selectedArr
            })

        } else {
            this.setState({
                selected: [...selectedArr, coach]
            });
        }
    };

    renderCoaches = () => {
        const {coaches} = this.state;

        return coaches.map((item) => (
            <li key={item.id}
                className={coachListStyle.container}>
                <CoachItem onSelectChange={this.handleSelectCoachItem}
                           coach={item}
                           level={item.id}/>
            </li>
        ));
    };

    renderSelectedCoaches = () => {
        let {selected} = this.state;
        return (<>
                <div className={coachListStyle.toPart}>
                    <p>To:</p>
                </div>

                <div className={coachListStyle.selectedCoachList}>
                    <SelectedItems coaches={selected}/>
                </div>
            </>
        )
    };

    render() {
        return (<div className={coachListStyle.wrapper}>
                <div className={coachListStyle.toContainer}>
                    {this.renderSelectedCoaches()}</div>

                <ul>{this.state.isFetching ?
                    <Spinner/>
                    : this.renderCoaches()}</ul>
            </div>
        );
    }
}

export default CoachList;
