import * as React from 'react';
import { MosaikType } from '../models/mosaikType';

export interface IPosition {
    x: number;
    y: number;
}
export interface MosaikPathProps {
    onContextMenu(id: string): void;
    id: string;
    location: IPosition;
    edgeLength: number;
    type: MosaikType;
}
class MosaikPath extends React.Component<MosaikPathProps> {

    public constructor(props: MosaikPathProps) {
        super(props);
    }

    private onContextMenuClicked(e: React.MouseEvent<SVGPathElement, MouseEvent>): void {
        e.preventDefault();
        this.props.onContextMenu(this.props.id);

    }
    private renderRect() {
        return <path transform={`translate(${this.props.edgeLength / 2}, ${this.props.edgeLength / 2} ) `}
            d={`M-${this.props.edgeLength / 2},-${this.props.edgeLength / 2} l${this.props.edgeLength},0 0,${this.props.edgeLength} -${this.props.edgeLength},0Z`}
            fill="none" stroke="#000" strokeWidth="1" />;

    }
    renderHoneycomb() {
        const coslen = 0.86602540378 * this.props.edgeLength; //cos(30)*edgeLength;
        const sinlen = 0.5 * this.props.edgeLength; //sin(30)*edgeLength;
        const w = this.props.edgeLength / 2;
        return <path key={`k_${this.props.id}`} onContextMenu={(e) => { this.onContextMenuClicked(e) }} transform={`translate(${w + this.props.location.x} ${coslen + this.props.location.y} ) `}
            d={`M-${w},-${coslen} l${this.props.edgeLength},0 ${sinlen},${coslen} -${sinlen},${coslen} -${this.props.edgeLength},0 -${sinlen},-${coslen}Z`}
            fill="none" stroke="#000" strokeWidth="1" />;
    }
    render() {
        return this.props.type == MosaikType.QUAD ? this.renderRect() : this.renderHoneycomb();
    }
}
export default MosaikPath;