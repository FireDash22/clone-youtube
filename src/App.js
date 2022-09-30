import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';

import ChannelDetail from './components/ChannelDetail'
import VideoDetail from './components/VideoDetail'
import SearchFeed from './components/SearchFeed'
import Navbar from './components/NavBar'
import Feed from './components/Feed'

const App = () => {
  return (
    <Box sx={{ backgroundColor: '#000' }}>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Feed />} />
        <Route path='/video/:id' element={<VideoDetail />} />
        <Route path='/channel/:id' element={<ChannelDetail />} />
        <Route path='/search/:searchTerm' element={<SearchFeed />} />
      </Routes>
    </Box>
  )
}

export default App