import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import "./sass/main.css";

import RootLayout from "./pages/Root";
import SearchPage from "./pages/Search";
import SearchResults from "./pages/Results";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import AdPage, { loader as loadResultData } from "./pages/AdPage";
import CreateAd, { action as createAdAction } from "./pages/Create";
import MyAds, { loader as loadAds } from "./pages/MyAds";
import ChangeAd, { loader as loadCarData } from "./pages/ChangeAd";
import MyProfile, { loader as loadUserData } from "./pages/MyProfile";
import { protectedRoute } from "./ui/ProtectedRoute";
import { useAuth } from "./contexts/AuthContext";
import { useUploadImage } from "./contexts/ImageUploadContext";

const App = () => {
  const { currentUser } = useAuth();
  const { uploadFiles } = useUploadImage();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <SearchPage />,
        },
        {
          path: "results",
          children: [
            {
              index: true,
              element: <SearchResults />,
            },
            {
              path: ":resultId",
              element: <AdPage />,
              loader: loadResultData,
            },
          ],
        },
        {
          path: "signup",
          element: <SignUp />,
        },
        {
          path: "login",
          element: <LogIn />,
        },
        {
          path: "create",
          element: <CreateAd />,
          loader: () => {
            return protectedRoute(currentUser);
          },
          action: async ({ request, params }) => {
            await createAdAction(
              request,
              params,
              currentUser,
              uploadFiles,
              false
            );
            return redirect(`/`);
          },
        },
        {
          path: "myads",
          children: [
            {
              index: true,
              element: <MyAds />,
              loader: async () => {
                return loadAds(currentUser);
              },
            },
            {
              path: ":adId",
              element: <ChangeAd />,
              loader: loadCarData,
              action: async ({ request, params }) => {
                await createAdAction(
                  request,
                  params,
                  currentUser,
                  uploadFiles,
                  true
                );

                return redirect(`/`);
              },
            },
          ],
          loader: () => {
            return protectedRoute(currentUser);
          },
        },
        {
          path: "myprofile",
          element: <MyProfile />,
          loader: async () => {
            protectedRoute(currentUser);
            const userData = await loadUserData(currentUser);

            return userData;
          },
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
