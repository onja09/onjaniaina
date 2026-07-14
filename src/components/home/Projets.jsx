import React from "react";
import Slider from "react-slick";
import { bannerItem, projets } from "../../constant";

function Projets() {
  const Settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full xs:py-14 md:py-24 bg-blue-500">
      <div>
        <h2 className="afterTitle1 text-4xl text-center text-slate-50">
          Projets <span className="text-slate-900">en ligne</span>
        </h2>
        <p className="max-w-[550px] text-center text-white mx-auto mb-16">
          Une collection de projets web fonctionnels, développés avec des
          technologies modernes et accessibles en ligne.
        </p>
      </div>
      <div className="w-full h-full bg-white pt-4 pb-3">
        <Slider {...Settings}>
          {projets.map((item) => (
            <a
              key={item._id}
              href={item.url}
              className="bg-slate-900"
              target="__blank"
              rel="noopener noreferrer"
            >
              <div className="w-full px-1 py-2 relative overflow-hidden">
                <div className="w-full h-full">
                  <img
                    className="w-full h-[300px] object-cover object-center"
                    src={item.img}
                    alt=""
                  />
                </div>
              </div>
            </a>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Projets;
