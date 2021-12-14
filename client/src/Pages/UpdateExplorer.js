import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Container, Button, Typography } from '@mui/material';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const UpdateExplorer = () => {
    const [inputValue, setInputValue] = useState({
        firstname: '',
        lastname: '',
    });
    const [data, setData] = useState([]);
    console.log(data);

    const { id } = useParams('');

    useEffect(() => {
        axios.get(`http://localhost:5000/${id}`).then(function (response) {
            setData(response.data);
        });
    }, [id]);

    const updateExplorerFromTheList = (id) => {
        axios.patch(`http://localhost:5000/${id}`, {
            _id: id,
            firstname: inputValue.firstname,
            lastname: inputValue.lastname,
        });
    };

    const handleChange = (event) => {
        setInputValue({
            ...inputValue,
            [event.target.name]: event.target.value,
        });
    };

    return (
        <div>
            <Header />
            <Container>
                <Typography>
                Êtes-vous sûr de vouloir modifier les information concernant ce bon Argonaute
                    : {data.firstname} {data.lastname}
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
            </Container>
            <Button
                variant="contained"
                onClick={updateExplorerFromTheList()}
                color="warning"
                size="small"
            >
                Non
            </Button>
            <Button
                variant="contained"
                onClick={updateExplorerFromTheList()}
                color="primary"
                size="small"
            >
                Oui
            </Button>
            <Footer />
        </div>
    );
};

export default UpdateExplorer;
