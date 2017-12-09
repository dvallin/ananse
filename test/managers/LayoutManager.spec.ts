import {LayoutManager} from "../../src/managers/LayoutManager"
import {Position} from "../../src/space/Position";
import {World} from "mogwai-ecs/lib";
import {Room} from "../../src/layout/Room";
import {Octagon} from "../../src/shapes/Octagon";
import {RoomNode} from "../../src/layout/RoomNode";

describe("LayoutManager", () => {
    it("has default name or specific name", () => {
        expect(new LayoutManager().name).toBe("layoutMgr");
        expect(new LayoutManager("name").name).toBe("name");
    });

    it("registers rooms into nodes", () => {
        const world = new World();
        const layout = new LayoutManager();
        const room = new Room(Position.zero(), new Octagon(4));

        layout.register(world);
        const node1 = layout.createRoot(world, room);
        const node2 = layout.createRoot(world, room);

        const node = new RoomNode(room);
        expect(layout.getRoots(world)).toEqual([{
            entity: node1,
            roomNode: node
        }, {
            entity: node2,
            roomNode: node
        }]);
        expect(LayoutManager.getNode(world, node1)).toEqual(node);
        expect(LayoutManager.getNode(world, node2)).toEqual(node);
    });
});
