import {World, VectorStorage} from "mogwai-ecs/lib";

export abstract class Manager<State> {
    public stateId: number;
    public state: State;

    public name: string;

    constructor(name: string) {
        this.name = name;
        this.state = this.initialState();
    }

    abstract initialState(): State;

    register(world: World) {
        //TODO: find a way to make systems singletons
        //TODO: use SingletonStorage, DenseVectorStorage or HashMapStorage
        world.registerComponent(this.name, new VectorStorage());
        //TODO: define defautling for entity()
        this.stateId = world.entity().with(this.name, this.state).close();
    }
}