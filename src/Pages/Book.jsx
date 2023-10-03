import react, { useState } from "react";
import axios from "axios";
import "./Book.css";
export const Book = (props) => {
  const [formData, setFormData] = useState({
    b_name: "",
    genre: "",
    author: "",
    edition: "",
    publish_date: "",
    isbn: "",
    language: "",
    description: "",
    page_count: 0,
    material_type: 1,
    cover: null,
    bfile: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e && e.target;

    if (type === "file") {
      setFormData({
        ...formData,
        [name]: files && files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
    // const img_url = URL.createObjectURL(formData.cover);
  };
  // const img_url = URL.createObjectURL(formData.cover);

  const handleSubmit = async (e) => {
    console.log("Form Data are as following:", formData.bfile);
    e.preventDefault();

    try {
      const formDataToSend = new FormData();

      // Append the picture and file to the FormData object.
      formDataToSend.append("cover", formData.cover);
      formDataToSend.append("bfile", formData.bfile);

      // Append the other form data fields.
      for (const [key, value] of Object.entries(formData)) {
        if (key !== "cover" && key !== "bfile") {
          formDataToSend.append(key, value);
        }
      }

      // Send the FormData object to the server.
      await axios.post("http://localhost:5000/book", formDataToSend);
      console.log(formDataToSend);
      // alert("Your Book Registred successfully!");
    } catch (error) {}
  };

  return (
    <div className="book-form-container" style={{ display: "block" }}>
      <h2>
        <u>Upload A book</u>
      </h2>

      <form className="book_reg">
        <div className="book_reg1">
          <label htmlFor="bname">Name of the Book</label>
          <input
            type="text"
            placeholder="Book Name"
            name="b_name"
            id="bname"
            onChange={handleChange}
            value={formData && formData.bname}
          ></input>
          <label htmlFor="genre">Select Genre of the Book</label>

          <select
            id="genre"
            name="genre"
            required
            value={formData && formData.genre}
            onChange={handleChange}
          >
            <option value="">Select...</option>
            <option>Scientific</option>
            <option>History</option>
            <option>Philosophy</option>
            <option>Metalogy</option>
            <option>Literatures</option>
          </select>

          <label htmlFor="author">Author Name</label>
          <input
            type="text"
            placeholder="Author Name"
            name="author"
            id="author"
            onChange={handleChange}
            value={formData && formData.author}
            required
          />
          <label htmlFor="edition">Edition</label>
          <input
            type="text"
            placeholder="i.e. 4th Edition 2020"
            name="edition"
            id="edition"
            onChange={handleChange}
            value={formData && formData.edition}
            required
          />
          <label htmlFor="publish_date">Publish Date</label>
          <input
            type="date"
            placeholder="Author Name"
            name="publish_date"
            id="publish_date"
            onChange={handleChange}
            value={formData && formData.publish_date}
            required
          />
          <label htmlFor="lang">Language of the Book</label>
          <input
            type="text"
            placeholder="Ex:English,hindi..."
            name="language"
            id="lang"
            onChange={handleChange}
            value={formData && formData.language}
          />

          <label htmlFor="pages">Enter No of the Pages</label>
          <input
            type="number"
            placeholder="Ex:250"
            name="page_count"
            id="pages"
            onChange={handleChange}
            value={formData && formData.page_count}
          />

          <label htmlFor="material_type">Type of studying Material</label>
          <select
            id="material_type"
            name="material_type"
            required
            value={formData && formData.material_type}
            onChange={handleChange}
          >
            <option value="">Select...</option>
            <option>Book</option>
            <option>Essay</option>
            <option>Research paper</option>
            <option>Magazine</option>
            <option>Journal</option>
          </select>
          <label htmlFor="desc">Write Some description about your Book</label>
          <textarea
            placeholder="Description..."
            name="description"
            id="desc"
            onChange={handleChange}
            value={formData && formData.description}
          />
        </div>

        <div className="book_reg2">
          <div className="img">
            <img className="img"></img>
          </div>

          <label htmlFor="cover">Upload cover photo</label>
          <input
            className="custom-file-input"
            type="file"
            placeholder="select cover Image"
            name="cover"
            id="cover"
            required
            accept="image/*"
            onChange={handleChange}
          />
          <label htmlFor="book_file">Select the Book to Upload:</label>
          <input
            className="custom-file-input"
            type="file"
            name="bfile"
            onChange={handleChange}
            // value={formData.bfile}
            placeholder="Select the Book"
            accept="pdf/*"
            required
          />

          <button onClick={handleSubmit}>Submit</button>
        </div>
      </form>
    </div>
  );
};
