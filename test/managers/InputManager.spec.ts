import {InputManager} from '../../src/managers/InputManager';
import {World} from "mogwai-ecs/lib";
import rot from "rot-js";

function triggerKey(type: string, code: string, alt: boolean = false,
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

function triggerMouse(type: string, x: number, y: number, click_count: number, button: number, buttons: number) {
    const e = new Event(type);
    e.pageX = x;
    e.pageY = y;
    e.buttons = buttons;
    e.button = button;
    e.detail = click_count;
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
        triggerKey("keydown", "SPACE");
        expect(input.state(world).isPressed("VK_SPACE")).toBeTruthy();
        triggerKey("keyup", "SPACE");
        expect(input.state(world).isPressed("VK_SPACE")).toBeFalsy();
    });

    it("registers modifiers state", () => {
        const world = new World();
        const input = new InputManager();

        input.register(world);
        expect(input.state(world).modifiers).toEqual({ alt: false, ctrl: false });

        triggerKey("keydown", "SPACE", true, false);
        expect(input.state(world).modifiers).toEqual({ alt: true, ctrl: false });

        triggerKey("keydown", "SPACE", false, true);
        expect(input.state(world).modifiers).toEqual({ alt: false, ctrl: true });

        triggerKey("keyup", "SPACE", true, true);
        expect(input.state(world).modifiers).toEqual({ alt: true, ctrl: true });
    });

    it("registers mouse state", () => {
        const world = new World();
        const input = new InputManager();

        input.register(world);
        triggerMouse("mousemove", 23, 42, undefined, undefined, undefined);
        expect(input.state(world).mouse).toEqual({x: 23, y: 42, click_count: 0, left: false, right: false});

        triggerMouse("mousedown", 23, 42, 1, 1, 0);
        expect(input.state(world).mouse).toEqual({x: 23, y: 42, click_count: 1, left: true, right: false});

        triggerMouse("mouseup", 23, 42, 1, 2, 1);
        expect(input.state(world).mouse).toEqual({x: 23, y: 42, click_count: 1, left: false, right: true});

        triggerMouse("mousedown", 23, 42, 1, 1, 0);
        expect(input.state(world).mouse).toEqual({x: 23, y: 42, click_count: 1, left: true, right: true});

        triggerMouse("mouseup", 23, 42, 1, 0, 3);
        expect(input.state(world).mouse).toEqual({x: 23, y: 42, click_count: 1, left: false, right: false});
    });
});