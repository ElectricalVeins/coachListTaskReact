import React, {Component} from 'react';

export default class SelectedItems extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCoaches: [],
        }
    }


    renderList = () => {
        const {coaches} = this.props;

        const renderList = coaches.map((item) => (
            item.firstName + ' ' + item.lastName
        ));

        if (renderList.length > 1) {
            //const list=  renderList.map((item)=>(item+', '));
            return renderList.join()
        }


        return renderList
    };

    render() {


        return (
            <p>
                {this.renderList()}
            </p>
        )

    }


}