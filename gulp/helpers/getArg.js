export default function getArg(key) {
  var index = process.argv.indexOf(key);
  var next = process.argv[index + 1];
  return (index < 0) ? null : (!next || next[0] === "-") ? true : next;
};

export let isProduction = getArg('--prod') || getArg('--production') || getArg('build') || false;
export let isDevelope = !isProduction;
export let isDebug = getArg('--debug') || isDevelope || false;
