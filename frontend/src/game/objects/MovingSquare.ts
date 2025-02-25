import 'phaser';

export class MovingSquare extends Phaser.GameObjects.Rectangle {
    private speed: number = 200;

    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y, 50, 50, 0xff00bb);
        scene.add.existing(this);

        // Set up animation
        scene.tweens.add({
            targets: this,
            x: scene.cameras.main.width,
            duration: 2000,
            ease: 'Linear',
            repeat: -1
        });
    }

    setSpeed(speed: number): void {
        this.speed = speed;
    }

    getSpeed(): number {
        return this.speed;
    }
}
