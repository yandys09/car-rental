"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { profile } from "@/contants/appdata";
import { Card, CardContent } from "@/components/ui/card";
import autoplay from "embla-carousel-autoplay";

const Carousels = () => {
  return (
    <div>
      <Carousel
        plugins={[
          autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent>
          {profile?.map((slide, index) => (
            <CarouselItem
              className="relative w-full h-full pt-5 bg-center bg-no-repeat bg-cover pointer-events-none"
              key={index}
              style={{ backgroundImage: `url(${slide.img})` }}
            >
              <div className="absolute top-0 bottom-0 left-0 right-0 bg-[rgba(0,0,0,0.6)] opacity-60 "></div>
              <div className="">
                <Card className="bg-transparent border-none">
                  <CardContent className="flex items-center justify-center p-6">
                    <div className="h-[40vh] md:h-[60vh] flex lg:justify-center items-center flex-col relative">
                      <h3 className="flex items-center gap-6 mb-1 text-2xl lg:mb-5 lg:text-5xl">
                        <span className="text-third-color font-bold transition-[3s]">
                          {slide.title}
                        </span>
                      </h3>
                      <p className="w-10/12 text-sm text-center text-white md:text-4xl md:w-8/12 ">
                        <i className={"fad fa-" + slide.icon}></i>
                        <span>{slide.text}</span>
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Carousels;
