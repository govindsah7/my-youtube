const Shimmer = () => {
    return (
      <>
        <div className="pl-8 pr-2 flex flex-wrap">
        {Array(15).fill("").map((e, index) => (
            <div key={index} className="bg-gray-200 w-56 p-2 m-2 h-56 shadow-lg rounded-lg"> </div>
          ))}
        </div>
      </>
    );
  };

  export default Shimmer;
