const api = 'https://www.themealdb.com/api/json/v1/1/categories.php';

// The action creator
const loadCategories = (payload) => ({
  type: 'loadCategories',
  payload,
});

const joinCategory = (payload) => ({
  type: 'joinCategory',
  payload,
});

const fetchCategories = () => async (dispatch) => {
  const request = await fetch(api);
  const response = await request.json();

  const { categories } = response;

  const Categories = Object.keys(categories).map((id) => {
    const category = {
      category_id: categories[id].idCategory,
      category_name: categories[id].strCategory,
      category_image: categories[id].strCategoryThumb,
      description: categories[id].strCategoryDescription,
    };
    return category;
  });
  dispatch(loadCategories(Categories));
};

export { loadCategories, joinCategory };

export default fetchCategories;
