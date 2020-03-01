class HoneycombCalculator {

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
        const d1 = 0.86602540378 * 2 * this.edgeLength + this.margin;
        const xl = 0.86602540378 * d1;
        const yl = 0.5 * d1;
        let offY = 0;
        let offX = 0;
        //even row
        if (row % 2 === 0) {
            offX += col * 2 * xl;
            offY += Math.floor(row / 2) * 2 * yl;
            console.log("even");
        }
        //odd row
        else {
            offX += 2 * col * xl + xl;
            offY += Math.floor(row / 2) * 2 * yl + yl;
            console.log("odd");
        }
        console.log(`(${row}.${col}): off x=${offX} y=${offY}`)
        center.x += offX;
        center.y += offY;
        return center;
    }
}
export default HoneycombCalculator;