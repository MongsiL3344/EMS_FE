import toast from 'react-hot-toast';
import {login} from '@/api/login.service';

export async function loginHandler(
    e: React.FormEvent<HTMLFormElement>,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
) {
  e.preventDefault();
  setLoading(true);

  const formData = new FormData(e.currentTarget);
  const email = String(formData.get('email') ?? '').trim();
  const password = String(formData.get('password') ?? '');

  try {
    const data = await login({email, password});
    toast.success(`로그인 성공: ${data.user.email}`);
  } catch (err) {
    toast.error(`로그인 실패`);
  } finally {
    setLoading(false);
  }
}
