const CardSkeleton = () => {
  return (
    <div>
      <div className="flex flex-col gap-4 w-full">
        <div className="skeleton h-32 w-full"></div>
        <div className="skeleton h-4 w-28"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="flex gap-5 items-center w-full">
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
        </div>
        <div className="skeleton h-10 w-44"></div>
      </div>
    </div>
  );
};

export default CardSkeleton;
