import React, {Component} from 'react';
import coachItemStyles from './item.module.css';

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

    render() {
        const {profilePicture, firstName, lastName} = this.props.coach;
        const index = this.props.level;

        return (
            <div className={coachItemStyles.container}>

                <img src={profilePicture} alt={'coach'}
                     className={coachItemStyles.coachPhoto}/>

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