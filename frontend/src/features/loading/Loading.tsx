import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import { useAppSelector } from '../../app/hooks';
import { selectLoading } from './loadingSlice';

function Loading() {
    const loading = useAppSelector(selectLoading);

    return (
        loading ? (
            <Box sx={{
                display: 'flex',
                width: '100%',
                height: '95%',
                backgroundColor: 'grey',
                opacity: '50%',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 100,
                position: 'absolute',
                top: '5%'
            }}>
                <CircularProgress sx={{ height: '20vh' }} />
            </Box>
        ) : null
    );
}

export default Loading;