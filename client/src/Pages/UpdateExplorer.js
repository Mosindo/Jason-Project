import { useState, useEffect } from 'react';
import Header from '../components/Header';
import { Button, Typography, Box, TextField } from '@mui/material';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateExplorer = () => {
    const [inputValue, setInputValue] = useState({
        firstname: '',
        lastname: '',
    });
    const [data, setData] = useState([]);

    const { id } = useParams('');
    let navigate = useNavigate();

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
        navigate('/');
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
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                m={20}
            >
                <Typography>
                    {`Modifier les information concernant ce bon Argonaute : ${data.firstname}
                    ${data.lastname}`}
                </Typography>
                <TextField
                    type="text"
                    name="firstname"
                    placeholder="Prénom"
                    onChange={handleChange}
                    margin="dense"
                ></TextField>
                <TextField
                    type="text"
                    name="lastname"
                    placeholder="Nom"
                    onChange={handleChange}
                    margin="dense"
                ></TextField>
                <Box display="flex" flexDirection="row">
                    <Box m={2}>
                        <Button
                            variant="contained"
                            onClick={() => navigate('/')}
                            color="warning"
                            size="small"
                        >
                            Retour
                        </Button>
                    </Box>
                    <Box m={2}>
                        <Button
                            variant="contained"
                            onClick={() => updateExplorerFromTheList(id)}
                            color="primary"
                            size="small"
                        >
                            Modifier
                        </Button>
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default UpdateExplorer;
