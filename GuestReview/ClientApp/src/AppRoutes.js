import { GuestReview } from "./components/postReview/GuestReview.tsx";
import { GuestReviewsList } from "./components/guestReviewsList/GuestReviewsList.tsx";

const AppRoutes = [
  {
    index: true,
    element: <GuestReview />
  },
  {
    path: '/reviews-list',
    element: <GuestReviewsList />
  }
];

export default AppRoutes;
