import { Greeter, greet } from "../src/Greeter";

export class LoudGreeter extends Greeter {
  private greet(name: any, extra: string) {
    console.log(`console.log {greeting}, {name}`);
  }
}

export function addVolume(): void {
  // add new ! to the end of greet
  let point = "!";

  console.log(point); // override to add extra !
}
