import {Manager} from "./Manager";
import {VectorStorage, VertexTraverser, World} from "mogwai-ecs/lib";
import {Room} from "../layout/Room";
import {RelationBuilder} from "mogwai-ecs/lib/World";
import {RoomNode} from "../layout/RoomNode";

export interface RoomNodeRef {
    entity: number;
    roomNode: RoomNode;
}

export interface LayoutState {}

export class LayoutManager extends Manager<LayoutState> {
    constructor(name: string = "layoutMgr") {
        super(name);
    }

    initialState(): LayoutState {
        return { };
    }

    register(world: World) {
        super.register(world);
        world.registerComponent("roomNode", new VectorStorage());
        world.registerRelation("managedBy");
    }

    createRoot(world: World, value: Room): number {
        return world.entity()
            .with("roomNode", new RoomNode(value))
            .rel((e: RelationBuilder) => e
                .to(this.stateId)
                .with("managedBy")
                .close()
            )
            .close();
    }

    getRoots(world: World): Array<RoomNodeRef> {
        return world
            .fetchOn(this.stateId, (v: VertexTraverser) => v
                .inE("managedBy")
                .in()
            )
            .withComponents("roomNode")
            .collect()
    }

    static getNode(world: World, nodeId: number): RoomNode {
        return world.fetchOn(nodeId, v => v)
            .withComponents("roomNode")
            .collect()
            [0]
            .roomNode;
    }
}