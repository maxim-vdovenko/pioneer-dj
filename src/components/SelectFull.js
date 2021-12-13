import React, { Component } from 'react';

export default class SelectFull extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      index: 0
    }
    this.ref = React.createRef()
  }

  componentDidMount = () => {
    document.addEventListener('click', this.closeSelect, false)
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.closeSelect, false)
  }

  changeSelect = index => {
    this.setState({active: false, index})
  }

  openSelect = () => {
    this.setState({active: !this.state.active}) 
  }

  closeSelect = (e) => {
    if (!this.ref.current.contains(e.target)) {
      this.setState({active: false}) 
    }
  }

  contSelect = data => {
    return (
      <>
        <div className="select-full__box">
          <img className="select-full__img" src={data.img} alt="img" />
        </div>
        <div className="select-full__box">
          <span className="select-full__name">{data.name}</span>
          <span className="select-full__price">{data.price}</span>
        </div>
      </>
    )
  }

  render() {
    const data = this.props.data
    const listSelect = data.map((item, index) => {
      const ind = this.state.index === index ? 'active' : ''
      return (
        <li className={ind} onClick={() => this.changeSelect(index)} key={index}>
          {this.contSelect(item)}
        </li>
      )}
    )

    return (
      <>
        {data.length &&
          <div className={`${this.state.active ? 'select-full active' : 'select-full'}`} ref={this.ref}>

            <div className="select-full__title" onClick={() => this.openSelect()}>
              {this.contSelect(data[this.state.index])}
            </div>

            {this.state.active &&
              <div className="select-full__list">
                <ul className="select-full__list-cont">
                  {listSelect}
                </ul>
              </div>
            }

          </div>
        }
      </>
    ) 
  }
}