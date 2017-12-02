import {Manager, StatelessManager} from '../../src/managers/Manager';
import {VertexTraverser, World} from "mogwai-ecs/lib";

class StatefulManager extends Manager<number> {
    initialState(): number {
        return 42;
    }
}

describe('Manager', () => {
    it("registers components and creates state", () => {
        const world = new World();
        const manager = new StatelessManager("stateless");
        expect(manager.stateId).toBeUndefined();
        manager.register(world);
        expect(manager.stateId).toBeDefined();
        expect(world.graph.vertexLabels.has(manager.name)).toBeTruthy();
        expect(manager.state(world)).toBeUndefined();
    });

    it("registers components and creates state", () => {
        const world = new World();
        const manager = new StatefulManager("stateful");
        expect(manager.stateId).toBeUndefined();
        manager.register(world);
        expect(manager.stateId).toBeDefined();
        expect(world.graph.vertexLabels.has(manager.name)).toBeTruthy();
        expect(manager.state(world)).toBe(42);
    });
});