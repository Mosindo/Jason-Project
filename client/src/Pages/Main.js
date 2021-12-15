import React, { useState, useEffect } from 'react';
import { Typography, TextField, Button, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import AllExplorers from '../components/AllExplorers';
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';

const useStyles = makeStyles({
    error: {
        color: 'red',
    },
});
const Main = () => {
    const [explorerList, setExplorerList] = useState([]);
    const [error, SetError] = useState(true);
    const [inputValue, setInputValue] = useState({
        firstname: '',
        lastname: '',
    });

    const classes = useStyles();

    useEffect(() => {
        axios.get('http://localhost:5000/').then(function (response) {
            setExplorerList(response.data);
        });
    }, [explorerList]);

    const AddExplorerToTheList = () => {
        SetError(true);
        axios
            .post('http://localhost:5000/', {
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
    const updateExplorerFromTheList = (id) => {
        axios.patch(`http://localhost:5000/${id}`, {
            _id: id,
            firstname: inputValue.firstname,
            lastname: inputValue.lastname,
        });
    };

    const deleteExplorerFromTheList = (id) => {
        axios.delete(`http://localhost:5000/${id}`);
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

            <AllExplorers
                explorerList={explorerList}
                handleChange={handleChange}
                updateExplorerFromTheList={updateExplorerFromTheList}
                deleteExplorerFromTheList={deleteExplorerFromTheList}
            />

            <Footer />
        </div>
    );
};

export default Main;