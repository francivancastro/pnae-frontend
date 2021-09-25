export const cpfMask = value => {
  if(value) {
    return value
      .replace(/\D/g, '') 
      .replace(/(\d{3})(\d)/, '$1.$2') 
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1') 
  }
}

export const cnpjMask = value => {
  if(value) {
    return value
    .replace(/(\D)/g, '')
    .replace(/(\d{2})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1/$2')
    .replace(/(\d{4})(\d)/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1')
  }
  }

export const cepMask = value => {
  if(value) {
    return value
      .replace(/\D/g, '') 
      .replace(/(\d{2})(\d)/, '$1.$2') 
      .replace(/(\d{3})(\d)/, '$1-$2')
      .replace(/(-\d{3})\d+?$/, '$1') 
  }
}

export const telefoneMask = value => {
  if(value) {
    return value
    .replace(/\D/g, '') 
    .replace(/(\d{2})(\d)/, '($1)$2')
    .replace(/(\d{4})(\d)/, '$1-$2')
    .replace(/(-\d{4})\d+?$/, '$1')
  }
}

export const celularMask = value => {
  if(value) {
    return value
    .replace(/\D/g, '') 
    .replace(/(\d{2})(\d)/, '($1)$2')
    .replace(/(\d{5})(\d)/, '$1-$2')
    .replace(/(-\d{4})\d+?$/, '$1')
  }
}

export const dataMask = value => {
  if(value) {
    return value
    .replace(/\D/g, '') 
    .replace(/(\d{2})(\d)/, '$1/$2')
    .replace(/(\d{2})(\d)/, '$1/$2')
    .replace(/(\d{4})\d+?$/, '$1')
  }
}

export const removeMask = value => {
  if(value) {
    return value
    .replace(/\D/g,'')
  }
}