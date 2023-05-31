import "./loading.css";

const Loading = () => {
  return (
    <>
      <div className=" justify-content-center mt-8">
        <div className="loader center mx-auto">
          <div className="circle bg-gradient-to-r from-blue-900  via-sky-900  to-teal-500"></div>
          <div className="circle bg-gradient-to-r from-blue-900  via-sky-900  to-teal-500"></div>
          <div className="circle bg-gradient-to-r from-blue-900  via-sky-900  to-teal-500"></div>
          <div className="circle bg-gradient-to-r from-blue-900  via-sky-900  to-teal-500"></div>

        </div>
      </div>
    </>
  );
};

export default Loading;
