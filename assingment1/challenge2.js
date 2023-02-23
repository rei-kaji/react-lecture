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
      <img src="./react-logo.png" />

      <h2>Fun facts about React</h2>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <div>
    <Challenge2 />
  </div>
);
