import prisma from "@/app/libs/prismadb";

//this reservation route is not only for the individual listing, but also for the myreservation and my trips as well
// so we can ve listingid, userid, and the author id for the myreservation (of particular user)
//tips - userId -- all the reservations that the user ve
//myreservation - authorId -- all the reservations that the other user made for our listings
interface IParams {
  listingId?: string;
  userId?: string;
  authorId?: string;
}

// when we already reserved on a particular date, we ve to disable the same date for reservation

export default async function getReservations(
  params: IParams
) {
  try {
    const { listingId, userId, authorId } = params;

    const query: any = {};
        
    if (listingId) {
      query.listingId = listingId;
    };

    if (userId) {
      query.userId = userId;
    }

    if (authorId) {
      query.listing = { userId: authorId };
    }

    const reservations = await prisma.reservation.findMany({
      where: query,
      include: {
        listing: true
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    //as usual before sending reservatioins lets fix the date obj fiels and cast them to str
    const safeReservations = reservations.map(
      (reservation) => ({
      ...reservation,
      createdAt: reservation.createdAt.toISOString(),
      startDate: reservation.startDate.toISOString(),
      endDate: reservation.endDate.toISOString(),
      listing: {
        ...reservation.listing,
        createdAt: reservation.listing.createdAt.toISOString(),
      },
    }));

    return safeReservations;
  } catch (error: any) {
    throw new Error(error);
  }
}
