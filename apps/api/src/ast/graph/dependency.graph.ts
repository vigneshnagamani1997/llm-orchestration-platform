export class DependencyGraph {

  private graph =
    new Map<
      string,
      string[]
    >();

  addDependency(
    file: string,
    imports: string[]
  ) {

    this.graph.set(
      file,
      imports
    );

  }

  getGraph() {

    return Object.fromEntries(
      this.graph
    );

  }

}