export { default } from "next-auth/middleware"

// here lets protect all our routes by using the next middleware
export const config = { 
  matcher: [
    "/trips",
    "/reservations",
    "/properties",
    "/favorites"
  ]
};
