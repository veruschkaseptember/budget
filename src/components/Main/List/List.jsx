import React from 'react';
import { List as MUList, ListItem, ListItemAvatar, ListItemText, Avatar, ListItemSecondaryAction, IconButton, Slide } from '@material-ui/core';
import { Delete, MoneyOff } from '@material-ui/icons';
import useStyles from '../List/styles';

const List = () => {
    const classes = useStyles();

    const transactions =[
        { id: 1, }
    ];

    return (
        <MUList dense={false} className={classes.list}>
                {transactions.map((transaction) => (
                    <Slide direction="down" in mountOnEnter unmountOnExit key={transaction.id}>

                    </Slide>
                ))}
        </MUList>
    )
}

export default List
