import EstateCard from "./EstateCard";

const EstateSection = ({data}) => {

  return (
    <div className="my-9">
      <div>
        <h1 className="text-5xl text-center font-bold my-10">Estate Section</h1>
      </div>
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
     {
        data.map((item) => <EstateCard item={item} key={item.id}/>)
      }
     </div>
    </div>
  );
};

export default EstateSection;
