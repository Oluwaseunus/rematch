export function catchWrapper(err: Error) {
  if (err.message === 'jwt expired') {
    localStorage.removeItem('token');
    window.location.href = window.location.origin + '/auth';
  }
}
