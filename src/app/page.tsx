'use client';

import { getProduct } from '@/lib/actions';
import { useMutation, useQuery } from '@tanstack/react-query';

export default function Home() {
  const { data: mutationData, mutate } = useMutation({ mutationFn: getProduct });
  const { data: queryData } = useQuery({ queryKey: ['products'], queryFn: () => getProduct() });

  return (
    <main className='flex flex-col max-w-5xl mx-auto my-12'>
      <button onClick={() => mutate()} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
        Get products
      </button>
      <div className='overflow-auto'>
        <pre className='pt-12'>{JSON.stringify(queryData, null, 2)}</pre>
        <pre className='pt-12'>{JSON.stringify(mutationData, null, 2)}</pre>
      </div>
    </main>
  );
}
