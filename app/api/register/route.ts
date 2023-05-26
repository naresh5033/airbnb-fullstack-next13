import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

import prisma from "@/app/libs/prismadb";

// for our register route

//ths is one of the features in the new route handlers, we can finally define cust post, get, update Methods, we no longer ve to use the switch method or req methods.
export async function POST(
  request: Request, 
) {
  //lets get the body and extract all the fields 
  const body = await request.json();
  const { 
    email,
    name,
    password,
   } = body;

   const hashedPassword = await bcrypt.hash(password, 12);

   const user = await prisma.user.create({
    data: {
      email,
      name,
      hashedPassword,
    }
  });

  //and to return the res we can use NextResponse
  return NextResponse.json(user);
}
