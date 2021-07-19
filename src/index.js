import { pascalCase } from "pascal-case";
import themessage from "./message.js";
import You from "./you.jpeg";

import './css/coffee.css';
import './css/colors.css';
import './css/main.css';

const title = document.getElementById("title");

title.innerHTML = pascalCase(themessage);

 // Add the image to our existing div.
 const myIcon = new Image();
 myIcon.src = You;

 element.appendChild(myIcon);