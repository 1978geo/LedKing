/**
 * @description: This file contains the routes for the application.
 * It is used to define the routes and their corresponding components.
 * @type: {string}[] - An array of strings representing the routes.
 * @example: const routes = ['/', '/about', '/contact']
 */
export const publicRoutes = ['/', 'auth/login']

/**
 * @description: This file contains the routes for the application.
 * It is used to define the routes and their corresponding components.
 * @type: {string}[] - An array of strings representing the routes.
 * @example: const routes = ['/', '/about', '/contact']
 */
export const authRoutes = ['/admin']

/**
 * @description: This file contains the routes for the application.
 * It is used to define the routes and their corresponding components.
 * @type: {string} - A string representing the default login redirect route.
 * @example: const DEFAULT_LOGIN_REDIRECT = '/admin'
 */
export const DEFAULT_LOGIN_REDIRECT = '/admin'

/**
 * @description: This file contains the routes for the application.
 * It is used to define the routes and their corresponding components.
 * @type: {string} - A string representing the default logout redirect route.
 * @example: const DEFAULT_LOGOUT_REDIRECT = '/auth/login'
 */
export const DEFAULT_LOGOUT_REDIRECT = '/auth/login'
