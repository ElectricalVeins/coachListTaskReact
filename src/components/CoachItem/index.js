import React, {Component} from 'react';
import coachItemStyles from './item.module.css';
import ColorHash from 'color-hash';

const colorHex = new ColorHash;

class CoachItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSelected: false,
            error: null,
        };
    }

    onClickHandler = () => {

        this.setState({
            isSelected: !this.state.isSelected
        });

        this.props.onSelectChange(this.props.coach);
    };

    errHandler = () => {
        this.setState({error: true})
    };

    errRender = () => {

        const {firstName, lastName} = this.props.coach;
        const fullName = firstName + ' ' + lastName;
        const letters = firstName[0] + lastName[0];
        const hex = colorHex.hex(fullName);

        return (<div
            style={{backgroundColor: hex}}
            className={coachItemStyles.imgError}>
            <p>{letters}</p>
        </div>)

    };

    imgRender = () => {
        const {profilePicture} = this.props.coach;
        return (
            <img src={profilePicture || ' '}
                 alt={'coach'}
                 className={coachItemStyles.coachPhoto}
                 onError={this.errHandler}/>
        )
    };

    render() {
        const {firstName, lastName} = this.props.coach;
        const index = this.props.level;

        return (
            <div className={coachItemStyles.container}>

                {this.state.error ? this.errRender() : this.imgRender()}

                <div className={coachItemStyles.userInfo}>
                    <div className={coachItemStyles.userInfoName}>{firstName + ' ' +
                    lastName}</div>
                    <div className={coachItemStyles.userLevel}>{`Level ${index}`}</div>
                </div>

                <div onClick={this.onClickHandler}
                     className={this.state.isSelected
                         ? coachItemStyles.isSelectedElement
                         : coachItemStyles.selectElement}>✔
                </div>

            </div>
        );
    }

}

export default CoachItem;