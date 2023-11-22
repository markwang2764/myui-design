import React from "react";
import AsyncComponent from "@components/AsyncComponent";
import deepCompare from "@helpers/deepCompare";
import { BrowserRouter as Router, Switch, Route, Redirect } from "../dy.router";
import Layout from "./layout";
import "./index.less";

class LoaderRoute extends React.Component {
  componentDidMount() {}

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.cache != nextProps.cache;
  }

  render() {
    return (
      <Route
        {...this.props}
        component={AsyncComponent(() => this.props.component)}
      />
    );
  }
}

import "./index.less";
import { connect } from "react-redux";
@connect(
  state => state.cacheMenu,
  {}
)
export default class Routes extends React.Component {
  state = {
    cacheList: {}
  };
  componentDidMount() {
    // this.setState({aways: true})
  }

  shouldComponentUpdate(nextProps, nextState) {
    const thisState = this.state;
    return !deepCompare(thisState.cacheList, nextState.cacheList);
  }

  // 当在navigationtabs 已经存在是 进行缓存处理
  componentWillReceiveProps(nextProps) {
    let cacheList = {};
    nextProps.navigationTabs.forEach(v => {
      cacheList[v.path[1]] = true;
    });
    this.setState({ cacheList });
  }

  render() {
    const cacheList = this.state.cacheList;

    return (
      <Router>
        <Switch>
          <Layout>
            <Switch>
              <LoaderRoute
                path="/"
                exact
                component={import(
                  /*webpackChunkName: 'button'*/
                  "./Button"
                )}
              />

              <LoaderRoute
                path="/button"
                key="/button"
                exact
                cache={cacheList["/button"] || false}
                component={import(
                  /*webpackChunkName: 'button'*/
                  "./Button"
                )}
              />
              <LoaderRoute
                path="/cascader"
                key="/cascader"
                exact
                cache={cacheList["/cascader"] || false}
                component={import(
                  /*webpackChunkName: 'cascader'*/
                  "./Cascader"
                )}
              />
              <LoaderRoute
                path="/dialog"
                key="/dialog"
                exact
                cache={cacheList["/dialog"] || false}
                component={import(
                  /*webpackChunkName: 'dialog'*/
                  "./Dialog"
                )}
              />

              <LoaderRoute
                path="/formitem"
                key="/formitem"
                exact
                cache={cacheList["/formitem"] || false}
                component={import(
                  /*webpackChunkName: 'formitem'*/
                  "./FormItem"
                )}
              />

              <LoaderRoute
                path="/icon"
                key="/icon"
                exact
                cache={cacheList["/icon"] || false}
                component={import(
                  /*webpackChunkName: 'icon'*/
                  "./Icon"
                )}
              />

              <LoaderRoute
                path="/radio"
                key="/radio"
                exact
                cache={cacheList["/radio"] || false}
                component={import(
                  /*webpackChunkName: 'radio'*/
                  "./Radio"
                )}
              />

              <LoaderRoute
                path="/menu"
                key="/menu"
                exact
                cache={cacheList["/menu"] || false}
                component={import(
                  /*webpackChunkName: 'radio'*/
                  "./Menu"
                )}
              />

              <LoaderRoute
                path="/message"
                key="/message"
                exact
                cache={cacheList["/message"] || false}
                component={import(
                  /*webpackChunkName: 'message'*/
                  "./Message"
                )}
              />

              <LoaderRoute
                path="/progress"
                key="/progress"
                exact
                cache={cacheList["/progress"] || false}
                component={import(
                  /*webpackChunkName: 'progress'*/
                  "./Progress"
                )}
              />

              <LoaderRoute
                path="/relevanceTree"
                key="/relevanceTree"
                exact
                cache={cacheList["/relevanceTree"] || false}
                component={import(
                  /*webpackChunkName: 'relevanceTree'*/
                  "./RelevanceTree"
                )}
              />

              <LoaderRoute
                path="/tree"
                key="/tree"
                exact
                cache={cacheList["/tree"] || false}
                component={import(
                  /*webpackChunkName: 'tree'*/
                  "./Tree"
                )}
              />

              <LoaderRoute
                path="/select"
                key="/select"
                exact
                cache={cacheList["/select"] || false}
                component={import(
                  /*webpackChunkName: 'select'*/
                  "./Select"
                )}
              />
            </Switch>
          </Layout>
        </Switch>
      </Router>
    );
  }
}
