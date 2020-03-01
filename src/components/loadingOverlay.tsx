import * as React from 'react';

export interface LoadingState {
    isLoading: boolean;
    progress: number;  /* 0...100 */
}
class LoadingOverlay extends React.Component<any, LoadingState>{

    public constructor(props: any) {
        super(props);
        this.state = { isLoading: false, progress: 0 }
        this.onChangeListener = this.onChangeListener.bind(this);
    }

    private onChangeListener() {
        this.setState({ isLoading: false })
    }
    //https://codepen.io/john-donohoe/pen/EayjWg
    render() {
        return <div id="loading-screen" className={this.state.isLoading ? " on" : ""}>
            <div style={{ margin: '20% 40%', width: '200px', height: '200px', background: 'none' }}>
                <span style={{ display: 'block', margin: '100px auto', width: '200px', position: 'absolute', textAlign: 'center', fontSize: '1.5rem' }}>Loading</span>
                <div className="flash loading">

                </div>
            </div>

        </div>
    }
}
export default LoadingOverlay;
