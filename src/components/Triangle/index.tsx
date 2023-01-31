import React from 'react'

// Styles
import { TriangleForm } from './Triangle.styles';

const Triangle = () => {
    return (
        <>
        <TriangleForm direction='left'/>
        <TriangleForm direction='right'/>
        </>
    );
}

export default Triangle;