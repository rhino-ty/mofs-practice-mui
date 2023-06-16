'use client';
import {
  AppsRounded,
  BookOutlined,
  Code,
  HomeRounded,
  InfoOutlined,
  LockOpen,
  PaletteOutlined,
  PriorityHigh,
  SwipeVerticalOutlined,
} from '@mui/icons-material';
import Link from 'next/link';
import { useCallback, useState } from 'react';
import DarkModeToggleButton from '../../components/darkModeToggleButton';
import Drawer from './drawer';
import './sidebar.css';

export default function Sidebar() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [drawerMenuSetting, setDrawerMenuSetting] = useState('Idle');

  const handleDrawerMenuHover = useCallback(() => {
    setDrawerOpen(true);
  }, []);

  const handleDrawerMenuClose = useCallback(() => {
    setDrawerOpen(false);
  }, []);

  const handleDrawerMenuContent = useCallback((menuContent: string) => {
    setDrawerMenuSetting(menuContent);
  }, []);

  return (
    <>
      <nav className='sidebar-container'>
        <div className='flex flex-col w-full mt-4'>
          <ul>
            <li>
              <div
                className='menu-container'
                onMouseEnter={handleDrawerMenuClose}
              >
                <Link href='/' className='sidebar-link group'>
                  <HomeRounded className='icon-style group-hover:bg-opacity-70 group-hover:scale-105' />
                  <label className='label-style '>Home</label>
                </Link>
              </div>
            </li>
            <li>
              <div
                className='menu-container'
                onMouseEnter={handleDrawerMenuClose}
              >
                <Link href='/get-started' className='sidebar-link group'>
                  <AppsRounded className='icon-style group-hover:bg-opacity-70 group-hover:scale-105' />
                  <label className='label-style '>Get started</label>
                </Link>
              </div>
            </li>
            <li>
              <div
                className='menu-container'
                onMouseEnter={() => {
                  handleDrawerMenuHover();
                  handleDrawerMenuContent('Develop');
                }}
                onMouseLeave={handleDrawerMenuClose}
              >
                <Link href='/develop' className='sidebar-link group'>
                  <Code className='icon-style group-hover:bg-opacity-70 group-hover:scale-105' />
                  <label className='label-style '>Develop</label>
                </Link>
              </div>
            </li>
            <li>
              <div
                className='menu-container'
                onMouseEnter={() => {
                  handleDrawerMenuHover();
                  handleDrawerMenuContent('Foundations');
                }}
                onMouseLeave={handleDrawerMenuClose}
              >
                <Link href='/foundations' className='sidebar-link group'>
                  <BookOutlined className='icon-style group-hover:bg-opacity-70 group-hover:scale-105' />
                  <label className='label-style'>Foundations</label>
                </Link>
              </div>
            </li>
            <li>
              <div
                className='menu-container'
                onMouseEnter={() => {
                  handleDrawerMenuHover();
                  handleDrawerMenuContent('Styles');
                }}
                onMouseLeave={handleDrawerMenuClose}
              >
                <Link href='/styles' className='sidebar-link group'>
                  <PaletteOutlined className='icon-style group-hover:bg-opacity-70 group-hover:scale-105' />
                  <label className='label-style'>Styles</label>
                </Link>
              </div>
            </li>
            <li>
              <div
                className='menu-container'
                onMouseEnter={handleDrawerMenuClose}
              >
                <Link href='/login' className='sidebar-link group'>
                  <LockOpen className='icon-style group-hover:bg-opacity-70 group-hover:scale-105' />
                  <label className='label-style'>Login</label>
                </Link>
              </div>
            </li>
            <li>
              <div
                className='menu-container'
                onMouseEnter={handleDrawerMenuClose}
              >
                <Link href='/scroll' className='sidebar-link group'>
                  <SwipeVerticalOutlined className='icon-style group-hover:bg-opacity-70 group-hover:scale-105' />
                  <label className='label-style'>Scroll</label>
                </Link>
              </div>
            </li>
            <li>
              <div
                className='menu-container'
                onMouseEnter={handleDrawerMenuClose}
              >
                <Link href='/modal' className='sidebar-link group'>
                  <PriorityHigh className='icon-style group-hover:bg-opacity-70 group-hover:scale-105' />
                  <label className='label-style'>Modal</label>
                </Link>
              </div>
            </li>
            <li>
              <div
                className='menu-container'
                onMouseEnter={handleDrawerMenuClose}
              >
                <Link href='/toast' className='sidebar-link group'>
                  <InfoOutlined className='icon-style group-hover:bg-opacity-70 group-hover:scale-105' />
                  <label className='label-style'>toast</label>
                </Link>
              </div>
            </li>
          </ul>
        </div>

        <div className='mb-4 flex'>
          <DarkModeToggleButton />
        </div>
      </nav>

      <Drawer
        isDrawerOpen={isDrawerOpen}
        handleDrawerMenuHover={handleDrawerMenuHover}
        handleDrawerMenuClose={handleDrawerMenuClose}
        drawerMenuSetting={drawerMenuSetting}
      />
    </>
  );
}
