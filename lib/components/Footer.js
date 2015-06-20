import React from 'react'

export default class Footer extends React.Component {

  render () {
    return (
      <div className="footer">
        <div className="pure-g">
          <div className="pure-u-1 u-sm-1-2">
            This site is built with {'<3'} using
            {' '}
            <a href="http://purecss.io/" target="_blank">PureCSS</a>
          </div>
          <div className="pure-u-1 u-sm-1-2">
            &copy; 2015
          </div>
        </div>
      </div>
    )
  }
}
