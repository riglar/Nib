Editor with block and inline formatting options available.

```js
<BlockInline />
```

Code:

```js static
import React, { Component } from "react";
import Editor from "nib-core";

class BlockInline extends Component {
  state = {
    content: {}
  };

  onChange = content => {
    this.setState({ content });
  };

  render() {
    const { content } = this.state;
    return (
      <div>
        <Editor
          config={{
            plugins: { options: "block inline" },
            toolbar: {
              options: "top",
              top: {
                options: "block inline"
              }
            }
          }}
          onChange={this.onChange}
        />
        <pre>{JSON.stringify(content, null, 4)}</pre>
      </div>
    );
  }
}

export default BlockInline;
```
