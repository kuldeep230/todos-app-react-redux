import { ADD_TODO, TOGGLE_TODO } from "./todosTypes";

const initialState = {
  allIds: [],
  byIds: {},
};

const todoReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_TODO: {
      const { id, content } = payload;
      return {
        ...state,
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: {
            content,
            completed: false,
          },
        },
      };
    }
    case TOGGLE_TODO: {
      const { id } = payload;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...state.byIds[id],
            completed: !state.byIds[id].completed,
          },
        },
      };
    }

    default:
      return state;
  }
};

export default todoReducer;
