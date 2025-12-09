import { Card, CardTitle, CardContent, CardDescription, Toaster } from '@shared/components';
import { LoginForm } from '../components';

const SignInPage: React.FC = () => {
  return (
    <>
      <div className="relative flex items-center justify-center min-h-screen bg-gray-50">
        {/* 배경 이미지 */}
        <div className="absolute inset-0 bg-cover bg-center opacity-40" />

        {/* 어두운 오버레이 */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        <Card className="w-full max-w-xl p-4 z-10">
          {/* Header */}
          <div className="flex flex-col items-center text-center mb-2">
            <CardTitle className="mt-2">
              {/* 로고 + 타이틀 */}
              <div className="flex flex-col items-center"></div>
            </CardTitle>
          </div>

          {/* Content */}
          <CardContent className="flex flex-col gap-4 mt-6">
            <LoginForm />
          </CardContent>

          {/* Description */}
          <CardDescription className="text-center text-sm text-gray-500 mt-1 pl-6 pr-6">hello</CardDescription>
        </Card>
      </div>
      <Toaster position="top-right" />
    </>
  );
};

export default SignInPage;
