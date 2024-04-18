import EstateCard from "./EstateCard";
import PropTypes from "prop-types";


const EstateSection = ({data}) => {

  return (
    <div className="my-9">
      <div>
        <h1 className="text-5xl text-center font-bold my-10">Estate Section</h1>
      </div>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
     {
        data.map((item) => <EstateCard item={item} key={item.id}/>)
      }
     </div>
    </div>
  );
};

EstateSection.propTypes = {
  data : PropTypes.array.isRequired
}

export default EstateSection;
