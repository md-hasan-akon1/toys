import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import UseTitle from '../../CostomHook/UseTitle';

const ErrorPage = () => {
    const { error, status } = useRouteError()
    UseTitle('error')
    return (
       
    );
};

export default ErrorPage;