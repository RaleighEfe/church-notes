"use client";
import Link from "next/link";
import CropText from "./CropText";
import Layout from "./Layout";
import { ImBooks } from "react-icons/im";
import React, { useState } from "react";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { useRef } from "react";
import Image from "next/image";

const Cards = ({ image, type, title, author, header }) => {
  const scroll = useRef();

  scroll.current !== null && console.log();

  const slide = (direction) => {
    if (scroll.current) {
      direction === "right" && (scroll.current.scrollLeft += 1000);
      direction === "left" && (scroll.current.scrollLeft -= 1000);
    }
  };

  const schema = [
    {
      image: "/assets/readBooks.jpg",
      type: "Audiobook",
      title: "A snitch in Time saved nine times you are",
      author: "Lorel Mines",
    },
    {
      image: "/assets/loginImage.avif",
      type: "Audiobook",
      title: "Bora Bora",
      author: "Lorel Mines",
    },
    {
      image: "/assets/registerImage.jpg",
      type: "Audiobook",
      title: "Packeages for all your friends ",
      author: "Lorel Mines",
    },
    {
      image: "/assets/readBooks.jpg",
      type: "Audiobook",
      title: "A snitch in Time saved nine times you are",
      author: "Lorel Mines",
    },
    {
      image: "/assets/loginImage.avif",
      type: "Audiobook",
      title: "Bora Bora",
      author: "Lorel Mines",
    },
    {
      image: "/assets/registerImage.jpg",
      type: "Audiobook",
      title: "Packeages for all your friends ",
      author: "Lorel Mines",
    },
    {
      image: "/assets/readBooks.jpg",
      type: "Audiobook",
      title: "A snitch in Time saved nine times you are",
      author: "Lorel Mines",
    },
    {
      image: "/assets/loginImage.avif",
      type: "Audiobook",
      title: "Bora Bora",
      author: "Lorel Mines",
    },
    {
      image: "/assets/registerImage.jpg",
      type: "Audiobook",
      title: "Packeages for all your friends ",
      author: "Lorel Mines",
    },
  ];

  return (
    <Layout>
      <div className="grid grid-cols-2">
        <h2 className="text-2xl font-semibold">{header}</h2>
        <div className="justify-self-end flex items-center gap-2">
          <BsChevronLeft
            onClick={() => slide("left")}
            className="hover:text-[#4f7942]"
          />
          <Link href="/books/" className="hover:text-[#4f7942]">
            Show All
          </Link>
          <BsChevronRight
            onClick={() => slide("right")}
            className="hover:text-[#4f7942]"
          />
        </div>
      </div>
      <hr className="text-[#48494B] my-3"></hr>
      <div
        className="flex gap-3 scroll_bar_hide overflow-x-scroll"
        ref={scroll}
      >
        {schema.map((data, i) => (
          <Link key={i} href="/books/1">
            <div className="grid grid-rows-[1fr_0.5fr_auto] w-40 border border-[#48494B] rounded-md">
              <div className="relative h-40 w-full">
                <Image src={data.image} alt={data.title} fill />
              </div>

              <div className="px-2 pt-2">
                <div className="flex text-xs gap-1">
                  <ImBooks />
                  <p className="font-light">{data.type}</p>
                </div>
                <h4 className="font-semibold text-sm">
                  <CropText text={data.title} />
                </h4>
              </div>

              <div className="self-start px-2">
                <p className="text-sm">{data.author}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  );
};

export default Cards;
