import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const CardJob = ({ jobs, setmodalImage, setselectImage }) => {
  const navigate = useNavigate();
  const [images, setimages] = useState([]);
  useEffect(() => {
    const groupedJobs = jobs.reduce((result, job, index) => {
      if (index % 3 === 0) {
        result.push([job]);
      } else {
        result[result.length - 1].push(job);
      }
      return result;
    }, []);
    setimages(groupedJobs);
    console.log(groupedJobs, "dsakdpsakp");
  }, []);

  const handleClick = (url) => {
    setselectImage(url);
    setmodalImage(true);
  };

  return (
    <>
      <div class="max-w-screen-2xl mx-auto px-4  relative bg-gray-50">
        <div class="flex flex-col md:flex-col  gap-2">
          {images.map((item, index) => {
            return (
              <>
                <div class="flex flex-1 flex-col gap-2 ">
                  <div class=" md:flex flex-1 flex-row gap-2 ">
                    <div
                      onClick={() => handleClick(item[0]?.url)}
                      class="flex flex-1 flex-col transition ease-in-out delay-150 hover:scale-105 hover:z-20 cursor-pointer md:mt-0 mt-2"
                    >
                      {/* <!-- img_02 -->  */}
                      <img class="object-cover rounded-lg" src={item[0]?.url} />
                    </div>
                    <div
                      onClick={() => handleClick(item[1]?.url)}
                      class="flex flex-1 flex-col transition ease-in-out delay-150 hover:scale-110 hover:z-20 cursor-pointer md:mt-0 mt-2"
                    >
                      {/* <!-- img_02 -->  */}
                      <img
                        class="object-cover md:-translate-y-1/2 rounded-lg md:mt-0 mt-2"
                        src={item[1]?.url}
                      />
                    </div>
                    <div
                      onClick={() => handleClick(item[2]?.url)}
                      class="hidden md:flex flex-1 flex-col transition ease-in-out delay-150 hover:scale-110 hover:z-20 cursor-pointer"
                    >
                      {/* <!-- img_03 -->  */}
                      <img
                        class="object-cover h-full rounded-lg"
                        src={item[2]?.url}
                      />
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default CardJob;
