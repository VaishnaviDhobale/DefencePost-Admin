import { Text, Box } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Slide } from "./Slide";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../BaseUrl";


export function HomeBox3({allReview,bestReview}) {
  // let baseUrl = "https://breakable-dirndl-yak.cyclic.cloud/";
  const maxIterations = 10;
    return (
    <>
      <Box>
        <Text
          textAlign={"left"}
          fontWeight={"bold"}
          fontSize={"30px"}
          marginBottom={"30px"}
        >
          Students <span style={{color : "#28a4de"}}>Testimonial</span>
        </Text>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={50}
          // slidesPerView={2}
          breakpoints={{
            1000: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
            // when window width is < 768px (base), show 1 slide
            0: {
              slidesPerView: 1,
              spaceBetween: 750,
            },
          }}
          scrollbar={{ draggable: true }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 9000 }} // Autoplay with a 15-second delay
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <Box>
            {bestReview.map((ele, index) => {
              if(index<maxIterations){
                return (
                  <SwiperSlide>
                    <Slide data={ele} />
                  </SwiperSlide>
                );
              }
            })}
          </Box>
        </Swiper>
      </Box>
    </>
  );
}
