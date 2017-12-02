import {InputManager} from '../../src/managers/InputManager';
import {World} from "mogwai-ecs/lib";
import rot from "rot-js";

function trigger(type: string, code: string, alt: boolean = false,
                 ctrl: boolean = false, shift: boolean = false, meta: boolean = false) {
    const e = new Event(type);
    e.key = code;    // just enter the char you want to send
    e.keyCode= rot["VK_"+code];
    e.which = e.keyCode;
    e.altKey = alt;
    e.ctrlKey = ctrl;
    e.shiftKey = shift;
    e.metaKey = meta;
    document.dispatchEvent(e);
}

describe('InputManager', () => {
    it("has default name or specific name", () => {
        expect(new InputManager().name).toBe("inputMgr");
        expect(new InputManager("name").name).toBe("name");
    });

    it("registers to custom input source", () => {
        const world = new World();
        const input = new InputManager();
        const spy = jest.spyOn(document, 'addEventListener');
        input.register(world, document);
        expect(spy).toHaveBeenCalled();
    });

    it("handles simple inputs", () => {
        const world = new World();
        const input = new InputManager();

        input.register(world);
        expect(input.state(world).isPressed("VK_SPACE")).toBeFalsy();
        trigger("keydown", "SPACE");
        expect(input.state(world).isPressed("VK_SPACE")).toBeTruthy();
        trigger("keyup", "SPACE");
        expect(input.state(world).isPressed("VK_SPACE")).toBeFalsy();
    });

    it("registers modifiers state", () => {
        const world = new World();
        const input = new InputManager();

        input.register(world);
        expect(input.state(world).modifiers).toEqual({ alt: false, ctrl: false });

        trigger("keydown", "SPACE", true, false);
        expect(input.state(world).modifiers).toEqual({ alt: true, ctrl: false });

        trigger("keydown", "SPACE", false, true);
        expect(input.state(world).modifiers).toEqual({ alt: false, ctrl: true });

        trigger("keyup", "SPACE", true, true);
        expect(input.state(world).modifiers).toEqual({ alt: true, ctrl: true });
    });
});