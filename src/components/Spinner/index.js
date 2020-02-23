import React, {Component} from 'react';
import spinnerStyles from './spinner.module.css'
export default class Spinner extends Component{
    render() {
        return(
            <div className={spinnerStyles.loader}>Loading...</div>
        )
    }
}