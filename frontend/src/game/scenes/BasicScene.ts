import 'phaser';
import { MovingSquare } from '../objects/MovingSquare';

export class BasicScene extends Phaser.Scene {
    private square!: MovingSquare;

    constructor() {
        super({ key: 'BasicScene' });
    }

    create() {
        // Create a moving square
        this.square = new MovingSquare(this, 0, 300);
    }

    update() {
        // Additional update logic can be added here
    }
}
