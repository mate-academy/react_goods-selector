import React from 'react';

type Props = {};
type State = {
  volume: boolean;
};

export class MediaContent extends React.Component<Props, State> {
  state = {
    volume: false,
  };

  render() {
    const { volume } = this.state;

    return (
      <>
        <video
          autoPlay
          muted={volume}
          loop
          hidden
        >
          <source src="./audio/MC.mp4" />
          <track kind="captions" />
        </video>
        <video
          className="video"
          autoPlay
          muted
          loop
        >
          <source src="./video/videoplayback.mp4" />
          <track kind="captions" />
        </video>
        <button
          type="button"
          className={`button button__volume button__volume--${volume ? 'off' : 'on'}`}
          onClick={() => {
            this.setState((state) => ({ volume: !state.volume }));
          }}
        >
          {' '}
        </button>
      </>
    );
  }
}
