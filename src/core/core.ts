class Core {
  execute(id: string, name: string): string {
    console.log('core system got execute on', id, name);
    return 'accepted ' + id;
  }
}

export const core = new Core();