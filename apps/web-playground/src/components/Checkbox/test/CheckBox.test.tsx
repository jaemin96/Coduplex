// import { render, screen } from '@testing-library/react';
// import { CheckBox } from '../';

// describe('Check-box', () => {
//   test('render checkbox', () => {
//     render(<CheckBox id={'checkbox_1'} label={'체크박스'} />);
//     const checkboxElement = screen.getByText(/체크박스/i);
//     expect(checkboxElement).toBeInTheDocument();
//   });

//   // test("checkbox is checked", () => {
//   //     const handleChange = jest.fn();
//   //     render(<CheckBox id={"checkbox_1"} label={"체크박스"} checked={true} onChange={handleChange}/>)
//   //     const checkboxElement = screen.getByRole("checkbox", { name: "체크박스" })
//   //     expect(checkboxElement).not.toBeChecked();
//   // })

//   test('snapshot', () => {
//     const { asFragment } = render(<CheckBox id={'checkbox_1'} label={'체크박스'} />);
//     expect(asFragment()).toMatchSnapshot();
//   });
// });
