import GitHubLink from '@/components/ActionButtons/GitHubLink/GitHubLink';
import ShareButton from '@/components/ActionButtons/ShareButton/ShareButton';
import { Button } from '@/components/ui/button';
import { Github, Share2 } from 'lucide-react';
import React from 'react';

export const Footer = () => {
  return (
    <footer className='w-screen px-[5%] flex justify-center border-t backdrop-blur-md bg-background'>
      <nav className='w-full max-w-[1050px] flex items-center justify-between gap-4 py-8 flex-col sm:flex-row '>
        <p className='text-sm text-muted-foreground text-center'>
          Copyright © by{' '}
          <a
            href='https://www.facundochavez.com'
            target='_blank'
            className='underline hover:text-muted-foreground'
          >
            Facundo Chavez
          </a>{' '}
          under MIT License.
        </p>
        <div>
          <ShareButton variant='ghost' />
          <GitHubLink variant='ghost' />
        </div> 
      </nav>
    </footer>
  );
};
