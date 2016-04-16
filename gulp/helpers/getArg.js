export default function getArg(key) {
  var index = process.argv.indexOf(key);
  var next = process.argv[index + 1];
  return (index < 0) ? null : (!next || next[0] === "-") ? true : next;
};

export let production = getArg('--prod') || getArg('--production') || getArg('build') || false;
export let develope = !production;
export let debug = getArg('--debug') || develope || false;
