export abstract class BaseAgent {

  abstract execute(
    input: any
  ): Promise<any>;

}