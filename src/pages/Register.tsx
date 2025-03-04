import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../lib/firebase';
import { toast } from 'react-hot-toast';
import { UserPlus } from 'lucide-react';
import type { UserRole } from '../types';

const registerSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  role: z.enum(['student', 'faculty'] as const),
  department: z.string().optional(),
});

type RegisterFormData = z.infer<typeof registerSchema>;

export default function Register() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, formState: { errors }, watch } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      role: 'student',
    },
  });

  const selectedRole = watch('role');

  const onSubmit = async (data: RegisterFormData) => {
    setIsSubmitting(true);
    try {
      const { user } = await createUserWithEmailAndPassword(auth, data.email, data.password);
      
      await setDoc(doc(db, 'users', user.uid), {
        name: data.name,
        email: data.email,
        role: data.role,
        department: data.department || null,
        createdAt: new Date().toISOString()
      });

      toast.success('Account created successfully!');
      navigate('/dashboard');
    } catch (error: any) {
      console.error("Registration error:", error);
      toast.error(error.message || 'Failed to create account. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="bg-white dark:bg-dark-card p-8 rounded-xl shadow-md dark:shadow-primary-900/10">
        <div className="flex items-center justify-center mb-8">
          <UserPlus className="h-8 w-8 text-primary-600 dark:text-primary-400" />
          <h2 className="text-2xl font-bold ml-2 text-gray-900 dark:text-white">Create Account</h2>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              {...register('name')}
              className="mt-1 block w-full rounded-md border-gray-300 dark:border-dark-border dark:bg-dark-background dark:text-white shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:focus:border-primary-400 dark:focus:ring-primary-400"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register('email')}
              className="mt-1 block w-full rounded-md border-gray-300 dark:border-dark-border dark:bg-dark-background dark:text-white shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:focus:border-primary-400 dark:focus:ring-primary-400"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Password
            </label>
            <input
              type="password"
              id="password"
              {...register('password')}
              className="mt-1 block w-full rounded-md border-gray-300 dark:border-dark-border dark:bg-dark-background dark:text-white shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:focus:border-primary-400 dark:focus:ring-primary-400"
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.password.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="role" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Role
            </label>
            <select
              id="role"
              {...register('role')}
              className="mt-1 block w-full rounded-md border-gray-300 dark:border-dark-border dark:bg-dark-background dark:text-white shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:focus:border-primary-400 dark:focus:ring-primary-400"
            >
              <option value="student">Student</option>
              <option value="faculty">Faculty</option>
            </select>
            {errors.role && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.role.message}</p>
            )}
          </div>

          {selectedRole === 'faculty' && (
            <div>
              <label htmlFor="department" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Department
              </label>
              <input
                type="text"
                id="department"
                {...register('department')}
                className="mt-1 block w-full rounded-md border-gray-300 dark:border-dark-border dark:bg-dark-background dark:text-white shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:focus:border-primary-400 dark:focus:ring-primary-400"
              />
              {errors.department && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.department.message}</p>
              )}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 dark:bg-primary-700 dark:hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 transition-colors"
          >
            {isSubmitting ? 'Creating account...' : 'Create Account'}
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
          Already have an account?{' '}
          <Link to="/login" className="font-medium text-primary-600 dark:text-primary-400 hover:text-primary-500 dark:hover:text-primary-300">
            Sign in here
          </Link>
        </p>
      </div>
    </div>
  );
}