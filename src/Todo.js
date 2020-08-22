import React from 'react'
import './Todo.css'
import {List,ListItemAvatar, ListItem, ListItemText} from '@material-ui/core'

function Todo(props) {
    return (
        <List className="todo">
            <ListItem>
                <ListItemAvatar>
                </ListItemAvatar>
                <ListItemText primary={props.text} secondary="DeadLine"/>
            </ListItem>
        </List>
    )
}

export default Todo