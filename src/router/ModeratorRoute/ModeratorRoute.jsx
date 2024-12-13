import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth/useAuth";
import useModerator from "../../hooks/useModerator/useModerator";

const ModeratorRouter = ({ children }) => {
  const { user, loading } = useAuth();
  const [isModerator, isModeratorLoading] = useModerator();
  const location = useLocation();

  if (loading || isModeratorLoading) {
    return (
      <>
        <div className="flex justify-center items-center h-40">
          <div className="loader border-t-4 border-blue-500 w-10 h-10 rounded-full animate-spin"></div>
        </div>
      </>
    );
  }

  if (user && isModerator) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default ModeratorRouter;
