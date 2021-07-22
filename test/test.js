var crush = require("../index");
var assert = require("assert");

it("returns a version of the input file with minified internal CSS", async function () {
  await crush
    .crush("<style>\nbody {\n  color: red;\n}\n</style>\n<body></body>")
    .then((result) => {
      assert.equal(result, "<style>body{color:red}</style>\n<body></body>");
    });
});

it("returns a version of the input with purged internal CSS, based on the passed file", async function () {
  await crush
    .crush(
      "<style>body{color: blue}div{color: green}</style>\n<body>\n  <h1>Hello, world!</h1>\n</body>"
    )
    .then((result) => {
      assert.equal(
        result,
        "<style>body{color:blue}</style>\n<body>\n  <h1>Hello, world!</h1>\n</body>"
      );
    });
});
