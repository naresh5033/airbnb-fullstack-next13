import { NextResponse } from "next/server";

import prisma from "@/app/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser"; //from actions 


//lets create the post route for our listings
export async function POST(
  request: Request, 
) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const body = await request.json();
  //lets extract all the fields from our bocy
  const {  
    title,
    description,
    imageSrc,
    category,
    roomCount,
    bathroomCount,
    guestCount,
    location,
    price,
   } = body;

   // this part is optional, just the condn checking
  Object.keys(body).forEach((value: any) => {
    if (!body[value]) { //if any of the body field(val) is missing throw error 
      NextResponse.error();
    }
  });

  const listing = await prisma.listing.create({
    data: {
      title,
      description,
      imageSrc,
      category,
      roomCount,
      bathroomCount,
      guestCount,
      locationValue: location.value,
      price: parseInt(price, 10), //10 - radix/ base
      userId: currentUser.id
    }
  });

  return NextResponse.json(listing);
}
