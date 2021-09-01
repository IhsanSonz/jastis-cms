import React from 'react'

function GenericNotFound() {
    return (
        <div class="bg-gradient-to-br from-gray-800 to-blue-900">
            <div class="w-9/12 m-auto py-16 min-h-screen flex items-center justify-center">
                <div class="bg-white shadow overflow-hidden sm:rounded-lg pb-8">
                    <div class="border-t border-gray-600 text-center pt-8">
                        <h1 class="text-9xl font-bold text-gray-700">404</h1>
                        <h1 class="text-6xl font-medium py-8">oops! Page not found</h1>
                        <p class="text-2xl pb-8 px-12 font-medium">Oops! The page you are looking for does not exist. It might have been moved or deleted.</p>
                        <a href="/">
                            <button class="bg-gradient-to-r from-purple-400 to-blue-500 hover:from-purple-500 hover:to-orange-500 text-white font-semibold px-6 py-3 rounded-md mr-6">
                                Dashboard
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GenericNotFound
