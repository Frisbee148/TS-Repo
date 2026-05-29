function getChai(kind: string | number) {
  if (typeof kind == 'string') {
    return `making ${kind} chai ...`
  }
  return `chai order : ${kind}`
}

// the question mark makes msg optional is msg exists then ok

function serverchai(msg?: string) {
  if (msg) {
    return `Serving ${msg}`
  }
  return 'reserving default masala chai'
}

function orderChai(size: "small" | "medium" | 'large' | number) {
  if (size === "small") {
    //type comparison also on 3

  }
}

//custom types 
// the type should be capital
type ChaiOrder = {
  type: string
  sugar: number
}
function isChaiOrder(obj: any): obj is ChaiOrder{
  return (
    typeof obj === "object" && 
      obj != null && 
    typeof obj.type === "string"
  )
}

function serveOrder(item: ChaiOrder | string) {
  if (isChaiOrder(item)) {
    return `Serving ${item.type} chai with ${item.sugar} sugar`
  }
}

type masalChai = { type: "masala"; spicelevel: number };
type GingerChai = { type: "ginger"; spicelevel: number };

function brew(order: masalChai | GingerChai) {
  if ("spicelevel" in order) {
  }
}
