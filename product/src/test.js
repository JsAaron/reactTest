var FancyCheckbox = React.createClass({
  render: function() {
  		
     // var { checked, ...other } = this.props;
    // var fancyClass = checked ? 'FancyChecked' : 'FancyUnchecked';
    // // `other` 包含 { onClick: console.log } 但 checked 属性除外
    return (
      <div {...this.props}  />
    );
  }
});
React.render(
  <FancyCheckbox checked={true} data-value={true} data-aaron={'chenwen'} onClick={console.log.bind(console)}>
    Hello world!
  </FancyCheckbox>,
  document.body
);