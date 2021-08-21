import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import axios from 'axios';
import config from '../config.json';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const higherOrderClass = theme => ({
    root: {
        width: '100%',
        maxWidth: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
});

class AllPlan extends Component {
    state = {
        plansList: []
    }
    componentDidMount() {
        axios.get(config.dbUrl + "plans/get").then((res) => {
            this.setState({ plansList: res.data }, () => {
                console.log(this.state.plansList)
            });
        });
    }

    convertDate = (timestamp) => {
        return new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(timestamp)
    }

    convertTime = (timestamp) => {
        return new Intl.DateTimeFormat('en-US', { hour: '2-digit', minute: '2-digit' }).format(timestamp)
    }

    render() {
        const { classes } = this.props;
        return (
            <>
                <List className={classes.root}>
                    {
                        this.state.plansList.map((obj, i) => {
                            return (
                                <>
                                    <ListItem key={i} alignItems="flex-start">
                                        <ListItemAvatar>
                                            <Avatar alt={obj.name} />
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={obj.name}
                                            secondary={
                                                <React.Fragment>
                                                    <Typography
                                                        component="span"
                                                        variant="body2"
                                                        className={classes.inline}
                                                        color="textPrimary"
                                                    >
                                                        {this.convertDate(obj.date)}
                                                    </Typography>
                                                    {" — " + this.convertTime(obj.starttimestamp) + " to " + this.convertTime(obj.endtimestamp)}
                                                </React.Fragment>
                                            }
                                        />
                                        <ListItemSecondaryAction>
                                            <IconButton edge="end" aria-label="edit">
                                                <EditIcon />
                                            </IconButton>
                                            <IconButton color='secondary' edge="end" aria-label="delete">
                                                <DeleteIcon />
                                            </IconButton>
                                        </ListItemSecondaryAction>
                                    </ListItem>
                                    {i < this.state.plansList.length - 1 && <Divider key={i + 1} variant="inset" component="li" />}
                                </>
                            )
                        })
                    }

                    {this.state.plansList.length === 0 &&
                        <ListItem>
                            <ListItemText align='center' primary="No plans yet"></ListItemText>
                        </ListItem>
                    }

                </List>
            </>
        );
    }
}

export default withStyles(higherOrderClass, { withTheme: true })(AllPlan);