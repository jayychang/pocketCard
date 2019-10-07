// @flow

type CardParams = {
  +name: string,
  +value: number,
  +colour: string,
};

const DEFAULT: CardParams[] = [
  {
    name: 'barcode1',
    value: 12131313131,
    colour: '#FF9AA2',
  },
  {
    name: 'barcode2',
    value: 12131313131,
    colour: '#FFB7B2',
  },
  {
    name: 'barcode3',
    value: 12131313131,
    colour: '#FFDAC1',
  },
  {
    name: 'barcode1',
    value: 12131313131,
    colour: '#E2F0CB',
  },
  {
    name: 'barcode2',
    value: 12131313131,
    colour: '#B5EAD7',
  },
  {
    name: 'barcode3',
    value: 12131313131,
    colour: '#C7CEEA',
  },
]



export default (state = DEFAULT, action): CardParams[] => {
  return state
}
