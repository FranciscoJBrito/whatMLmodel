import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Star,
  LogOut,
  History,
  CirclePlus,
  Menu,
  UserRound,
} from 'lucide-react';
import ConfirmDeleteDialogContent from '@/components/DialogContents/ConfirmDelete.dialogContent';

import { Button } from '@/components/ui/button';
import { AlertDialog, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import AnalysisActionsDropdown from '@/components/ActionButtons/AnalysisDropdown/Analysis.dropdown';
import { useGlobalContext } from '@/context/global.context';
import { useAnalyzesContext } from '@/context/analyzes.context';
import { usePathname } from 'next/navigation';

const UserDropdown: React.FC = () => {
  const pathname = usePathname();
  const { setShowAccountSettingsDialog, setSelectedAnalysisId } =
    useGlobalContext();
  const { recents, favorites } = useAnalyzesContext();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline' size='icon'>
          <Menu className='h-5 w-5' />
          <span className='sr-only'>Toggle menu</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align='end' className='min-w-36 z-[150]' loop>
        {pathname === '/analysis' && (
          <>
            <DropdownMenuItem className='font-semibold md:hidden'>
              <CirclePlus className='mr-2 h-4 w-4' />
              <span>New analysis</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator className='md:hidden' />
          </>
        )}

        {/* FAVORITES LIST */}

        <AlertDialog>
          <DropdownMenuLabel className='flex items-center font-semibold'>
            <Star className='h-4 w-4  mr-2' />
            <span>Favorites</span>
          </DropdownMenuLabel>

          <DropdownMenuGroup className='overflow-auto /*max-h-40*/ max-w-52'>
            {favorites.map((analysis) => {
              return (
                <div className='w-full flex justify-between' key={analysis.id}>
                  <DropdownMenuItem className='w-full'>
                    <span className='line-clamp-1 pr-4 w-full'>
                      {analysis.title}
                    </span>
                  </DropdownMenuItem>

                  <DropdownMenuItem
                    className='p-0 absolute right-1.5'
                    onClick={() => setSelectedAnalysisId(analysis.id || '')}
                  >
                    <AnalysisActionsDropdown isFavorite />
                  </DropdownMenuItem>
                </div>
              );
            })}
          </DropdownMenuGroup>
          <DropdownMenuSeparator />

          {/* RECENT LIST */}
          <DropdownMenuLabel className='flex items-center font-semibold'>
            <History className='h-4 w-4 mr-2' />
            <span>Recent</span>
          </DropdownMenuLabel>

          <DropdownMenuGroup className='overflow-auto /*max-h-40*/ max-w-52'>
            {recents.map((analysis) => {
              return (
                <div className='w-full flex justify-between' key={analysis.id}>
                  <DropdownMenuItem className='w-full'>
                    <span className='line-clamp-1 pr-4 w-full'>
                      {analysis.title}
                    </span>
                  </DropdownMenuItem>

                  <DropdownMenuItem
                    className='p-0 absolute right-1.5'
                    onClick={() => setSelectedAnalysisId(analysis.id || '')}
                  >
                    <AnalysisActionsDropdown />
                  </DropdownMenuItem>
                </div>
              );
            })}
          </DropdownMenuGroup>
          <ConfirmDeleteDialogContent />
        </AlertDialog>
        <DropdownMenuSeparator />

        <DropdownMenuItem
          className='font-semibold'
          onClick={() => setShowAccountSettingsDialog(true)}
        >
          <UserRound className='mr-2 h-4 w-4' />
          <span>Account settings</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />

        <AlertDialogTrigger asChild>
          <DropdownMenuItem className='font-semibold'>
            <LogOut className='mr-2 h-4 w-4' />
            <span>Log out</span>
          </DropdownMenuItem>
        </AlertDialogTrigger>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropdown;
