import {World, VectorStorage} from "mogwai-ecs/lib";

export abstract class Manager<State> {
    public stateId: number;
    public name: string;

    constructor(name: string) {
        this.name = name;
    }

    abstract initialState(): State;

    register(world: World) {
        //TODO(Mogwai): find a way to make systems singletons
        //TODO(Mogwai): use SingletonStorage, DenseVectorStorage or HashMapStorage
        world.registerComponent(this.name, new VectorStorage());
        //TODO(Mogwai): define defaulting for entity()
        this.stateId = world.entity().with(this.name, this.initialState()).close();
    }

    state(world: World): State {
        //TODO(Mogwai): define single entity fetch (stream().any())
        //TODO(Mogwai): default fetchOn traverser to identity (or do not give a traverser at all!)
        const states = world.fetchOn(this.stateId, t => t).withComponents(this.name).collect();
        return states[0][this.name];
    }

    update(world: World, updater: (s: State) => void) {
        world.entity(this.stateId).update(this.name, updater).close();
    }
}

export class StatelessManager extends Manager<void> {
    initialState(): void {
        return undefined;
    }
}