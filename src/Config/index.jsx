export const baseUrl = `${import.meta.env.REACT_APP_API_URL}/v1`;

export const appRoutes = {
  ROUTES: {
    HOME_RESTAURANTS: {
      path: 'home/restaurants',
      absolutePath: '/home/restaurants',
    },
    HOME_MENUS: {
      path: 'home/menus/:id/:name',
      absolutePath: '/home/menus/:id/:name',
    },
    RESTAURANTS: {
      path: 'restaurants',
      absolutePath: '/app/restaurants',
    },
    PRODUCTS: {
      path: 'products',
      absolutePath: '/app/products',
    },
    MENUS: {
      path: 'menus/:id/:name',
      absolutePath: '/app/menus/:id/:name',
    },
    LOGOUT: {
      path: 'logout',
      absolutePath: '/auth/logout',
    },
  },
};
