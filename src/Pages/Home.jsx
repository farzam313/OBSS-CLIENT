import React from "react";
import "./home.css";
import axios from "axios";

const user = async () => {
  await axios
    .get("http://localhost:5000/users")
    .then(console.log("no of users:", user));

  console.log("no of users:", user);
};
const nextPage = () => {
  window.location.href = "/Register";
};
const nextBook = () => {
  window.location.href = "/book";
};

function Home() {
  return (
    <div className="parent_div">
      <div className="tblContainer">
        <h2>User lists</h2>
        <table className="tbl">
          <thead>
            <th>first_name</th>
            <th>Last_name</th>
            <th>Phone_no</th>
            <th>Email</th>
            <th>country</th>
            <th> occupation</th>
            <th>User_Type</th>
            <th>Uploaded books</th>
            <th>joining Date</th>
          </thead>
          <tr>
            <td>Ali</td>
            <td>Farzam</td>
            <td>7219632523</td>
            <td>ali@gmail.com</td>
            <td>Afghanistan</td>
            <td>Student</td>
            <td>user_type</td>
            <td>Uploaded book</td>
            <td>2021-02-10</td>
          </tr>
          <tr>
            <td>Ali jan</td>
            <td>sami</td>
            <td>7219632523</td>
            <td>alisami@gmail.com</td>
            <td>Algeria</td>
            <td>Student</td>
            <td>user</td>
            <td>2</td>
            <td>2021-07-10</td>
          </tr>
          <tr>
            <td>akhsay</td>
            <td>sharma</td>
            <td>7219632523</td>
            <td>akshay@gmail.com</td>
            <td>india</td>
            <td>Student</td>
            <td>user_type</td>
            <td>1</td>
            <td>2021-02-10</td>
          </tr>
          <tr>
            <td>Ali</td>
            <td>Farzam</td>
            <td>7219632523</td>
            <td>ali@gmail.com</td>
            <td>Afghanistan</td>
            <td>Student</td>
            <td>user_type</td>
            <td>0</td>
            <td>2023-11-05</td>
          </tr>
          <tr>
            <td>njai</td>
            <td>sam</td>
            <td>7219632523</td>
            <td>ali@gmail.com</td>
            <td>Afghanistan</td>
            <td>Student</td>
            <td>user</td>
            <td>2</td>
            <td>2021-02-10</td>
          </tr>
          <tr>
            <td>sadiq</td>
            <td>nabavi</td>
            <td>7219632523</td>
            <td>sadiq@gmail.com</td>
            <td>Afghanistan</td>
            <td>Student</td>
            <td>user</td>
            <td>0</td>
            <td>2021-02-10</td>
          </tr>
          <tr>
            <td>Ali</td>
            <td>Farzam</td>
            <td>7219632523</td>
            <td>ali@gmail.com</td>
            <td>Afghanistan</td>
            <td>Student</td>
            <td>user</td>
            <td>1</td>
            <td>2021-02-10</td>
          </tr>
        </table>
        <button className="user_dtl_btn" onClick={user}>
          User details
        </button>

        <button className="go_to_register" onClick={nextPage}>
          Add user
        </button>

        <button className="user_dtl_btn" onClick={user}>
          Remove user
        </button>
      </div>
      <div className="tblContainer">
        <div className="tblContainer">
          <h2>User lists</h2>
          <table className="tbl">
            <thead>
              <th>book_name</th>
              <th>author</th>
              <th>publish_date</th>
              <th>ISBN</th>
              <th>Edition</th>
              <th> language</th>
              <th>page_Count</th>
              <th>Genre</th>
              <th>category</th>
            </thead>
            <tr>
              <td>shahname</td>
              <td>ferdausi</td>
              <td>1208-12/05</td>
              <td>560-415-00.58</td>
              <td>2nd</td>
              <td> persian</td>
              <td>514</td>
              <td>Literatur</td>
              <td>book</td>
            </tr>
            <tr>
              <td>shahname</td>
              <td>ferdausi</td>
              <td>1208-12/05</td>
              <td>560-415-00.58</td>
              <td>2nd</td>
              <td> persian</td>
              <td>514</td>
              <td>Literatur</td>
              <td>book</td>
            </tr>
            <tr>
              <td>shahname</td>
              <td>ferdausi</td>
              <td>1208-12/05</td>
              <td>560-415-00.58</td>
              <td>2nd</td>
              <td> persian</td>
              <td>514</td>
              <td>Literatur</td>
              <td>book</td>
            </tr>
            <tr>
              <td>shahname</td>
              <td>ferdausi</td>
              <td>1208-12/05</td>
              <td>560-415-00.58</td>
              <td>2nd</td>
              <td> persian</td>
              <td>514</td>
              <td>Literatur</td>
              <td>book</td>
            </tr>
            <tr>
              <td>shahname</td>
              <td>ferdausi</td>
              <td>1208-12/05</td>
              <td>560-415-00.58</td>
              <td>2nd</td>
              <td> persian</td>
              <td>514</td>
              <td>Literatur</td>
              <td>book</td>
            </tr>
            <tr>
              <td>shahname</td>
              <td>ferdausi</td>
              <td>1208-12/05</td>
              <td>560-415-00.58</td>
              <td>2nd</td>
              <td> persian</td>
              <td>514</td>
              <td>Literatur</td>
              <td>book</td>
            </tr>
            <tr>
              <td>shahname</td>
              <td>ferdausi</td>
              <td>1208-12/05</td>
              <td>560-415-00.58</td>
              <td>2nd</td>
              <td> persian</td>
              <td>514</td>
              <td>Literatur</td>
              <td>book</td>
            </tr>
          </table>
          <button className="user_dtl_btn" onClick={user}>
            Refresh
          </button>

          <button className="go_to_register" onClick={nextBook}>
            Add book
          </button>

          <button className="user_dtl_btn" onClick={user}>
            Delete book
          </button>
        </div>
      </div>
    </div>
  );
}
export default Home;
