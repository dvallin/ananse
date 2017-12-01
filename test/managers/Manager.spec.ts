import {Manager} from '../../src/managers/Manager';
import {World} from "mogwai-ecs/lib";

class NullManager extends Manager<void> {
    initialState(): void {
        return undefined;
    }
}

describe('Manager', () => {
    it("registers components and creates state", () => {
        const world = new World();
        const manager = new NullManager("nullManager");
        expect(manager.stateId).toBeUndefined();
        manager.register(world);
        expect(world.graph.vertexLabels.has(manager.name)).toBeTruthy();
        expect(manager.stateId).toBeDefined();
    });
});