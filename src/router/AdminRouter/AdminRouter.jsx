import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin/useAdmin";
import useAuth from "../../hooks/useAuth/useAuth";

const AdminRouter = (children) => {
  const { user, loading } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();

  if (loading || isAdminLoading) {
    return (
      <>
        <div className="flex justify-center items-center h-40">
          <div className="loader border-t-4 border-blue-500 w-10 h-10 rounded-full animate-spin"></div>
        </div>
      </>
    );
  }

  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRouter;
