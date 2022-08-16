import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Component as Chart } from '@graffiti/chart';
import { Component as LearningPatterns } from '@graffiti/learning-patterns';
import SelectProject from './SelectProject';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SelectProject />} />
                <Route path="/chart" element={<Chart />} />
                <Route path="/learning-patterns" element={<LearningPatterns />} />
            </Routes>
        </BrowserRouter>
    );
}
