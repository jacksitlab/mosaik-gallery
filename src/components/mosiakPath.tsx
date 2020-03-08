import * as React from 'react';
import { MosaikType } from '../models/mosaikType';

export interface IPosition {
    x: number;
    y: number;
}
export interface MosaikPathProps {
    onContextMenu(id: string, pos: IPosition): void;
    id: string;
    location: IPosition;
    edgeLength: number;
    type: MosaikType;
    svgPath: string;
}
class MosaikPath extends React.Component<MosaikPathProps> {

    public constructor(props: MosaikPathProps) {
        super(props);
    }

    private onContextMenuClicked(e: React.MouseEvent<SVGPathElement, MouseEvent>): void {
        e.preventDefault();
        e.stopPropagation();
        this.props.onContextMenu(this.props.id, { x: e.pageX, y: e.pageY });

    }
    render() {
        return <path key={`k_${this.props.id}`} className={`mosaik ${this.props.type.toString()}`} onContextMenu={(e) => { this.onContextMenuClicked(e) }} transform={`translate(${this.props.location.x} ${this.props.location.y} ) `}
            d={this.props.svgPath}
            fill="#FFF" stroke="#000" />
    }
}
export default MosaikPath;