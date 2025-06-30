import React, { Suspense } from "react";
import { useAuth } from "../context/AuthContext";

const MusicLibrary = React.lazy(() => import("music-library-mf/MusicLibrary"));

const DashboardPage = () => {
  const { user } = useAuth();
  console.log(user);

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Welcome to Your Music Library
        </h1>
        <p className="text-gray-600">
          {user?.role === "admin"
            ? "As an admin, you can add, edit, and delete songs from the library."
            : "Browse and filter through your music collection."}
        </p>
      </div>

      <Suspense
        fallback={
          <div className="bg-white rounded-lg shadow p-8">
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
              <span className="ml-3 text-gray-600">
                Loading Music Library...
              </span>
            </div>
          </div>
        }
      >
        <MusicLibrary userRole={user?.role} />
      </Suspense>
    </div>
  );
};

export default DashboardPage;
