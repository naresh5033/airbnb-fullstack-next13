
import getCurrentUser from "@/app/actions/getCurrentUser";
import getListingById from "@/app/actions/getListingById";
import getReservations from "@/app/actions/getReservations";

import ClientOnly from "@/app/components/ClientOnly";
import EmptyState from "@/app/components/EmptyState";

import ListingClient from "./ListingClient";

interface IParams {
  listingId?: string;
}

// the individual listing page 
const ListingPage = async ({ params }: { params: IParams }) => {

  // as we know this is svr comp, we can't use hooks here we can only use actions, as it directly communicates to the db
  const listing = await getListingById(params);
  const reservations = await getReservations(params);
  const currentUser = await getCurrentUser(); 

  if (!listing) {
    return (
      <ClientOnly>
        {/* there is possibility that the listing maybe null as we ve in svr comp, if !listing then return null, so we use the empty state */}
        <EmptyState /> 
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <ListingClient
        listing={listing}
        reservations={reservations}
        currentUser={currentUser}
      />
    </ClientOnly>
  );
}
 
export default ListingPage;
