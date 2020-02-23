import React, {Component} from 'react';

export default class SelectedItems extends Component {
    constructor(props) {
        super(props);
    }

    renderItems = (items) => {

        return items.map((item) => (
            <div key={item.id}>{item.firstName + ' ' + item.lastName}</div>
        ))
    };

    render() {
        let {coaches} = this.props;

        return (
            <>
                {this.renderItems(coaches)}
            </>
        )
    }
}