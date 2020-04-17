import { Compile } from "..";

console.log(
  Compile(
    [1, 2, 3, 4],
    [
      {
        fun: "lodash",
        arg: { fun: "sample" }
      }
    ]
  )
);
