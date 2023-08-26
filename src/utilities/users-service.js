export function getToken() {
    const token = localStorage.getItem('token');
    if (!token) return null;
    return token;
}

export async function getUser() {
    const token = getToken();
    if (!token) return null;
  
    try {
      const response = await fetch('/api/users', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
  
      const data = await response.json();
      return data.user;
    } catch (error) {
      console.error('Error fetching user data:', error);
      return null;
    }
}