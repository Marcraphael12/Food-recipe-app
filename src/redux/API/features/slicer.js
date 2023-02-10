const initialState = {
  food: [],
};
const foodSlice = (state = initialState, action) => {
  switch (action.type) {
    case 'loadCategories':
      return {
        ...state,
        food: action.payload,
      };
    case 'joinCategory':
    {
      const food = state;
      const { payload } = action;
      const newFood = food.food.map((category) => {
        if (category.category_id === payload) {
          return { ...category, joined: true };
        }
        return category;
      });
      return { food: [...newFood] };
    }
    default: return {
      ...state,
    };
  }
};

export default foodSlice;
