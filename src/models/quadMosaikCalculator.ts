class QuadMosiakCalculator {

    private readonly edgeLength: number;
    private readonly margin: number;
    private readonly offset: { x: number, y: number };
    public constructor(edgeLength: number, margin: number, x: number = 0, y: number = 0) {
        this.edgeLength = edgeLength;
        this.margin = margin;
        this.offset = { x: x, y: y };
    }
    /**
     * calculate center position for honeycomb
     * @param row start with 0
     * @param col start with 0 
     */
    public getCenter(col: number, row: number): { x: number, y: number } {
        const center = { x: this.offset.x, y: this.offset.y };
        let offY = 0;
        let offX = 0;
        offX += (col + 0.5) * this.edgeLength + (col * this.margin);
        offY += (row + 0.5) * this.edgeLength + (row * this.margin);
        center.x += offX;
        center.y += offY;
        console.log(`${col} ${row} ${center}`)
        return center;
    }

    public calcPath(): string {
        return `M-${this.edgeLength / 2},-${this.edgeLength / 2} l${this.edgeLength},0 0,${this.edgeLength} -${this.edgeLength},0Z`;
    }
}
export default QuadMosiakCalculator;