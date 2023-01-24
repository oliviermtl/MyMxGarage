import { fireEvent, render } from '@testing-library/react-native/pure';
import { Text, PatternStyledText, HyperlinkText } from 'components/Text';

describe('Text', () => {
  it('renders Text Snapshot', () => {
    const tree = render(<Text />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders Text C1', () => {
    const tree = render(<Text type="C1" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders Text with color black', () => {
    const tree = render(<Text color="black" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders Text with margin Top 32', () => {
    const tree = render(<Text marginTop={32} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders Text with width null', () => {
    const tree = render(<Text width={null} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders Text with align right', () => {
    const tree = render(<Text align="right" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders Text with align default', () => {
    const tree = render(<Text align={null} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders Text with color default', () => {
    const tree = render(<Text color={null} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders Text with paddingHorizontal 16', () => {
    const tree = render(<Text paddingHorizontal={16} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders Text with paddingLeft 16', () => {
    const tree = render(<Text paddingLeft={16} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders PatternStyledText Snapshot', () => {
    const tree = render(<PatternStyledText />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders PatternStyledText onPress', () => {
    const mockFn = jest.fn();
    const { getByText } = render(<PatternStyledText text="test" onPress={mockFn} />);
    fireEvent.press(getByText('test'));
    expect(mockFn).toHaveBeenCalled();
  });

  it('renders HyperlinkText Snapshot', () => {
    const tree = render(<HyperlinkText />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders HyperlinkText onPress', () => {
    const mockFn = jest.fn();
    const { getByText } = render(<HyperlinkText text="test" onPress={mockFn} />);
    fireEvent.press(getByText('test'));
    expect(mockFn).toHaveBeenCalled();
  });
});
