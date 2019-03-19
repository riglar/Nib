import React, { PureComponent } from "react";
import styled from "@emotion/styled";
import { Overlay } from "nib-ui";

import { ConfigContext } from "../../common/config";
import { getKeymapInfo } from "../../common/editor-helpers";
import { helpPluginKey } from "./plugin";

class HelpOverlay extends PureComponent {
  static contextType = ConfigContext;

  hideHelpOverlay = () => {
    const { state, dispatch } = this.props.view;
    dispatch(state.tr.setMeta("HIDE_HELP_OVERLAY", true));
  };

  render() {
    const { plugins } = this.context.config;
    console.log(this.context.config);
    const keyMaps = getKeymapInfo(plugins.options);
    return (
      <Overlay
        hideOverlay={this.hideHelpOverlay}
        render={() => (
          <Wrapper onClick={this.stopPropagation}>
            Keyboard Shortcuts {JSON.stringify(keyMaps)}
          </Wrapper>
        )}
      />
    );
  }
}

const Wrapper = styled.div`
  background-color: white;
  min-height: 240px;
  min-width: 300px;
  padding: 20px;
`;

export default [
  {
    condition: state => {
      const pluginState = helpPluginKey.getState(state);
      return pluginState && pluginState.helpVisible;
    },
    component: HelpOverlay
  }
];

// todo: table cell menu to go away on editor blur.
