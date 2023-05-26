import prisma from "@/app/libs/prismadb";

import getCurrentUser from "./getCurrentUser";

//the comp  to get all the favourite listings that the user has made
export default async function getFavoriteListings() {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return [];
    }

    const favorites = await prisma.listing.findMany({
      where: {
        id: { // find many by id , spread the current user's faourites or [] if there is no favourite
          in: [...(currentUser.favoriteIds || [])]
        }
      }
    });
// lets sanitize our favorites (listing)
    const safeFavorites = favorites.map((favorite) => ({
      ...favorite,
      createdAt: favorite.createdAt.toString(),
    }));

    return safeFavorites;
  } catch (error: any) {
    throw new Error(error);
  }
}
