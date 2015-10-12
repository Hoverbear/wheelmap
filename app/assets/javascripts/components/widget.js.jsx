module.exports = React.createClass({
  // propTypes: {
  //   defaultWidth: React.PropTypes.integer,
  //   defaultHeight: React.PropTypes.integer
  // },

  getInitialState: function() {
    return {
      width:  this.props.defaultWidth,
      height: this.props.defaultHeight,
      src:    this.props.defaultSrc
    };
  },

  onWidthChange: function(value) {
    this.setState({width: value});
  },

  onHeightChange: function(value) {
    this.setState({height: value})
  },

  render: function () {
    return (
      <div>
        <WidgetForm
          width={this.state.width}
          height={this.state.height}
          onWidthChange={this.onWidthChange}
          onHeightChange={this.onHeightChange}
          />
        <WidgetPreview
          width={this.state.width}
          height={this.state.height}
          src={this.state.src}
          />
        <WidgetEmbed
          width={this.state.width}
          height={this.state.height}
          src={this.state.src}
        />
      </div>
    );
  }
});