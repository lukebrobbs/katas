type Direction = "N" | "S" | "E" | "W";
type RoverCommand = `${number}:${number}:${Direction}`;

export class Rover {
  gridSize: number;
  positionX: number;
  positionY: number;
  direction: Direction;
  directionMap: Map<string, Direction>;

  constructor(x: number, y: number, direction: Direction) {
    this.gridSize = 10;
    this.positionX = x;
    this.positionY = y;
    this.direction = direction;
    const dirMap = new Map<string, Direction>();
    dirMap.set("N:L", "W");
    dirMap.set("N:R", "E");
    dirMap.set("E:L", "N");
    dirMap.set("E:R", "S");
    dirMap.set("S:L", "E");
    dirMap.set("S:R", "W");
    dirMap.set("W:L", "S");
    dirMap.set("W:R", "N");
    this.directionMap = dirMap;
  }

  translateDirection(turn: "L" | "R", direction: Direction): Direction {
    return this.directionMap.get(`${direction}:${turn}`) || this.direction;
  }

  translateMovement(
    x: number,
    y: number,
    direction: Direction
  ): { x: number; y: number } {
    if (direction === "S") {
      return {
        x: this.decrementCoordinate(x),
        y,
      };
    }
    if (direction === "N") {
      return {
        x: this.incrementCoordinate(x),
        y,
      };
    }
    if (direction === "E") {
      return {
        x,
        y: this.incrementCoordinate(y),
      };
    }
    return {
      x,
      y: this.decrementCoordinate(y),
    };
  }

  translateCommand(command: string): RoverCommand {
    let newDirection = this.direction;
    let newPositionX = this.positionX;
    let newPositionY = this.positionY;
    const commands = command.split("");

    for (const comm of commands) {
      if (comm === "L" || comm === "R") {
        newDirection = this.translateDirection(comm, newDirection);
      } else {
        const { x, y } = this.translateMovement(
          newPositionX,
          newPositionY,
          newDirection
        );
        newPositionX = x;
        newPositionY = y;
      }
    }
    return `${newPositionX}:${newPositionY}:${newDirection}`;
  }

  incrementCoordinate(coord: number): number {
    return coord !== this.gridSize ? coord + 1 : 1;
  }
  decrementCoordinate(coord: number): number {
    return coord - 1 === 0 ? this.gridSize : coord - 1;
  }
}
