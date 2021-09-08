import { Greeter, greet } from "../src/Greeter";

export class JavaScriptGreeter extends Greeter {
  greet(name: any) {
    console.log(`console.log {greeting}, {name}`);
  }
}

// Jest Tests: Test with different greetings and names.
