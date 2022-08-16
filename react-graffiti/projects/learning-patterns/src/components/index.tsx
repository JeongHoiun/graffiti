import React from 'react';
import { MenuItem, Select } from '@mui/material';
import Singleton from './Singleton';

export default function LearningPatterns() {
    const [selectedComponent, setSelectedComponent] = React.useState('');

    return (
        <div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <p style={{ marginRight: '12px' }}> select pattern : </p>
                <Select style={{ height: '30px' }} value={selectedComponent} onChange={(e) => setSelectedComponent(e.target.value)}>
                    <MenuItem value="Singleton">Singleton</MenuItem>
                </Select>
            </div>
            <div>{selectedComponent === 'Singleton' && <Singleton />}</div>
        </div>
    );
}
