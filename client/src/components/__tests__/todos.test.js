import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Todos from '../todos';

const mockStore = configureMockStore([thunk]);

describe('Todos', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      todos: [

        { _id: "6499a63cd546e8736ba9f6c9", heading: 'bj', done: false },
        { _id: "64985361510c6f6aa46d2a60", heading: 'cscascas', done: true },
      ],
      currentTab: 'ALL_TODOS',
    });
  });

  it('renders the Todos component', () => {
    render(
      <Provider store={store}>
        <Todos />
      </Provider>
    );

    const todosComponent = screen.getByTestId('todos-component');
    expect(todosComponent).toBeInTheDocument();
  });

  it('renders all todos when the current tab is set to ALL_TODOS', () => {
    render(
      <Provider store={store}>
        <Todos />
      </Provider>
    );

    const todoElements = screen.getAllByTestId('todo-test');
    expect(todoElements.length).toBe(2);
  });

  it('renders active todos when the current tab is set to ACTIVE_TODOS', () => {
    store = mockStore({
        todos: [

            { _id: "6499a63cd546e8736ba9f6c9", heading: 'bj', done: false },
            { _id: "64985361510c6f6aa46d2a60", heading: 'cscascas', done: true },
          ],
      currentTab: 'ACTIVE_TODOS',
    });

    render(
      <Provider store={store}>
        <Todos />
      </Provider>
    );

    const todoElements = screen.getAllByTestId('todo-test');
    expect(todoElements.length).toBe(1);
    expect(todoElements[0]).toHaveTextContent('bj');
  });

  it('renders done todos when the current tab is set to DONE_TODOS', () => {
    store = mockStore({
        todos: [

            { _id: "6499a63cd546e8736ba9f6c9", heading: 'bj', done: false },
            { _id: "64985361510c6f6aa46d2a60", heading: 'cscascas', done: true },
          ],
      currentTab: 'DONE_TODOS',
    });

    render(
      <Provider store={store}>
        <Todos />
      </Provider>
    );

    const todoElements = screen.getAllByTestId('todo-test');
    expect(todoElements.length).toBe(1);
    expect(todoElements[0]).toHaveTextContent('cscascas');
  });
});
