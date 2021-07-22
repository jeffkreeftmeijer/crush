var crush = require("../index");
var assert = require("assert");

it("returns a version of the input file with minified internal CSS", async function () {
  await crush
    .crush("<style>\nbody {\n  color: red;\n}\n</style>\n<body></body>")
    .then((result) => {
      assert.equal(result, "<style>body{color:red}</style>\n<body></body>");
    });
});
