import React from 'react';
import { useParams } from 'react-router';

const Post = ({match}) => {

    const {id} = useParams()

    return (
        // <h2>Id is = {match.params.id} </h2>
        <h2>Id is = {id}</h2>
    );
};

export default Post;