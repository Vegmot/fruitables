import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAIL_REQUEST,
  PRODUCT_DETAIL_SUCCESS,
  PRODUCT_DETAIL_FAIL,
  ADMIN_DELETE_PRODUCT_SUCCESS,
  ADMIN_DELETE_PRODUCT_FAIL,
  ADMIN_DELETE_PRODUCT_REQUEST,
  ADMIN_CREATE_PRODUCT_SUCCESS,
  ADMIN_CREATE_PRODUCT_FAIL,
  ADMIN_CREATE_PRODUCT_REQUEST,
  ADMIN_CREATE_PRODUCT_RESET,
  ADMIN_UPDATE_PRODUCT_REQUEST,
  ADMIN_UPDATE_PRODUCT_SUCCESS,
  ADMIN_UPDATE_PRODUCT_FAIL,
  ADMIN_UPDATE_PRODUCT_RESET,
  PRODUCT_CREATE_REVIEW_REQUEST,
  PRODUCT_CREATE_REVIEW_SUCCESS,
  PRODUCT_CREATE_REVIEW_FAIL,
  PRODUCT_CREATE_REVIEW_RESET,
  GET_TOP_PRODUCTS_REQUEST,
  GET_TOP_PRODUCTS_SUCCESS,
  GET_TOP_PRODUCTS_FAIL,
} from '../constants/productConstants';

export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] };
    case PRODUCT_LIST_SUCCESS:
      return {
        loading: false,
        products: action.payload.products,
        pages: action.payload.pages,
        page: action.payload.page,
      };
    case PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productDetailReducer = (
  state = { product: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case PRODUCT_DETAIL_REQUEST:
      return { loading: true, ...state };
    case PRODUCT_DETAIL_SUCCESS:
      return { loading: false, product: action.payload };
    case PRODUCT_DETAIL_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const adminDeleteProductReducer = (state = {}, action) => {
  switch (action.type) {
    case ADMIN_DELETE_PRODUCT_REQUEST:
      return { loading: true };
    case ADMIN_DELETE_PRODUCT_SUCCESS:
      return { loading: false, success: true };
    case ADMIN_DELETE_PRODUCT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const adminCreateProductReducer = (state = {}, action) => {
  switch (action.type) {
    case ADMIN_CREATE_PRODUCT_REQUEST:
      return { loading: true };
    case ADMIN_CREATE_PRODUCT_SUCCESS:
      return { loading: false, success: true, product: action.payload };
    case ADMIN_CREATE_PRODUCT_FAIL:
      return { loading: false, error: action.payload };
    case ADMIN_CREATE_PRODUCT_RESET:
      return {};
    default:
      return state;
  }
};

export const adminUpdateProductReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case ADMIN_UPDATE_PRODUCT_REQUEST:
      return { loading: true };
    case ADMIN_UPDATE_PRODUCT_SUCCESS:
      return { loading: false, success: true, product: action.payload };
    case ADMIN_UPDATE_PRODUCT_FAIL:
      return { loading: false, error: action.payload };
    case ADMIN_UPDATE_PRODUCT_RESET:
      return { product: {} };
    default:
      return state;
  }
};

export const createProductReviewReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_CREATE_REVIEW_REQUEST:
      return { loading: true };
    case PRODUCT_CREATE_REVIEW_SUCCESS:
      return { loading: false, success: true };
    case PRODUCT_CREATE_REVIEW_FAIL:
      return { loading: false, error: action.payload };
    case PRODUCT_CREATE_REVIEW_RESET:
      return {};
    default:
      return state;
  }
};

export const getTopProductsReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case GET_TOP_PRODUCTS_REQUEST:
      return { loading: true, products: [] };
    case GET_TOP_PRODUCTS_SUCCESS:
      return { loading: false, products: action.payload };
    case GET_TOP_PRODUCTS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
