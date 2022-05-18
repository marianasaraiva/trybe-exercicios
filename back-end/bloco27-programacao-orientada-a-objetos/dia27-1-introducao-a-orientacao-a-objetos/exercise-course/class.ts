class Tv {
  private _brand: string;
  private _size: number;
  private _resolution: string;
  private _connections: string[];
  private _connectedTo?: string;

  constructor(brand: string, size: number, resolution: string, connections: string[]) {
    console.log(`Creating a TV ${brand}`);
    this._brand = brand;
    this._size = size;
    this._resolution = resolution;
    this._connections = connections;
  }

  turnOn(): void {
    console.log(`a TV da ${this._brand} é minha`);
  }

  get connectedTo(): string | undefined {
    return this._connectedTo as string;
  }

  set connectedTo(value: string) {
    if (this._connections.includes(value)) {
      this._connectedTo = value;
      console.log(this._connectedTo);
    } else {
      console.log('Value not found!')
    }
  }
}

const tv1 = new Tv('Samsung', 38, '17x21', ['HDMI', 'Wifi']);

tv1.turnOn();
tv1.connectedTo = 'Teste';
console.log(tv1.connectedTo);
