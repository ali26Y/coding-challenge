import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Movies from './movies';

jest.mock('fs');

const dummyData = [
    {
        title: 'movie1',
        description: 'example 1',
    },
    {
        title: 'movie2',
        description: 'example 2',
    }
];

describe('testingMoviesComponent', () => {
    test('Testing Content', () => {

        const renderer = new ShallowRenderer();
        renderer.render(<Movies data={dummyData} />);
        const result = renderer.getRenderOutput();

        expect(result[0].type).toBe('div');

        expect(result[0].key).toBe('movie1');

        expect(result[0].props.children[0].props.children.props.children[0].type).toBe('img');
        expect(result[0].props.children[0].props.children.props.children[1].type).toBe('p');
        expect(result[0].props.children[0].props.children.props.children[1].props.children).toBe('movie1');

        expect(renderer).toMatchSnapshot();
    });
});
