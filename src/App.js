import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@mui/material'
import theme from './theme'
import Layout from './HOC/Layout'
import ExCommunityPage from './pages/teams/ExCommunity'
import AdvBoardPage from './pages/teams/AdvBoard'
import DocTeamPage from './pages/teams/DocTeam'
import CommunityCoPage from './pages/teams/CommunityCo'
import CodeOfConductPage from './pages/CodeOfConductPage'
import ContactPage from './pages/ContactPage'
import './input.css'
import NewsNoticePage from './pages/newsAndNotices/NewsNoticePage'
import EventsPage from './pages/events/EventsPage'
import ItExpressPage from './pages/publications/ItExpressPage'

import StudentBlog from './components/StudentBlog'
import BlogPage from './components/BlogPage'

import HomePage from './pages/homePage/homePage'
import NotFound from './pages/NotFound'

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<Router>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route path="" element={<HomePage />} />
						<Route path="advisory-board" element={<AdvBoardPage />} />
						<Route path="executive-committee" element={<ExCommunityPage />} />
						<Route path="community-coordinators" element={<CommunityCoPage />} />
						<Route path="documentation-teams" element={<DocTeamPage />} />
						<Route path="code-of-conduct" element={<CodeOfConductPage />} />
						<Route path="contact" element={<ContactPage />} />
						{/* <Route path="register" element={<RegisterPage />} /> */}
						<Route path="events" element={<EventsPage />} />
						<Route path="it-express" element={<ItExpressPage />} />

						<Route path="news-and-notices" element={<NewsNoticePage />} />
						<Route path="blogs" element={<StudentBlog />} />
						<Route path="blog/:id" element={<BlogPage />} />
						<Route path="*" element={<NotFound />} />
					</Route>
				</Routes>
			</Router>
		</ThemeProvider>
	)
}

export default App
