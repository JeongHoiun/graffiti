import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Component as Chart } from '@graffiti/chart';
import SelectProject from './SelectProject';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SelectProject />} />
            </Routes>
        </BrowserRouter>
    );
}
