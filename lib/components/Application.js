import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import classnames from 'classnames'
import * as applicationActions from '../actions/application'
import Menu from './Menu'
import Footer from './Footer'

@connect(
  ({ application }) => ({ application }),
  applicationActions
)
export default class Application extends React.Component {

  static propTypes = {
    application: PropTypes.object.isRequired,
    children: PropTypes.any,
    switchLocale: PropTypes.func.isRequired
  }

  constructor (props, context) {
    super(props, context)

    this.handleMenuClick = this.handleMenuClick.bind(this)
    this.handleLanguageSwitch = this.handleLanguageSwitch.bind(this)

    this.state = {
      isMenuActive: false
    }
  }

  handleMenuClick (evt) {
    evt.preventDefault()
    this.setState({ isMenuActive: !this.state.isMenuActive })
  }

  handleLanguageSwitch (evt) {
    this.props.switchLocale(evt.target.value)
  }

  render () {
    const { isMenuActive } = this.state
    const { application: { locale } } = this.props
    const activeClass = isMenuActive ? 'active' : ''

    return (
      <div id="layout" className={activeClass}>
        <a href="#menu" id="menuLink"
          className={classnames('menu-link', activeClass)}
          onClick={this.handleMenuClick}>
          <span></span>
        </a>

        <div>
          <select ref="langSwitcher" value={locale}
            onChange={this.handleLanguageSwitch}>
            <option value="en">EN</option>
            <option value="de">DE</option>
            <option value="it">IT</option>
          </select>
        </div>

        <Menu activeClass={activeClass} />

        <div id="main">
          {/* this will render the child routes */}
          {this.props.children}
        </div>

        <Footer />
      </div>
    )
  }
}
