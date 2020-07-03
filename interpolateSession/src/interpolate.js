const repl = (string, session, options) => {
  const reg = new RegExp(
    "(" + options.leftDelimiter + "\\w*" + options.rightDelimiter + ")"
  );
  return string.replace(reg, (match, p1) => {
    const p1Repl = p1
      .replace(options.leftDelimiter, "")
      .replace(options.rightDelimiter, "");
    return [session[p1Repl]];
  });
};

const interpolate = (value, session = {}, options = {}) => {
  let returnString = repl(value, session, options);
  while (
    returnString.indexOf(options.leftDelimiter) > -1 &&
    returnString.indexOf(options.rightDelimiter) > -1
  ) {
    returnString = repl(returnString, session, options);
  }
  return returnString;
};

module.exports = { interpolate };
