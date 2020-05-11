


import React from 'react';

export default class Grandson extends React.Component {
  //------------------常用
  // 如果不初始化 state 或不进行方法绑定，则不需要为 React 组件实现构造函数
  constructor(props) {
    // 不要这样做
    // this.state = { color: props.color };
  }
  componentDidMount() {
    //写接口
  }
  componentWillUnmount() {

  }
  //------------------不常用的生命周期方法
  //是否要更新数据，如果返回true才会更新数据
  shouldComponentUpdate(nextProps, nextState) {
    //返回true false
  }
  //你在父组件里面改变props传值的时候触发的函数  
  UNSAFE_componentWillReceiveProps() {
    console.log('父子组件传值，父组件里面改变了props的值触发的方法')
  }

  // 此方法适用于罕见的用例，即 state 的值在任何时候都取决于 props。例如，实现 <Transition> 组件可能很方便，该组件会比较当前组件与下一组件，以决定针对哪些组件进行转场动画。
  static getDerivedStateFromProps(props, state) {

  }

  // https://zh-hans.reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#recommendation-fully-controlled-component

  render() {
    return (
      11
    )
  }
}