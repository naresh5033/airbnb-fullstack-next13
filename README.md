# Full Stack Airbnb

- This is a Next.js 13 App (typescript project)with Router: React, Tailwind, Prisma, MongoDB, NextAuth 2023

- `npx create-next-app --typescript`
- `npm i tailwindcss postcss autoprefixer`
- `npx tailwindcss init -p`
- zustand package --> A small, fast and scalable bearbones state-management solution using simplified flux principles. Has a comfy API based on hooks, isn't boilerplatey or opinionated.

- React hook form - another pckg --> the key concepts in React Hook Form is to register your component into the hook. This will make its value available for both the form validation and submission
- Prisma -> ```npm i -D prisma```  ```npx init prisma``` --> Prisma is a server-side library that helps developers read and write data to the database in an intuitive, efficient and safe way.
- once we design our schema, we can push our schema to the db ```npx prisma db push ```
- query string ```npm i query-string``` --> Parse and stringify URL query strings.
Auth packages 

- some of the auth packages are ```npm i next-auth @prisma/client @next-auth/prisma-adapter```
- bcrypt for the credential login for the persomal use ```npm i -D @types/bcrypt```
- by default in the schema the prisma uses postgresql, but we gon use mongo db instead.
- World-countries package will be used in our hook --> ```npm i world-countries```
- REact-select pckg ```npm i react-select```React Select helps you develop powerful select components that just work out of the box, without stopping you from customising the parts that are important to you.
- THis pckg we can use in the country select comp
- "leaflet" -- ```npm i leaflet @types/leaflet react-leaflet``` --> Leaflet is the leading open-source JavaScript library for mobile-friendly interactive maps. Weighing just about 42 KB of gzipped JS plus 4 KB of gzipped CSS code.
- "Cloudinary" CDN --> for the img and video uploads, ```npm i cloudinary``` and the next js pckg. ```npm i next-cloudinary```
- date-fns ```npm i date-fns``` for the reservation date 
- "react-date-range" ```npm i react-date-range @types/react-date-range``` for the listing reservation date range (Range Type)
- "react-spinners ```npm i react-spinners ```" for the loader
- Tailwind design
- Tailwind animations and effects
- Full responsiveness
- Credential authentication
- Google authentication
- Github authentication
- Image upload using Cloudinary CDN
- Client form validation and handling using react-hook-form
- Server error handling using react-toast
- Calendars with react-date-range
- Page loading state
- Page empty state
- Booking / Reservation system
- Guest reservation cancellation
- Owner reservation cancellation
- Creation and deletion of properties
- Pricing calculation
- Advanced search algorithm by category, date range, map location, number of guests, rooms and bathrooms
  - For example we will filter out properties that have a reservation in your desired date range to travel
- Favorites system
- Shareable URL filters
  - Lets say you select a category, location and date range, you will be able to share URL with a logged out friend in another browser and they will see the same results
- How to write POST and DELETE routes in route handlers (app/api)
- How to fetch data in server react components by directly accessing database (WITHOUT API! like Magic!)
- How to handle files like error.tsx and loading.tsx which are new Next 13 templating files to unify loading and error handling
- How to handle relations between Server and Child components!

### Prerequisites

**Node version 14.x**

``

### Install packages

```shell
npm install
```

### Setup .env file

```js
DATABASE_URL=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GITHUB_ID=
GITHUB_SECRET=
NEXTAUTH_SECRET=
```

### Setup Prisma

```shell
npx prisma db push

```

### Start the app

```shell
npm run dev
```

## Available commands

Running commands with npm `npm run [command]`

| command | description                              |
| :------ | :--------------------------------------- |
| `dev`   | Starts a development instance of the app |

# cust hooks

- there are plenty of cust hooks that we used in this project under the hooks dir

# Server comp

- we ve to fetch the user(get current users) by using the next svr comp ( ONCE the user the logged in), wanna show his info.
- inside the actions dir --> "getCurrentUsers.ts" 
- lly we can fetch other infos as well such as getFavouriteListings, getListings, getReservation, getListingById etc

# Auth

- for the auth we ve enabled the google acc(google cloud console) and the github auth so grab the proj id and the api secret from both 

# Deployment

- ```npm run lint```  once the app is deployed change the oauth url from the local host to the deployed site's url in both github and google cloud console.
- the app was [depployed in versel and the url is](https://airbnb-next-rouge.vercel.app)