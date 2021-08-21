import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TodayIcon from '@material-ui/icons/Today';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import './Home.css'
import TodayPlan from '../TodayPlan/TodayPlan';
import AllPlan from '../AllPlan/AllPlan';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    appBar: {
        backgroundColor: "#1976d2",
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    eachTab: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            width: '100%',
            height: '100%',
        },
    }
}));

export default function Home() {
    const classes = useStyles();

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    // React.useEffect(()=>{
    //     console.log(value);
    // })

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Planner
                    </Typography>
                </Toolbar>
            </AppBar>
            <Paper square className={classes.root}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="fullWidth"
                    indicatorColor="primary"
                    textColor="primary"
                    aria-label="icon tabs example"
                >
                    <Tab icon={<TodayIcon />} label="Today's Plans" aria-label="today" />
                    <Tab icon={<CalendarViewDayIcon />} label="All Plans" aria-label="all" />
                </Tabs>
            </Paper>
            <div className={classes.eachTab}>
                <Paper elevation={3}>
                    {value === 0 && <TodayPlan></TodayPlan>}
                    {value === 1 && <AllPlan></AllPlan>}
                </Paper>
            </div>
            <div className="fabIcon">
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </div>
        </div>
    );

}