import React from 'react';
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from '@material-ui/core';
import useStyles from './styles';
const Main = () => {
    const classes = useStyles();

    return (

        <Card className={classes.root}>
            <CardHeader title="Expense Tracker" subheader="Powered by Speechly" />
        <CardContent>
            <Typography align="center" variant="h5">Total Balance R200</Typography>
            <Typography variant="subtitle1" style={{ lineHeight: '1.5em', marginTop: '20px' }}>
                {/* InfoCard... */}
                Try saying: Add income for R50 000 in Category Salary for Monday...
            </Typography>
            <Divider />
            {/* Form */}
        </CardContent>
        <CardContent className={classes.cardContent}> 
            <Grid container spacing={2}>
                <Grid item xs={12}>
                </Grid>}
                {/* <List /> */}
            </Grid>
        </CardContent>
        </Card>
    );
}

export default Main
