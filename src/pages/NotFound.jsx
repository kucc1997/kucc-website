import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

export default function NotFound() {
	return (
		<>
			<Helmet>
				<title>404 - KUCC</title>
			</Helmet>
			<div className="flex-col space-y-8 p-6 h-full">
				<div className="flex-col">
					<h1 className="text-[#00baa3] text-lg sm:text-2xl md:text-3xl font-bold text-center py-5">
						Error 404: Page Not Found
					</h1>
					<div className="flex-col items-center justify-center">
						<h1 className="text-[#00baa3] text-lg sm:text-2xl md:text-3xl font-bold text-center">
							Oops! The page you are looking for does not exist.
						</h1>
						<Link
							to="/"
							className="text-lg font-bold text-center text-blue-500 hover:underline underline-offset-1 mx-auto block py-2"
						>
							Go back to the home page
						</Link>
					</div>
				</div>
			</div>
		</>
	)
}
