import React from 'react';
import { Typography } from '@mui/material';

const AllExplorers = (props) => {
    return (
        <>
            {Object.entries(props.explorerList).map(([key, val]) => (
                <>
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
                    <button onClick={() => props.updateExplorerFromTheList(val._id)}>update</button>
                    <button onClick={() => props.deleteExplorerFromTheList(val._id)}>delete</button>
                </>
            ))}
        </>
    );
};

export default AllExplorers;
