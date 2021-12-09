import apiRequest from './apiRequest';

export default function getCategories() {
  return apiRequest('categories', 'categories');
}
