import { PostMethods } from "@newrr/api";
import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

interface NotLoggedInProps {
  hasUser: boolean;
}

const NotLoggedIn: React.FC<NotLoggedInProps> = ({ hasUser }) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const title = hasUser
    ? "You do not have access to this page"
    : "You are not logged in";

  const handleLogout = async () => {
    const postMethods = new PostMethods(import.meta.env.VITE_G_API_URL);
    await postMethods.postLogout();
    queryClient.invalidateQueries({ queryKey: ["user"] });
    navigate("/admin");
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-darkestgreen px-4 py-8 w-96 rounded-lg flex flex-col items-between shadow-2xl">
        <p className="text-4xl font-bold text-white mb-4 text-center">
          {title}
        </p>
        <p className="text-white text-center mb-4">Please login to continue.</p>
        <button
          onClick={handleLogout}
          className="bg-white text-darkestgreen px-4 py-2 rounded-md"
        >
          Click here to log in
        </button>
      </div>
    </div>
  );
};

export default NotLoggedIn;
