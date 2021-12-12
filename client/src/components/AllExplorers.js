import React from 'react';
import { Typography, IconButton, Paper, Grid } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import makeStyles from '@mui/styles/makeStyles';
import { Box } from '@mui/system';
// import { Box } from '@mui/system';

const useStyles = makeStyles((theme) => ({
    Paper: {
        width: 'auto',
        display: 'flex',
        padding: '1em',
        justifyContent: 'flex-start',
        margin: '1em',
    },
}));

const AllExplorers = (props) => {
    const classes = useStyles();
    return (
        <Grid
            container
            flexDirection="row"
            alignItems="center"
            justifyContent="flex-start"
            gutterbottom
        >
            {Object.entries(props.explorerList).map(([key, val]) => (
                <Grid item md={4} wrap="wrap" spacing={5}>
                    <Paper className={classes.Paper} elevation={3}>
                        <Typography key={key}>
                            {val.lastname} {val.firstname}
                        </Typography>
                        <input
                            type="text"
                            name="firstname"
                            placeholder="firstname"
                            onChange={props.handleChange}
                        ></input>
                        <input
                            type="text"
                            name="lastname"
                            placeholder="lastname"
                            onChange={props.handleChange}
                        ></input>
                        <Box>
                            <IconButton
                                variant="contained"
                                onClick={() => props.updateExplorerFromTheList(val._id)}
                                color="primary"
                                size="small"
                            >
                                <EditIcon fontSize="" />
                            </IconButton>
                            <IconButton
                                variant="contained"
                                onClick={() => props.deleteExplorerFromTheList(val._id)}
                                color="error"
                                size="small"
                            >
                                <DeleteIcon fontSize="small" />
                            </IconButton>
                        </Box>
                    </Paper>
                </Grid>
            ))}
        </Grid>
    );
};

export default AllExplorers;
