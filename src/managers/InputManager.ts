import {World} from "mogwai-ecs";
import {Manager} from "./Manager";
import rot from "rot-js";

export interface InputState {
    pressed: Map<number, boolean>,
    modifiers: Modifiers,
    isPressed(vkCode: string): boolean,
    mouse: Mouse
}

export interface Modifiers {
    ctrl: boolean,
    alt: boolean
}

export interface Mouse {
    x: number,
    y: number,
    click_count: number,
    left: boolean,
    right: boolean
}

export class InputManager extends Manager<InputState> {
    constructor(name: string = "inputMgr") {
        super(name);
    }

    initialState(): InputState {
        return {
            pressed: new Map(),
            modifiers: {
                ctrl: false,
                alt: false
            },
            mouse: {
                x: 0,
                y: 0,
                click_count: 0,
                left: false,
                right: false
            },
            isPressed(vkCode) {
                return this.pressed.get(rot[vkCode]);
            }
        }
    }

    register(world: World, handler: GlobalEventHandlers = document) {
        super.register(world);

        handler.addEventListener("keydown", this.keydown.bind(this, world));
        handler.addEventListener("keyup", this.keyup.bind(this, world));
        handler.addEventListener("mousemove", this.mousemove.bind(this, world));
        handler.addEventListener("mousedown", this.mousedown.bind(this, world));
        handler.addEventListener("mouseup", this.mouseup.bind(this, world));
    }

    handleModifiers(modifiers: Modifiers, {altKey, ctrlKey} : KeyboardEvent | MouseEvent) {
        modifiers.alt = altKey;
        modifiers.ctrl = ctrlKey;
    }

    handleMouse(mouse: Mouse, {pageX, pageY,  button, buttons, detail}: MouseEvent) {
        mouse.x = pageX;
        mouse.y = pageY;

        if(button & 1) {
            mouse.left = true;
        }
        if(buttons & 1) {
            mouse.left = false;
        }

        if(button & 2) {
            mouse.right = true;
        }
        if(buttons & 2) {
            mouse.right = false;
        }

        mouse.click_count = detail || 0;
    }

    keydown(world: World, event: KeyboardEvent) {
        this.update(world, (state) => {
            this.handleModifiers(state.modifiers, event);
            state.pressed.set(event.keyCode, true);
        });
    }

    keyup(world: World, event: KeyboardEvent) {
        this.update(world, (state) => {
            this.handleModifiers(state.modifiers, event);
            state.pressed.set(event.keyCode, false);
        });
    }

    mousedown(world: World, event: MouseEvent) {
        this.update(world, (state) => {
            this.handleModifiers(state.modifiers, event);
            this.handleMouse(state.mouse, event);
        });
    }

    mouseup(world: World, event: MouseEvent) {
        this.update(world, (state) => {
            this.handleModifiers(state.modifiers, event);
            this.handleMouse(state.mouse, event);
        });
    }

    mousemove(world: World, event: MouseEvent) {
        this.update(world, (state) => {
            this.handleModifiers(state.modifiers, event);
            this.handleMouse(state.mouse, event);
        });
    }
}