class Tv {
  brand: string;
  size: number;
  resolution: string;
  connections: string[];
  connectedTo: string;

  constructor(brand: string, size: number, resolution: string, connections: string[]) {
    console.log(`Creating a TV ${brand}`);
    this.brand = brand;
    this.size = size;
    this.resolution = resolution;
    this.connections = connections;
  }

  turnOn(): void {
    console.log(`a TV da ${this.brand} é minha`);
  }
}

const tv1 = new Tv('Samsung', 38, '17x21', ['HDMI', 'Wifi']);

console.log(tv1.brand, tv1.size, tv1.resolution, tv1.connections);

tv1.turnOn();
