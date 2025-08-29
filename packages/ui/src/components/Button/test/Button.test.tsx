// import { Button } from '../Button';
// import { render, screen } from '@testing-library/react';
// import { userEvent } from '@storybook/test';

// describe('Button', () => {
//   test('render button component with children', () => {
//     render(<Button size={'medium'}>Click</Button>);
//     const buttonElement = screen.getByText(/Click/i);
//     expect(buttonElement).toBeInTheDocument();
//   });

//   test('button correct classes based on props', () => {
//     const { container } = render(
//       <Button primary size={'large'}>
//         Click
//       </Button>
//     );
//     const buttonElement = container.firstChild;
//     expect(buttonElement).toHaveClass('button--primary'); // mode check
//     expect(buttonElement).toHaveClass('button--large'); // size check
//   });

//   test('handle onClick event', async () => {
//     const handleClick = jest.fn(); // jest function mocking
//     render(
//       <Button size={'large'} onClick={() => handleClick()}>
//         Click
//       </Button>
//     );
//     const buttonElement = screen.getByText(/Click/i);
//     await userEvent.click(buttonElement);
//     expect(handleClick).toHaveBeenCalledTimes(1);
//   });

//   test('snapshot', () => {
//     const { asFragment } = render(
//       <Button primary size={'small'}>
//         Click
//       </Button>
//     );
//     expect(asFragment()).toMatchSnapshot();
//   });
// });
