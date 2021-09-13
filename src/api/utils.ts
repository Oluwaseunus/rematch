export function catchWrapper(err: unknown) {
  if (err instanceof Error && err.message === 'jwt expired') {
    localStorage.removeItem('token');
    window.location.href =
      window.location.origin + '/auth?redirectTo=window.location.pathname';
  }
}

export function getHeaders() {
  const token = localStorage.getItem('token');
  return {
    Authorization: `Bearer ${token}`,
  };
}
