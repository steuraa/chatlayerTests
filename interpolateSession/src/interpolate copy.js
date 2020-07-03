const findSubstring = (value, left, right, begin) => {
  let start = value.indexOf(left, begin);
  let end = value.indexOf(right, begin);
  if (start === -1 || end === -1) {
    return null;
  }
  let substr = value.substring(start, end);
  console.log("toRepl:: ", substr + right);
  return { toRepl: substr + right, substr, newBegin: end };
};

const repl = (string, left, right) => {
  return string.replace(left, "").replace(right, "");
};

const interpolate = (value, session = {}, options = {}) => {
  //   let toReplace = findSubstring(
  //     value,
  //     options.leftDelimiter,
  //     options.rightDelimiter,
  //     0
  //   );
  //   let returnString = "";
  const reg = new RegExp(
    "(" +
      options.leftDelimiter +
      "\\w*" +
      options.rightDelimiter +
      ").*(" +
      options.leftDelimiter +
      "\\w*" +
      options.rightDelimiter +
      ")"
  );
  //   console.log("reg:: ", reg);
  let returnString = value.replace(reg, (match, p1, p2, offset, string) => {
    console.log("p1:: ", p1);
    const p1Repl = repl(p1, options.leftDelimiter, options.rightDelimiter);
    if (p2) {
      const p2Repl = repl(p2, options.leftDelimiter, options.rightDelimiter);
      return [session[p1Repl], session[p2Repl]].join(" ");
    }
    return [session[p1Repl]];
  });
  console.log("returnString:: ", returnString);
  //   while (toReplace.toRepl) {
  //     console.log("value:: ", value);
  //     console.log("returnString:: ", returnString);
  //     returnString = value.replace(toReplace.toRepl, session[toReplace.substr]);
  //     value = returnString;
  //     toReplace = findSubstring(
  //       value,
  //       options.leftDelimiter,
  //       options.righDelimiter
  //     );
  //   }
  return returnString;
};

module.exports = { interpolate };
