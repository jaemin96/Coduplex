'use client';

import { Form, FormItem, FormControl, FormMessage, Button, Input, FormField } from '@shared/components/ui';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { useAuth } from '../hooks/useAuth';

interface LoginFormValues {
  userId: string;
  password: string;
}

const LoginForm = () => {
  const { signin } = useAuth();
  const form = useForm<LoginFormValues>({
    defaultValues: {
      userId: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<LoginFormValues> = async (values) => {
    try {
      console.log('로그인 값:', values);
      const { userId, password } = values;
      await signin({ userId, password });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Form {...form}>
      <form className="flex flex-col gap-4" onSubmit={form.handleSubmit(onSubmit)}>
        {/* 아이디 입력 */}
        <FormField
          control={form.control}
          name="userId"
          render={({ field }) => (
            <>
              <FormItem>
                <FormControl>
                  <Input type="text" placeholder="아이디" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            </>
          )}
        />

        {/* 패스워드 입력 */}
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <>
              <FormItem>
                <FormControl>
                  <Input type="password" placeholder="비밀번호" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            </>
          )}
        />
        {/* 로그인 버튼 */}
        <Button type="submit" variant="default" size="lg" className="mt-2">
          LOGIN
        </Button>
      </form>
    </Form>
  );
};

export default LoginForm;
