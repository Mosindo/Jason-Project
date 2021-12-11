import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import AllExplorers from './components/AllExplorers';
import Header from './components/Header';
import Footer from './components/Footer';
import axios from 'axios';

export const Main = () => {
    const [explorerList, setExplorerList] = useState([]);
    const [inputValue, setInputValue] = useState({
        firstname: '',
        lastname: '',
    });

    useEffect(() => {
        axios.get('http://localhost:5000/').then(function (response) {
            setExplorerList(response.data);
        });
    }, [explorerList]);

    const AddExplorerToTheList = () => {
        axios.post('http://localhost:5000/', {
            firstname: inputValue.firstname,
            lastname: inputValue.lastname,
        });
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
        setInputValue({
            ...inputValue,
            [event.target.name]: event.target.value,
        });
    };

    return (
        <>
            <Header />

            <Typography>App.js test </Typography>
            <input
                type="text"
                name="firstname"
                placeholder="firstname"
                onChange={handleChange}
            ></input>
            <input
                type="text"
                name="lastname"
                placeholder="lastname"
                onChange={handleChange}
            ></input>
            <button onClick={() => AddExplorerToTheList()}>Add a new explorer!</button>
            <AllExplorers
                explorerList={explorerList}
                handleChange={handleChange}
                updateExplorerFromTheList={updateExplorerFromTheList}
                deleteExplorerFromTheList={deleteExplorerFromTheList}
            />
            <Footer />
        </>
    );
};
