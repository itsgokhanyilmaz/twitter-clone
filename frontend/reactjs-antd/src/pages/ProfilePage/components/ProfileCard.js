import React from 'react';
import { Card, Icon, Avatar } from 'antd';

const { Meta } = Card;

class ProfileCard extends React.Component {

  render() {
    return <div>
          <Card
    style={{ flex: 1 }}
    actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
  >
    <Meta
    style={{ width: 1000 }}
      avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
      title="Gökhan YILMAZ"
      description="Only Lions Roar! "
    />
  </Card>
        </div>;
  }
}

export default ProfileCard;
