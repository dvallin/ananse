import Option from "../src/Option";

function assertNone<T>(o: Option<T>) {
    expect(o.isNone()).toBeTruthy();
    expect(o.isJust()).toBeFalsy();
}

function assertJust<T>(o: Option<T>) {
    expect(o.isNone()).toBeFalsy();
    expect(o.isJust()).toBeTruthy();
}

describe("Option", () => {
   describe("construction", () => {
       it("constructs using empty", () => {
           assertNone(Option.none());
       });
       it("constructs using jsut", () => {
           assertNone(Option.just(undefined));
           assertNone(Option.just(null));
           assertJust(Option.just(3));
           assertJust(Option.just({}));
       });

       it("just none is just", () => {
           assertJust(Option.just(Option.none()));
       });
   });

   describe("map", () => {
       it("maps from just T to just T", () => {
           expect(Option.just(2)
               .map(s => 2*s)
               .unwrap(0)
           ).toBe(4);
       });
       it("maps from just T to just S", () => {
           expect(Option.just(2)
               .map(s => ""+s)
               .unwrap("")
           ).toBe("2");
       });
       it("maps from none to none", () => {
           assertNone(Option.none().map(s => "" + s));
           assertNone(Option.just({}).map(s => null));
       });
   });

   describe("unwrap", () => {
       expect(Option.just(2).unwrap(0)).toBe(2);
       expect(Option.none().unwrap(2)).toBe(2);
   })
});