"use client";
import Link from "next/link";
import CropText from "./CropText";
import Layout from "./Layout";
import { ImBooks } from "react-icons/im";
import React, { useState } from "react";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { useRef } from "react";
import { useRouter } from "next/router";

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
      image: "/assets/cat.JPG",
      type: "Audiobook",
      title: "A snitch in Time saved nine times you are",
      author: "Lorel Mines",
    },
    {
      image: "/assets/cat.jpg",
      type: "Audiobook",
      title: "Bora Bora",
      author: "Lorel Mines",
    },
    {
      image: "/assets/cat.jpg",
      type: "Audiobook",
      title: "Packeages for all your friends ",
      author: "Lorel Mines",
    },
    {
      image: "/assets/cat.jpg",
      type: "Audiobook",
      title: "A snitch in Time",
      author: "Lorel Mines",
    },
    {
      image: "/assets/cat.jpg",
      type: "Audiobook",
      title: "A snitch in Time",
      author: "Lorel Mines",
    },
    {
      image: "/assets/cat.jpg",
      type: "Audiobook",
      title: "Best mate times",
      author: "Lorel Mines",
    },
    {
      image: "/assets/cat.jpg",
      type: "Audiobook",
      title: "Andrea",
      author: "Lorel Mines",
    },
    {
      image: "/assets/cat.jpg",
      type: "Audiobook",
      title: "Dr smith house of curious things",
      author: "Lorel Mines",
    },
    {
      image: "/assets/cat.jpg",
      type: "Audiobook",
      title: "A mage's author",
      author: "Lorel Mines",
    },
    {
      image: "/assets/cat.jpg",
      type: "Audiobook",
      title: "Six of crows",
      author: "Lorel Mines",
    },
    {
      image: "/assets/cat.jpg",
      type: "Audiobook",
      title: "All your perfect",
      author: "Lorel Mines",
    },
    {
      image: "/assets/cat.jpg",
      type: "Audiobook",
      title: "The half of it",
      author: "Lorel Mines",
    },
    {
      image: "/assets/cat.jpg",
      type: "Audiobook",
      title: "Clockwork princess",
      author: "Lorel Mines",
    },
    {
      image: "/assets/cat.jpg",
      type: "Audiobook",
      title: "Percy jackson and the abominable four",
      author: "Lorel Mines",
    },
    {
      image: "/assets/cat.jpg",
      type: "Audiobook",
      title: "The invincible life oof addie larue",
      author: "Lorel Mines",
    },
    {
      image: "/assets/cat.jpg",
      type: "Audiobook",
      title: "Chasing Red",
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
      <div className="flex gap-3 overflow-hidden" ref={scroll}>
        {schema.map((data, i) => (
          <Link
            key={i}
            href="/books/1"
            className="flex flex-col border border-[#48494B] rounded-md h-48 w-32 md:h-56 md:w-48"
          >
            <div className="h-full">{data.image}</div>
            <div className="grid content-end p-2">
              <div className="flex text-xs gap-1">
                <ImBooks />
                <p className="font-light">{data.type}</p>
              </div>
              <h4 className="font-semibold text-sm">
                <CropText text={data.title} />
              </h4>
              <p className="text-xs">{data.author}</p>
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  );
};

export default Cards;
