import apiRequest from './apiRequest';

export default function getFeaturedPlaylists() {
  return apiRequest('featured-playlists', 'playlists');
}
