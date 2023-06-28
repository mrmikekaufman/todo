import { compareAsc, format } from "date-fns";
import doSomething from "./test.js";

format(new Date(2014, 1, 11), "yyyy-MM-dd");
//=> '2014-02-11'

const dates = [
  new Date(1995, 6, 2),
  new Date(1987, 1, 11),
  new Date(1989, 6, 10),
];
console.log(dates.sort(compareAsc));
doSomething();

const content = document.querySelector(".content");

content.classList.add("hello");
