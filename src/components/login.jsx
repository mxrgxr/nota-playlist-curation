export default function Login(){
    const handleLogin = () => {
        window.location.href = 'http://localhost:3001/auth/spotify';
      };
    
      return (
        <div>
          <button onClick={handleLogin}>Login with Spotify</button>
        </div>
      );
};