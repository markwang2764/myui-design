import React from 'react';

import {Breadcrumb} from 'antd';
import {WithRoute, Link} from "../../cache-router";
import './index.less';

@WithRoute
class BreadcrumbComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.renderBreadcrumb = this
      .renderBreadcrumb
      .bind(this);
  };

  renderBreadcrumb() {
    let pathName = this.props.location.pathname

    if (pathName.indexOf('?') > -1) 
      pathName = pathName.split('?')[0];
    if (!pathName) {
      return <Breadcrumb style={{
        margin: '16px 24px'
      }}>
        <Breadcrumb.Item>主页</Breadcrumb.Item>
      </Breadcrumb>
    }
    switch (pathName) {
      case '/home':
        return <Breadcrumb style={{
          margin: '16px 24px'
        }}>
          <Breadcrumb.Item>home</Breadcrumb.Item>
          <Breadcrumb.Item>home</Breadcrumb.Item>
        </Breadcrumb>
        break;
    }
  };
  render() {
    return (
      <div>
        {this.renderBreadcrumb()
}
      </div>
    );
  }
}

export default BreadcrumbComponent;
