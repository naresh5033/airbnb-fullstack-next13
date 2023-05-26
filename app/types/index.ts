import { Listing, Reservation, User } from "@prisma/client";


//as we know some of the current user field are date str
//other than text when we pass the obj thru wire it will give warnig, inorder to get rid of that lets type cast those fields
// and create a safe user with the type casted fields
export type SafeListing = Omit<Listing, "createdAt"> & {
  createdAt: string; //replace the date type with the str
};

export type SafeReservation = Omit<
  Reservation, 
  "createdAt" | "startDate" | "endDate" | "listing"
> & { //replace those fields with the cust types
  createdAt: string;
  startDate: string;
  endDate: string;
  listing: SafeListing;
};

export type SafeUser = Omit< //now we can use this safe user in place our current user in nav bar and the user menu
  User,
  "createdAt" | "updatedAt" | "emailVerified"
> & {
  createdAt: string;
  updatedAt: string;
  emailVerified: string | null;
};
