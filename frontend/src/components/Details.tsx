
// Details component
export default function Details ({ onClose, title, description }:any)  {
    return (
      <div className=" fixed top-0 left-0 w-full h-full bg-slate-600 bg-opacity-90 flex justify-center items-center z-50">
        <div className="bg-white p-10 md:p-44 rounded-xl absolute z-50 flex flex-col gap-20 mx-1 md:mx-40">
          <h2>{title}</h2>
          <div>
            {description}
          </div>
        <button onClick={onClose} className="bg-slate-400 w-28 py-1 rounded-md text-white ">Close</button>
        </div>
      </div>
    );
  };