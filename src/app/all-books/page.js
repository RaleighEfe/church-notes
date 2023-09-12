import Sidebar from "@/components/admin/Sidebar";
import React from "react";
import Layout from "@/components/atoms/Layout";

function AllBooks() {
  return (
    <div>
      <div className="grid grid-cols-[auto_1fr]">
        <Sidebar />
        <div className="">
          <table className="table-auto w-full p-5">
            <thead className="text-2xl font-medium">
              <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Genre</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody className="text-xl">
              <tr className="border border-b">
                <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                <td>Malcolm Lockyer</td>
                <td>1961</td>
              </tr>
              <tr>
                <td>Witchy Woman</td>
                <td>The Eagles</td>
                <td>1972</td>
              </tr>
              <tr>
                <td>Shining Star</td>
                <td>Earth, Wind, and Fire</td>
                <td>1975</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AllBooks;
