"use client";
import Sidebar from "@/components/admin/Sidebar";
import Buttons from "@/components/atoms/Buttons";
import Input from "@/components/atoms/Input";
import Layout from "@/components/atoms/Layout";
import { useState } from "react";

const AddBook = () => {
  const [bookCover, setBookCover] = useState("")
  const [bookTitle, setBookTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [bookType, setBookType] = useState("");
  const [genre, setGenre] = useState("");
  const [description, setDescription] = useState("");
  const [audio, setAudio] = useState("");
  const [ebook, setEbook] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
  };
  return (
    
    <div className="grid grid-cols-[auto_1fr]">
      <Sidebar />
      <Layout>
        <div className="grid grid-rows_[min-content] gap-6 h-fit ">
          <h3 className="mb-4 text-2xl sm:text-3xl">Add Book Details</h3>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-6 mb-8">
              <div>Book cover</div>
              <Input
                type="text"
                inputMode="text"
                placeholder="Book title"
                onChange={(event) => setBookTitle(event.target.value)}
              />
              <Input
                type="text"
                inputMode="text"
                placeholder="Author"
                onChange={(event) => setAuthor(event.target.value)}
              />
              <div className="grid grid-cols-2 gap-3">
                <select
                  onChange={(event) => setBookType(event.target.value)}
                  name="books"
                  className="block w-full appearance-none p-4 bg-white/70 border-2 focus-within:border-red-400 rounded-md"
                >
                  {/* <optgroup label="Book Type"> */}
                  <option selected disabled>
                    Book Type
                  </option>
                  <option value="audio">Audio Book</option>
                  <option value="ebook">Ebook</option>
                  {/* </optgroup> */}
                </select>
                <select
                  onChange={(event) => setGenre(event.target.value)}
                  name="books"
                  className="block w-full appearance-none p-4 bg-white/70 border-2 focus-within:border-red-400 rounded-md"
                >
                  {/* <optgroup label="Book Type"> */}
                  <option selected disabled>
                    Genre
                  </option>
                  <option value="audio">Historical fiction</option>
                  <option value="ebook">Romance</option>
                  <option value="ebook">Fan-Fiction</option>
                  <option value="ebook">Horror</option>
                  <option value="ebook">Sci-fi</option>
                  <option value="ebook">New Age</option>
                  {/* </optgroup> */}
                </select>
              </div>

              <textarea
                onChange={(event) => setDescription(event.target.value)}
                placeholder="Add description"
                rows="4"
                className="block w-full p-4 bg-white/70 border-2 focus:border-red-400 appearance-none rounded-md"
              ></textarea>
            </div>
            <div className="grid grid-rows-[min-content] gap-6">
              <h3 className="mb-4 text-2xl sm:text-3xl">Add Content</h3>
              <div className="grid grid-cols-[auto_1fr] gap-3">
                <label className="grid justify-center content-center text-lg">
                  Upload Audio :
                </label>
                <Input
                  type="file"
                  inputMode=""
                  onChange={(event) => setAudio(event.target.value)}
                />
              </div>
              <div className="grid grid-cols-[auto_1fr] gap-3">
                <label className="grid justify-center content-center text-lg">
                  Upload eBook :
                </label>
                <Input
                  type="file"
                  inputMode=""
                  onChange={(event) => setEbook(event.target.value)}
                />
              </div>
            </div>
            <div className="mt-8 ">
              <Buttons type="filled">Save</Buttons>
            </div>
          </form>
        </div>
      </Layout>
    </div>
  );
};

export default AddBook;
