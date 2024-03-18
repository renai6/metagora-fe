import { useNavigate } from "react-router-dom";

const usePageNavigate = () => {
  const navigate = useNavigate();

  const onNavigate = (destination: string) => {
    return () => {
      navigate(destination);
    };
  };

  return onNavigate;
};

export default usePageNavigate;
