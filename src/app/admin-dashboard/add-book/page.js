"use client";
import Sidebar from "@/components/adminSidebar/Sidebar";
import Buttons from "@/components/atoms/Buttons";
import Input from "@/components/atoms/Input";
import Layout from "@/components/atoms/Layout";
import { useState } from "react";
import { MyContext } from "@/MyContext";
// import books from "../../database/services/books";

const AddBook = () => {
  const [text, setText] = useState("");
  const [formData, setFormData] = useState({
    bookCover: "",
    date: "",
    bookTitle: "",
    author: "",
    bookType: "",
    genre: "",
    description: "",
    audio: "",
    ebook: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <MyContext.Provider value={{ text, setText }}>
        <div className="grid grid-cols-[auto_1fr]">
          <Sidebar />
          <Layout>
            <div className="grid grid-rows_[min-content] gap-6 h-fit ">
              <h3 className="mb-4 text-2xl sm:text-3xl">Add Book Details</h3>
              <form onSubmit={handleSubmit}>
                <div className="grid gap-6 mb-8">
                  <div className="grid grid-cols-[auto_1fr] gap-3">
                    <Input
                      type="date"
                      onChange={(event) =>
                        setFormData({
                          ...formData,
                          bookCover: event.target.value,
                        })
                      }
                    />
                    <Input
                      type="file"
                      accept="image/*"
                      placeholder="Upload book cover"
                      onChange={(event) =>
                        setFormData({ ...formData, date: event.target.value })
                      }
                    />
                  </div>
                  <Input
                    type="text"
                    inputMode="text"
                    placeholder="Book title"
                    onChange={(event) =>
                      setFormData({
                        ...formData,
                        bookCover: event.target.value,
                      })
                    }
                  />
                  <Input
                    type="text"
                    inputMode="text"
                    placeholder="Author"
                    onChange={(event) =>
                      setFormData({ ...formData, author: event.target.value })
                    }
                  />
                  <div className="grid grid-cols-2 gap-3">
                    <select
                      onChange={(event) =>
                        setFormData({
                          ...formData,
                          bookType: event.target.value,
                        })
                      }
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
                      onChange={(event) =>
                        setFormData({ ...formData, genre: event.target.value })
                      }
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
                    onChange={(event) =>
                      setFormData({
                        ...formData,
                        description: event.target.value,
                      })
                    }
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
                      accept="audio/*"
                      onChange={(event) =>
                        setFormData({ ...formData, audio: event.target.value })
                      }
                    />
                  </div>
                  <div className="grid grid-cols-[auto_1fr] gap-3">
                    <label className="grid justify-center content-center text-lg">
                      Upload eBook :
                    </label>
                    <Input
                      type="file"
                      inputMode=""
                      onChange={(event) =>
                        setFormData({ ...formData, ebook: event.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="my-10 grid justify-end">
                  <Buttons type="filled">SAVE DETAILS</Buttons>
                </div>
              </form>
            </div>
          </Layout>
        </div>
      </MyContext.Provider>
    </div>
  );
};

export default AddBook;
