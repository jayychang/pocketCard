// @flow

type StateType = {
  +name: string,
  +value: number,
  +color: string,
};

const DEFAULT: StateType[] = [
  {
    name: 'barcode1',
    value: 12131313131,
    color: '#FF9AA2',
  },
  {
    name: 'barcode2',
    value: 12131313131,
    color: '#FFB7B2',
  },
  {
    name: 'barcode3',
    value: 12131313131,
    color: '#FFDAC1',
  },
  {
    name: 'barcode1',
    value: 12131313131,
    color: '#E2F0CB',
  },
  {
    name: 'barcode2',
    value: 12131313131,
    color: '#B5EAD7',
  },
  {
    name: 'barcode3',
    value: 12131313131,
    color: '#C7CEEA',
  },
]



export default (state = DEFAULT, action): StateType[] => {
  return state
}
