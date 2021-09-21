interface directionLookup {
  NORTH: "SOUTH";
  SOUTH: "NORTH";
  EAST: "WEST";
  WEST: "EAST";
  [key: string]: any;
}
export function dirReduc(arr: string[]) {
  const directionLookup: directionLookup = {
    NORTH: "SOUTH",
    SOUTH: "NORTH",
    EAST: "WEST",
    WEST: "EAST",
  };

  return arr.reduce((acc: string[], curr, index) => {
    if (acc[acc.length - 1] === directionLookup[curr]) {
      acc.pop();
    } else {
      acc.push(curr);
    }
    return acc;
  }, []);
}
