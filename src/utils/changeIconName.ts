function changeIconName(name: string) {
  let iconName;
  if (name === 'pendente') {
    iconName = 'exclamation'
  } else if (name === 'comprado') {
    iconName = 'check'
  } else if (name === 'aguardando') {
    iconName = 'clock-o'
  }

  return iconName;
}

export default changeIconName;
