import React, { useState, useEffect } from 'react';
import { Typography, TextField, Button, Box, IconButton, Paper, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';
import dotenv from 'dotenv';
import { Link } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const useStyles = makeStyles((theme) => ({
    Paper: {
        width: 'auto',
        display: 'flex',
        padding: '1em',
        justifyContent: 'space-between',
        margin: '1em',
    },
    nameInput: {
        alignItems: 'flex-start',
    },
    error: {
        color: 'red',
    },
}));

dotenv.config();

const Main = () => {
    const [explorerList, setExplorerList] = useState([]);
    const [error, SetError] = useState(true);
    const [inputValue, setInputValue] = useState({
        firstname: '',
        lastname: '',
    });

    const classes = useStyles();

    useEffect(() => {
        axios.get(process.env.REACT_APP_URI).then(function (response) {
            setExplorerList(response.data);
        });
    }, [explorerList]);

    const AddExplorerToTheList = () => {
        SetError(true);
        axios
            .post(process.env.REACT_APP_URI, {
                firstname: inputValue.firstname,
                lastname: inputValue.lastname,
            })
            .catch(function (error) {
                if (error.response.status === 409) {
                    return SetError(false);
                }
            });
        setInputValue({ firstname: '', lastname: '' });
    };

    const deleteExplorerFromTheList = (id) => {
        axios
            .delete(`${process.env.REACT_APP_URI}/${id}`, { _id: id })
            .then(() => {
                alert('Post deleted!');
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleChange = (event) => {
        event.preventDefault();
        setInputValue({
            ...inputValue,
            [event.target.name]: event.target.value,
        });
    };

    return (
        <div>
            <Header />

            <Typography variant="h4">Ajouter un(e) Argonaute </Typography>
            <form class="new-member-form">
                <label for="name">Nom de l&apos;Argonaute</label>
                <Typography hidden={error} className={classes.error}>
                    Dernier ajout refusé, Argonaute déjà présent dans la liste
                </Typography>
                <Box display="flex" flexDirection="column" alignItems="center">
                    <TextField
                        id="firstname"
                        label="Prénom"
                        variant="outlined"
                        name="firstname"
                        onChange={handleChange}
                        margin="dense"
                        value={inputValue.firstname}
                    />
                    <TextField
                        id="lastname"
                        label="Nom"
                        variant="outlined"
                        name="lastname"
                        onChange={handleChange}
                        margin="dense"
                        value={inputValue.lastname}
                    />
                    <Button
                        variant="contained"
                        onClick={() => AddExplorerToTheList()}
                        size="large"
                        margin="dense"
                    >
                        Ajouter
                    </Button>
                </Box>
            </form>

            <Grid
                container
                flexDirection="row"
                alignItems="center"
                justifyContent="flex-start"
                gutterbottom
            >
                {Object.entries(explorerList).map(([key, val]) => (
                    <Grid item md={4} wrap="wrap" spacing={10} key={key}>
                        <Paper className={classes.Paper} elevation={3}>
                            <Typography>
                                {val.lastname} {val.firstname}
                            </Typography>
                            <Box>
                                <Link to={`/update/${val._id}`}>
                                    <IconButton variant="contained" color="primary" size="small">
                                        <EditIcon fontSize="" />
                                    </IconButton>
                                </Link>
                                <IconButton
                                    variant="contained"
                                    onClick={() => {
                                        deleteExplorerFromTheList(val._id);
                                    }}
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

            <Footer />
        </div>
    );
};

export default Main;
