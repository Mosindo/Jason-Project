import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import Header from './components/Header';
import  Footer from './components/Footer'
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
            {Object.entries(explorerList).map(([key, val]) => (
                <>
                    <Typography key={key}>
                        {val.lastname} {val.firstname}
                    </Typography>
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
                    <button onClick={() => updateExplorerFromTheList(val._id)}>update</button>
                    <button onClick={() => deleteExplorerFromTheList(val._id)}>delete</button>
                </>
            ))}
            <Footer />
        </>
    );
};
