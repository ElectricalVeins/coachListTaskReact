import React, {Component} from 'react';

export default function SelectedItems(props) {

    let {coaches} = props;

    return (
        <p>
            {coaches.map((item) => (
                item.firstName + ' ' + item.lastName
            ))}
        </p>
    )

}