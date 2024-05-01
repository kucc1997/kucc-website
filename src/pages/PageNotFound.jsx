import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img
        src="/assets/images/404-image.png" // Replace with the path to your 404 image
        alt="404 Page Not Found"
        className="w-64 h-auto mb-4"
      />
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">404 Page Not Found</h1>
        <p className="text-lg text-gray-600">
          Go back to{' '}
          <Link to="/" className="text-teal-600">
            home page
          </Link>
          .{' '}
        </p>
      </div>
    </div>
  )
}

export default PageNotFound
