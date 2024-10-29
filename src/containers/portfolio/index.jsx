import  {useRef} from "react";
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";
import {portfolioData} from "../../data/data";
// import required modules
import {Autoplay, Navigation, Pagination} from "swiper/modules";

const Portfolio = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <div className="portfolio">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper container portfolio__container"
        >
          {portfolioData.map(({ id, image, name, linkGitHub, linkVercel }) => {
            return (
              <SwiperSlide key={id}>
                <article className="portfolio__item">
                  <div className="portfolio__item-image">
                    <img src={image} alt="" />
                  </div>
                  <h3>{name}</h3>
                  <div className="portfolio__item-cta">
                    {
                      linkGitHub && (
                            <a href={linkGitHub} className="btn" target="_blank">
                              Github
                            </a>
                        )
                    }
                    {
                      linkVercel && (
                            <a
                                href={linkVercel}
                                className="btn btn-primary"
                                target="_blank"
                            >
                              Live Demo
                            </a>
                        )
                    }

                  </div>
                </article>
              </SwiperSlide>
            );
          })}

          <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent} style={{ color: "#06a07f" }}></span>
          </div>
        </Swiper>
      </div>
    </>
  );
};
export default Portfolio;
