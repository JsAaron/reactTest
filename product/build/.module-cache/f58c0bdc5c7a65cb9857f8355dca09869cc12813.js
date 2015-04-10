var CheckLink = React.createClass({displayName: "CheckLink",
  render: function() {
    // 这样会把 CheckList 所有的 props 复制到 <a>
    return React.createElement("a", React.__spread({},  this.props), '√ ', this.props.children);
  }
});

React.render(
  React.createElement(CheckLink, {href: "/checked.html"}, 
    "Click here!"	
  ),
  document.body
);