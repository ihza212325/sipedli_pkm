const CardMenu = ({ name }) => {
  return (
    <>
      <div className="w-64 rounded overflow-hidden bg-white shadow-lg flex flex-col justify-center text-center">
        <div className="p-7 justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10em"
            height="10em"
            viewBox="0 0 50 50"
          >
            <g>
              <path d="M50 33.838c0-7.288-4.91-13.656-11.835-15.574C37.729 8.119 29.342 0 19.092 0 8.564 0 0 8.564 0 19.092c0 3.43.913 6.771 2.647 9.704L.07 38.113l9.318-2.577c2.695 1.594 5.737 2.492 8.875 2.628C20.182 45.089 26.55 50 33.838 50c2.909 0 5.738-.775 8.224-2.247l7.867 2.176-2.176-7.867C49.225 39.576 50 36.747 50 33.838zm-40.15-1.47l-5.578 1.544 1.543-5.578-.352-.55c-1.657-2.594-2.533-5.6-2.533-8.692 0-8.912 7.25-16.162 16.162-16.162 8.912 0 16.162 7.25 16.162 16.162 0 8.912-7.25 16.162-16.162 16.162-3.093 0-6.098-.876-8.692-2.534l-.55-.352zm35.878 13.36l-4.139-1.145-.553.36c-2.142 1.391-4.632 2.127-7.198 2.127-5.728 0-10.762-3.703-12.545-9.014 8.771-1.011 15.752-7.992 16.763-16.764 5.31 1.784 9.014 6.818 9.014 12.546 0 2.566-.736 5.056-2.128 7.198l-.36.553 1.146 4.139z"></path>
              <path d="M31.627 33.465L34.557 33.465 34.557 36.395 31.627 36.395zM36.627 33.465L39.557 33.465 39.557 36.395 36.627 36.395zM26.627 33.465L29.557 33.465 29.557 36.395 26.627 36.395zM17.627 26.465L20.557 26.465 20.557 29.395 17.627 29.395zM22.021 14.648c0 .832-.338 1.6-.953 2.163l-3.441 3.15v3.574h2.93v-2.284l2.489-2.279c1.21-1.108 1.905-2.684 1.905-4.324 0-3.23-2.628-5.859-5.86-5.859-3.23 0-5.859 2.628-5.859 5.86h2.93c0-1.616 1.314-2.93 2.93-2.93 1.615 0 2.93 1.314 2.93 2.93z"></path>
            </g>
          </svg>
          <div className="px-6 pt-4 pb-2 font-bold text-2xl">
            <p>{name}</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default CardMenu;
