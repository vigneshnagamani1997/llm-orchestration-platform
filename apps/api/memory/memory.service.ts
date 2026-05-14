export class MemoryService {

  private static memory =
    new Map<string, any>();

  static set(
    key: string,
    value: any
  ) {

    this.memory.set(
      key,
      value
    );

  }

  static get(
    key: string
  ) {

    return this.memory.get(key);

  }

}