import React, {Component} from "react";
import Editor from "nib-core";

const defaultValue = {
  type: "doc",
  content: [
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          marks: [
            {
              type: "em"
            }
          ],
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
      ]
    }
  ]
};

/**
 * @visibleName 5. Inline toolbar
 */
class InlineToolbar extends Component {
  state = {
    content: defaultValue
  };

  onChange = content => {
    this.setState({content});
  };

  render() {
    const {content} = this.state;
    return (
      <div spellCheck={false}>
        <Editor
          config={{
            plugins: {options: "block inline link"},
            toolbar: {
              options: "inline",
              inline: {
                options: "block inline link",
                block: {options: "p h1 h2", grouped: false}
              }
            }
          }}
          defaultValue={defaultValue}
          onChange={this.onChange}
          theme={{
            wrapper: {
              borderTop: "none",
              borderBottom: "none",
              borderLeft: "none",
              borderRight: "none"
            }
          }}
        />
        <pre style={{whiteSpace: "pre-wrap"}}>
          {JSON.stringify(content, null, 4)}
        </pre>
      </div>
    );
  }
}

export default InlineToolbar;
