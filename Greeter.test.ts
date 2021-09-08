import { Greeter, greet } from "../src/Greeter";

describe("greeter", () => {
  test("greet function", () => {
    const value: any = greet([
      {(greeting: "Good Morning Detroit"), (name: "OnDina") },
      //   {greeting: "Good Morning VH", name: "Prince"},
    ]);
    expect(value).toBe("Good Morning Detroit OnDina");
  });
});
