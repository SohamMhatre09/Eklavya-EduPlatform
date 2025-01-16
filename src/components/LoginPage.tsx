import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from './firebase';
import { useNavigate } from 'react-router-dom';
import { GraduationCap } from 'lucide-react';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      navigate('/profile');
    } catch (error) {
      console.error('Error signing in with Google:', error);
    }
  };

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-sm max-w-md w-full space-y-8">
        <div className="flex flex-col items-center">
          <GraduationCap className="w-12 h-12 text-gray-900" />
          <h2 className="mt-4 text-2xl font-bold text-gray-900">Sign in to Eklavya</h2>
        </div>
        
        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center space-x-2 bg-white border border-gray-300 
                   rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-50 focus:outline-none 
                   focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
        >
          <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" 
               alt="Google" className="w-5 h-5" />
          <span>Continue with Google</span>
        </button>
      </div>
    </div>
  );
};
export default LoginPage;
