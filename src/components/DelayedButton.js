import React from 'react';

class DelayedButton extends React.Component {

    delayedFunc = e => {
        e.persist()
        window.setTimeout(() => {this.props.onDelayedClick(e)}, this.props.delay)
    }

    render() {
        return (
            <button className="delayed" onClick={this.delayedFunc}>
                Delayed
            </button>
        )
    }
}

export default DelayedButton
