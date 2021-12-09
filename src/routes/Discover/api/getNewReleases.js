import apiRequest from './apiRequest';

export default function getNewReleases() {
  return apiRequest('new-releases', 'albums');
}