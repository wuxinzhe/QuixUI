export function initProps (target) {
  if (target._options.props && target._options.props.length) {
    const { propsDefault } = target._options
    target._options.props.forEach(prop => {
      if (propsDefault.hasOwnProperty(prop)) {
        target[prop] = target[prop] || propsDefault[prop]
      }
    })
  }
}