import {World} from "mogwai-ecs/lib";
import {Manager} from "./Manager";
import rot from "rot-js";

interface State {
    pressed: Map<number, boolean>,
    modifiers: Modifiers
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
            }
        }
    }

    register(world: World, handler: GlobalEventHandlers = document) {
        super.register(world);

        handler.addEventListener("keydown", this.keydown.bind(this));
        handler.addEventListener("keyup", this.keyup.bind(this));
    }

    isPressed(vkString: string) {
        return this.state.pressed.get(rot[vkString]);
    }

    modifiers(): Modifiers {
        return this.state.modifiers;
    }

    handleModifiers(event: KeyboardEvent) {
        this.state.modifiers.alt = event.altKey;
        this.state.modifiers.ctrl = event.ctrlKey;
    }

    keydown(event: KeyboardEvent) {
        this.state.pressed.set(event.keyCode, true);
        this.handleModifiers(event);
    }

    keyup(event: KeyboardEvent) {
        this.state.pressed.set(event.keyCode, false);
        this.handleModifiers(event);
    }
}