import { useContext } from "react";
import Context from "../Context/Context";

const EstateSection = () => {
  // Access the 'data' state from the context using useContext
  const { data } = useContext();

  // Log the 'data' state to the console for debugging
  console.log(data);

  return (
    <div>
      {/* Render content based on the 'data' state */}
      {/* You can map over 'data' and render individual estate components here */}
    </div>
  );
};

export default EstateSection;
