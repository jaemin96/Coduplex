import { useNavigate } from 'react-router-dom';
import { authService } from '@api/services/authService';
import { toast } from 'sonner';

interface LoginParam {
  userId: string;
  password: string;
}

export const useAuth = () => {
  // const setAuthInfo = useSetRecoilState(authState);
  // const resetAuth = useResetRecoilState(authState);
  const navigate = useNavigate();
  // const [loading, setLoading] = useState(false);

  /**
   * 로그인 함수
   */
  const signin = async ({ userId, password }: LoginParam) => {
    try {
      const payload = { idValue: userId, pwValue: password };
      const data = await authService.login(payload);

      if (data && data?.result) {
        // setAuthInfo((prev: AuthState) => ({ ...prev, isLoggedIn: true, user: { userId: 'guest' } }));
        navigate('/');
        return data;
      } else {
        const message = data?.strAlert;
        toast.error(message);

        return;
      }
    } catch (error) {
      console.error(error);
    }
  };

  /**
   * 로그아웃 함수
   */
  const signout = async () => {
    try {
      await authService.logout();
      // 유저 정보 삭제
      // resetAuth();
      navigate('/login');
    } catch (err) {
      console.error({ err });
    }
  };

  return {
    signin,
    signout,
  };
};
