import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
const RandImage = () => {
  //   const [image, setImage] = useState();
  const [images, setImages] = useState([]);

  //? Integrating localStorage ->
  const imagesData = localStorage.getItem("images-Data") || [];

  // const getImgs = async () => {
  //   let imgData = await axios.get("https://picsum.photos/200/300?random=5");
  //   setImage(imgData.request.responseURL);
  //   setImages([...images, imgData.request.responseURL]);
  //   console.log(imgData.request.responseURL);
  // };

  const ListImgs = async () => {
    if (imagesData.length === 0) {
      let imgDataList = await axios.get("https://picsum.photos/v2/list");
      setImages([...imgDataList.data]);
      localStorage.setItem("images-Data", JSON.stringify(imgDataList.data));
      // setImages([...images, imgDataList.data]);
      console.log("LOADED FROM API!!");
    } else {
      setImages(JSON.parse(imagesData));
      console.log("LOADED FROM LOCAL STORAGE !!");
    }
  };

  // const fetchNekoImage = async () => {
  //   try {
  //     const res = await axios.get(
  //       "https://api.nekosia.cat/api/v1/images/catgirl"
  //     );
  //     const json = res.data;
  //     setImages([...images, json.image.original.url]);
  //     //   console.log(json.image.original.url);
  //   } catch (err) {
  //     console.error(err.stack);
  //   }
  // };

  useEffect(() => {
    ListImgs();
  }, []);

  return (
    <>
      {/* <button
        className="py-2 px-3 bg-red-400 active:scale-70 rounded m-10"
        onClick={ListImgs}
      >
        Get Image
      </button> */}

      <div className="bg-gray-300 h-full w-full flex gap-3 flex-wrap p-3 justify-center items-center">
        {images.length === 0 ? (
          <p>Image Not Found</p>
        ) : (
          images.map((item, idx) => {
            // console.log(item.download_url);
            return (
              <img
                src={item.download_url}
                alt="img"
                key={idx}
                className="h-50 w-50"
              />
            );
          })
        )}
      </div>
    </>
  );
};

export default RandImage;
