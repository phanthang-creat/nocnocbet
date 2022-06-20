import React, { useEffect } from "react";
// import { Modal, } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Spinner } from "reactstrap";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import { storage } from "../../firebase/firebase-config";
import db from "../../firebase/firebase-config";
import { collection } from "firebase/firestore";
import { setModal } from "../../redux/reducer/modal";

import "./modal.scss";

const MyModal = () => {
  const dispatch = useDispatch();

  const type = useSelector((state) => state.modal.type);
  const dataCollection = collection(db, "image");

  // declare state
  const [render, setRender] = React.useState(true);
  const [imageList, setImageList] = React.useState([]);
  const [fetching, setFetching] = React.useState(true);
  const [indexImage, setIndexImage] = React.useState(0);

  const setShow = (value) => {
    dispatch(setModal(value));
  };

  useEffect(() => {
    var container = document.querySelector(
      ".my-modal"
    );
    // Swipe Up / Down / Left / Right
    var initialX = null;
    var initialY = null;
  
    function startTouch(e) {
      initialX = e.touches[0].clientX;
      initialY = e.touches[0].clientY;
    }
  
    function moveTouch(e) {
      if (initialX === null) {
        return;
      }
  
      if (initialY === null) {
        return;
      }
  
      var currentX = e.touches[0].clientX;
      var currentY = e.touches[0].clientY;
  
      var diffX = initialX - currentX;
      var diffY = initialY - currentY;
  
      if (Math.abs(diffX) > Math.abs(diffY)) {
        // sliding horizontally
        if (diffX > 0) {
          // swiped left
          setIndexImage(() => {
            if (indexImage < imageList.length - 1) {
              return indexImage + 1;
            }
            return indexImage;
          });
        } else {
          setIndexImage(() => {
            if (indexImage > 0) {
              return indexImage - 1;
            }
            return indexImage;
          });
          // swiped right
        }
      }
  
      initialX = null;
      initialY = null;
  
      e.preventDefault();
    }
    container.addEventListener("touchstart", startTouch, false);
    container.addEventListener("touchmove", moveTouch, false);
  }, [fetching, imageList, indexImage]);





  useEffect(() => {
    const getData = async () => {
      let tmp = [];
      const listRef = ref(storage, `gs://noccnoccbet.appspot.com/${type}/`);
      listAll(listRef)
        .then(function (list) {
          list.items.forEach(function (item) {
            let r = ref(
              storage,
              `gs://${item._location.bucket}/${item._location.path}`
            );
            getDownloadURL(r)
              .then((url) => {
                const xhr = new XMLHttpRequest();
                xhr.responseType = "blob";
                xhr.onload = (event) => {
                  const blod = xhr.response;
                  const reader = new FileReader();
                  reader.readAsDataURL(blod);
                  reader.onloadend = () => {
                    tmp.push({
                      url: reader.result,
                      name: item.name,
                    });
                  };
                };
                xhr.open("GET", url);
                xhr.send();
              })
              .catch((err) => {
                console.log("err", err);
              });
          });
        })
        .then(function (t) {
          let interval = setInterval(() => {
            if (tmp.length > 0) { 
              setImageList(tmp);
              setFetching(false);
              clearInterval(interval);
            }
          }, 100);
          // setTimeout(() => {
          //   setImageList(tmp);
          // }, 1000);
        })
        .catch(function (error) {
          console.log(error);
        })
    };

    if (render) {
      getData();
      setRender(false);
    }
  }, [dispatch, fetching, render, dataCollection, type, imageList]);

  return (
    <div className="my-modal" role="dialog" aria-modal="true" tabIndex="-1">
      <div
        className="my-modal__overlay"
        onClick={() =>
          setShow({
            status: false,
            type: "",
          })
        }
      ></div>
      <div
        className={`my-modal__content${fetching ? " waiting" : " "}${type === "music" ? " music" : ""
          }`}
      >
        <div className="my-modal__content__header">
          <h2>{type}</h2>
          {fetching === false && <button
              className="close-btn"
              onClick={() =>
                setShow({
                  status: false,
                  type: "",
                })
              }
            >
              <svg
                stroke="currentColor"
                fill="#fff"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="none"
                  stroke="#fff"
                  strokeWidth="2"
                  d="M3,3 L21,21 M3,21 L21,3"
                ></path>
              </svg>
            </button>
          }
        </div>
        <div className={`my-modal__content__body`}>
          {fetching && <Spinner />}
          {fetching === false && type !== "music" && imageList.length > 0 && (
            <>
              <button
                className={`left-arrow arrow${indexImage === 0 ? " disable" : ""
                  }`}
                onClick={() => {
                  setIndexImage(indexImage - 1);
                }}
              >
                <div className="_9zm0 _9zm1"></div>
              </button>
              <button
                className={`right-arrow arrow${indexImage === imageList.length - 1 ? " disable" : ""
                  }`}
                onClick={() => {
                  setIndexImage(indexImage + 1);
                }}
              >
                <div className="_9zm0 _9zm2"></div>
              </button>
              <div
                className="my-modal__content__body__image"
                id="list-images"
                style={{
                  width: `${imageList.length * 100}%`,
                  height: "100%",
                  position: "absolute",
                  left: `${indexImage * -100}%`,
                }}
              >
                {imageList.map((image, index) => {
                  return (
                    <div key={index} className="image-item">
                      <img id={`img${index}`} src={image.url} alt="" />
                    </div>
                  );
                })}
              </div>
            </>
          )}
          {fetching === false && type === "music" && imageList.length > 0 && (
            <div className="media-player">
              <audio id="audio" src={imageList[0].url} controls />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyModal;
