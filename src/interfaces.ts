type ChaiOrder = {
  type: string;
  sugar: number;
  strong: boolean;
};

function makeChai(order: { type: string; sugar: number; }) {
  console.log(order);
}

function serveChai(order: { type: string; sugar: number; strong: boolean }) {
  console.log(order);
}

