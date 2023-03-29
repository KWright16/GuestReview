import { SubmitReview } from "./components/postReview/SubmitReview";
import { GuestReviewsList } from "./components/guestReviewsList/GuestReviewsList";

const AppRoutes = [
  {
    index: true,
    element: <SubmitReview />
  },
  {
    path: '/reviews-list',
    element: <GuestReviewsList />
  }
];

export default AppRoutes;
