import firebaseConfig from "../firebase-config";
import { getDatabase, ref, set, onValue, push } from "firebase/database";

const db = getDatabase();

//send books
const sendBook = () => {
    
}
function writeBookData(
  bookId,
  bookCover,
  date,
  title,
  author,
  bookType,
  genre,
  description,
  audio,
  ebook
) {
  set(ref(db, "books/" + bookId), {
    book_cover: bookCover,
    date: date,
    book_title: title,
    author: author,
    book_type: bookType,
    genre: genre,
    description: description,
    audio: audio,
    ebook: ebook,
  });
}



//read books
const starCountRef = ref(db, "books/" + bookId + "/starCount");
onValue(starCountRef, (snapshot) => {
  const data = snapshot.val();
  updateStarCount(postElement, data);
});


const bookExports = {
writeBookData
};

export default bookExports;