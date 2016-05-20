import React from 'react'
import ReactDOM from 'react-dom';
import Router, {Link} from 'react-router'
import {Grid, Row, Col, ListGroup, ListGroupItem, Well, Clearfix, Glyphicon } from 'react-bootstrap'
import {AutoAffix, Affix} from 'react-overlays'
import Waypoint from 'react-waypoint'
import {LinkContainer, IndexLinkContainer} from 'react-router-bootstrap'
import Navbar from '../Navbar/Navbar.jsx'

require('./App.scss')

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {ListGroupItem: 1}
  }

  handleSelect(selectedKey) {
  	console.log(selectedKey)
  }

  _setListGroupItem(item) {
    this.setState({
      ListGroupItem: item
    });
  }

  _scrollTo(item) {
    this.setState({
      ListGroupItem: item
    })

    console.log(this.refs.html)
  }

  componentDidMount() {

  }

  render() {
    return (
    	<div>
			  <Navbar />
        <Grid>
          <Row>
            <Col xs={12} md={3}>
              <Clearfix>
                <AutoAffix viewportOffsetTop={20}>
                  <ListGroup>
                    <ListGroupItem onClick={this._scrollTo.bind(this, 1)} active={this.state.ListGroupItem === 1 ? true:false}>命名规则</ListGroupItem>
                    <ListGroupItem onClick={this._scrollTo.bind(this, 2)} active={this.state.ListGroupItem === 2 ? true:false}>HTML</ListGroupItem>
                    <ListGroupItem onClick={this._scrollTo.bind(this, 3)} active={this.state.ListGroupItem === 3 ? true:false}>CSS</ListGroupItem>
                    <ListGroupItem onClick={this._scrollTo.bind(this, 4)} active={this.state.ListGroupItem === 4 ? true:false}>JAVASCRIPT</ListGroupItem>
                  </ListGroup>
                </AutoAffix>
              </Clearfix>
            </Col>
            <Col xs={12} md={9}>
              <Well className="tips alert-danger">
                坚持制定好的代码规范。<br />无论团队人数多少，代码应该同出一门。
              </Well>
              <h2 name="name-rule">命名规则</h2>
              <Waypoint
                onEnter={this._setListGroupItem.bind(this, 1)}
                threshold={-0.9}
                ref='nameRule'
              />
              <h3>项目命名</h3>
              <div className="content">全部采用小写方式， 以下划线分隔。<br/>例：my_project_name</div>

              <h3>目录命名</h3>
              <div className="content">参照项目命名规则；<br/>有复数结构时，要采用复数命名法。<br/>例：scripts, styles, images, data_models</div>

              <h3>JS文件命名</h3>
              <div className="content">参照项目命名规则。<br/>例：account_model.js</div>

              <h3>CSS, SCSS文件命名</h3>
              <div className="content">参照项目命名规则。<br/>例：retina_sprites.scss</div>

              <h3>HTML文件命名</h3>
              <div className="content">参照项目命名规则。<br/>例：error_report.html</div>


              <h2>HTML</h2>
              <Waypoint
                onEnter={this._setListGroupItem.bind(this, 2)}
                threshold={-0.9}
                ref='html'
              />
              <h3>语法</h3>
              <div className="content">
                <ul>
                  <li>缩进使用soft tab（4个空格）；</li>
                  <li>嵌套的节点应该缩进；</li>
                  <li>在属性上，使用双引号，不要使用单引号；</li>
                  <li>属性名全小写，用中划线做分隔符；</li>
                  <li>不要在自动闭合标签结尾处使用斜线（HTML5 规范 指出他们是可选的）；</li>
                  <li>不要忽略可选的关闭标签，例：&lt;/li&gt; 和 &lt;/body&gt;。</li>
                </ul>
              </div>
              <h3>HTML5 doctype</h3>
              <div className="content">
                <p>在页面开头使用这个简单地doctype来启用标准模式，使其在每个浏览器中尽可能一致的展现；</p>
                <pre>&lt;!DOCTYPE html&gt;</pre>
              </div>
              <h3>lang属性</h3>
              <div className="content">
                <p>根据HTML5规范：<small>应在html标签上加上lang属性。这会给语音工具和翻译工具帮助，告诉它们应当怎么去发音和翻译。</small></p>
                <a href="http://msdn.microsoft.com/en-us/library/ms533052(v=vs.85).aspx">详细语言列表</a>
              </div>
              <h3>字符编码</h3>
              <div className="content">
                <p>通过声明一个明确的字符编码，让浏览器轻松、快速的确定适合网页内容的渲染方式，通常指定为'UTF-8'。</p>
              </div>
              <h3>IE兼容模式</h3>
              <div className="content">
                <p>用 <code>&lt;meta&gt;</code> 标签可以指定页面应该用什么版本的IE来渲染；</p>
                <p>不同doctype在不同浏览器下会触发不同的渲染模式</p>
              </div>
              <h3>引入CSS, JS</h3>
              <div className="content">
                <p>根据HTML5规范, 通常在引入CSS和JS时不需要指明<code>type</code> 因为 <code>text/css</code> 和 <code>text/javascript</code> 分别是他们的默认值。</p>
              </div>

              <h2>SCSS && CSS</h2>
              <Waypoint
                onEnter={this._setListGroupItem.bind(this, 3)}
                threshold={-0.9}
                ref='scss'
              />
              <h3>语法</h3>
              <div className="content">
                <ul>
                  <li>缩进使用soft tab（4个空格）；</li>
                  <li>嵌套的节点应该缩进；</li>
                  <li>在属性上，使用双引号，不要使用单引号；</li>
                  <li>属性名全小写，用中划线做分隔符；</li>
                  <li>不要在自动闭合标签结尾处使用斜线（HTML5 规范 指出他们是可选的）；</li>
                  <li>不要忽略可选的关闭标签，例：&lt;/li&gt; 和 &lt;/body&gt;。</li>
                </ul>
              </div>
              <h3>HTML5 doctype</h3>
              <div className="content">
                <p>在页面开头使用这个简单地doctype来启用标准模式，使其在每个浏览器中尽可能一致的展现；</p>
                <pre>&lt;!DOCTYPE html&gt;</pre>
              </div>
              <h3>lang属性</h3>
              <div className="content">
                <p>根据HTML5规范：<small>应在html标签上加上lang属性。这会给语音工具和翻译工具帮助，告诉它们应当怎么去发音和翻译。</small></p>
                <a href="http://msdn.microsoft.com/en-us/library/ms533052(v=vs.85).aspx">详细语言列表</a>
              </div>
              <h3>字符编码</h3>
              <div className="content">
                <p>通过声明一个明确的字符编码，让浏览器轻松、快速的确定适合网页内容的渲染方式，通常指定为'UTF-8'。</p>
              </div>
              <h3>IE兼容模式</h3>
              <div className="content">
                <p>用 <code>&lt;meta&gt;</code> 标签可以指定页面应该用什么版本的IE来渲染；</p>
                <p>不同doctype在不同浏览器下会触发不同的渲染模式</p>
              </div>
              <h3>引入CSS, JS</h3>
              <div className="content">
                <p>根据HTML5规范, 通常在引入CSS和JS时不需要指明<code>type</code> 因为 <code>text/css</code> 和 <code>text/javascript</code> 分别是他们的默认值。</p>
              </div>
            </Col>
          </Row>
        </Grid>
		  </div>
    );
  }
}

