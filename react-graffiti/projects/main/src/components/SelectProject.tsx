import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography } from '@mui/material';

export default function SelectProject() {
    return (
        <div style={{ padding: '64px' }}>
            <Typography variant="h5">Select a link</Typography>
            <Link to="/chart">
                <Button variant="contained">chart</Button>
            </Link>
        </div>
    );
}
