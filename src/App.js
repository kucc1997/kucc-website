import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@mui/material'
import theme from './theme'
import Layout from './HOC/Layout'
import Home from './Test'
import ExCommunityPage from './pages/teams/ExCommunity'
import AdvBoardPage from './pages/teams/AdvBoard'
import DocTeamPage from './pages/teams/DocTeam'
import CommunityCoPage from './pages/teams/CommunityCo'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />} />
            <Route path="advisory-board" element={<AdvBoardPage />} />
            <Route path="executive-committee" element={<ExCommunityPage />} />
            <Route path="community-coordinators" element={<CommunityCoPage />} />
            <Route path="documentation-teams" element={<DocTeamPage />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
