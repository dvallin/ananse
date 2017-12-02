import {World} from "mogwai-ecs/lib";
import {Manager} from "./Manager";
import rot from "rot-js";

interface State {
    pressed: Map<number, boolean>,
    modifiers: Modifiers,
    isPressed(vkCode: string): boolean
}

export interface Modifiers {
    ctrl: boolean,
    alt: boolean
}

export class InputManager extends Manager<State> {
    constructor(name: string = "inputMgr") {
        super(name);
    }

    initialState(): State {
        return {
            pressed: new Map(),
            modifiers: {
                ctrl: false,
                alt: false
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
    }

    handleModifiers(state, event: KeyboardEvent) {
        state.modifiers.alt = event.altKey;
        state.modifiers.ctrl = event.ctrlKey;
    }

    keydown(world: World, event: KeyboardEvent) {
        this.update(world, (state) => {
            this.handleModifiers(state, event);
            state.pressed.set(event.keyCode, true);
        });
    }

    keyup(world: World, event: KeyboardEvent) {
        this.update(world, (state) => {
            this.handleModifiers(state, event);
            state.pressed.set(event.keyCode, false);
        });
    }
}