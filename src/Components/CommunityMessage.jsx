import React from 'react';
import { CommunityMessages } from 'react-vk';

class CommunityMessage extends React.Component {
  state = {
    widget: null,
    id: null,
  };

  handleClick = () => {
    this.state.widget.destroy(this.state.id);
  };

  render() {
    return (
      <div>
        
          <CommunityMessages
            groupId={178235997}
            options={{ onCanNotWrite: reason => console.log(reason) }}
            onMount={(widget, id) => {
              this.setState({ widget, id });
            }}
          />
        
      </div>
    );
  }
}

export default CommunityMessage;
