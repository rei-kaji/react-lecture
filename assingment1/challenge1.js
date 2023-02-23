/* Challenge 1: 

Create a navbar in JSX:
    - Use the semantic `nav` element as the parent wrapper
    - Have an h1 element with the brand name of your "website"
    - Insert an unordered list for the other nav elements
        - Inside the `ul`, have three `li`s for "Pricing",
        "About", and "Contact"
    - Don't worry about styling yet - it'll just be plain-looking HTML for now
*/

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <h1>Website</h1>
      </div>
      <div className="navbar-menu">
        <ul>
          <li>
            <a href="about">About</a>
          </li>
          <li>
            <a href="contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

/* Challenge 2: 

Starting from scratch, build and render the 
HTML for our section project.

We'll be adding styling to it later.

Hints:
* The React logo is a file in the project tree, so you can
  access it by using `src="./react-logo.png" in your image
  element
* You can also set the `width` attribute of the image element
  just like in HTML. In the slide, I have it set to 40px


    logo

    Fun facts about React

    Was first released in 2013
    Was originally created by Jordan Walke
    Has well over 100K stars on GitHub
    Is maintained by Facebook
    Powers thousands of enterprise apps, including mobile apps
*/

function Challenge2() {
  return (
    <div>
      <img src="./react-logo.png" width="40px" />

      <h4>Fun facts about React</h4>
      <p>
        Was first released in 2013
        <br />
        Was originally created by Jordan Walke
        <br />
        Has well over 100K stars on GitHub
        <br />
        Is maintained by Facebook
        <br />
        Powers thousands of enterprise apps, including mobile apps
      </p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <div>
    <Navbar />
    <Challenge2 />
  </div>
);
