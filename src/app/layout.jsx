"use client"
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React, { useState } from "react";
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });
import Link from 'next/link'
import {
  Button, CodeBlock, Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip
} from "../components/index";


// className={`${geistSans.variable} ${geistMono.variable} antialiased`}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body

      >
        <div className="grid grid-cols-12 gap-0">
          <div className="col-span-3">
            <Card className="h-[100vh] w-full max-w-[20rem] pl-20 p-4 shadow-xl shadow-blue-gray-900/5 fixed overflow-scroll">
              <div className="mb-2 p-4">
                <Typography variant="h2" color="blue-gray" className="font-bold">
                  HeroUI <Chip className="text-sm" color="blue">Docs</Chip>
                </Typography>
              </div>
              <b>Getting Started</b>
              <List>

                <Link href={'/docs/installation'} className="w-full h-full">
                  <ListItem>Installation</ListItem>
                </Link>

                <Link href={'/docs/license'} className="w-full h-full">
                  <ListItem>License</ListItem>
                </Link>



              </List>
              <b>Forms</b>
              <List>
                <Link href={'/docs/checkbox'} className="w-full h-full">
                  <ListItem>Checkbox</ListItem>
                </Link>
                <Link href={'/docs/input'} className="w-full h-full">
                  <ListItem>Input</ListItem>
                </Link>
                <Link href={'/docs/input-number'} className="w-full h-full">
                  <ListItem>Input Number</ListItem>
                </Link>
                <Link href={'/docs/input-phone'} className="w-full h-full">
                  <ListItem>Input Phone</ListItem>
                </Link>
                <Link href={'/docs/radio-button'} className="w-full h-full">
                  <ListItem>Radio Button</ListItem>
                </Link>
                <Link href={'/docs/select'} className="w-full h-full">
                  <ListItem>Select</ListItem>
                </Link>
                <Link href={'/docs/switch'} className="w-full h-full">
                  <ListItem>Switch</ListItem>
                </Link>
                <Link href={'/docs/textarea'} className="w-full h-full">
                  <ListItem>Textarea</ListItem>
                </Link>

              </List>
              <b>Components</b>
              <List>

                <Link href={'/docs/alert'} className="w-full h-full">
                  <ListItem>Alert</ListItem>
                </Link>
                <Link href={'/docs/avatar'} className="w-full h-full">
                  <ListItem>Avatar</ListItem>
                </Link>
                <Link href={'/docs/badge'} className="w-full h-full">
                  <ListItem>Badge</ListItem>
                </Link>
                <Link href={'/docs/breadcrumbs'} className="w-full h-full">
                  <ListItem>Breadcrumbs</ListItem>
                </Link>
                <Link href={'/docs/button'} className="w-full h-full">
                  <ListItem>Button</ListItem>
                </Link>
                <Link href={'/docs/button-group'} className="w-full h-full">
                  <ListItem>Button Group</ListItem>
                </Link>
                <Link href={'/docs/card'} className="w-full h-full">
                  <ListItem>Card</ListItem>
                </Link>
                <Link href={'/docs/chip'} className="w-full h-full">
                  <ListItem>Chip</ListItem>
                </Link>
                <Link href={'/docs/collapse'} className="w-full h-full">
                  <ListItem>Collapse</ListItem>
                </Link>
                <Link href={'/docs/carousel'} className="w-full h-full">
                  <ListItem>Carousel</ListItem>
                </Link>
                <Link href={'/docs/dialog'} className="w-full h-full">
                  <ListItem>Dialog</ListItem>
                </Link>
                <Link href={'/docs/drawer'} className="w-full h-full">
                  <ListItem>Drawer</ListItem>
                </Link>
                <Link href={'/docs/footer'} className="w-full h-full">
                  <ListItem>Footer</ListItem>
                </Link>
                <Link href={'/docs/form'} className="w-full h-full">
                  <ListItem>Form</ListItem>
                </Link>
                <Link href={'/docs/gallery'} className="w-full h-full">
                  <ListItem>Gallery</ListItem>
                </Link>
                <Link href={'/docs/icon-button'} className="w-full h-full">
                  <ListItem>Icon Button</ListItem>
                </Link>
                <Link href={'/docs/image'} className="w-full h-full">
                  <ListItem>Image</ListItem>
                </Link>
                <Link href={'/docs/list'} className="w-full h-full">
                  <ListItem>List</ListItem>
                </Link>
                <Link href={'/docs/menu'} className="w-full h-full">
                  <ListItem>Menu</ListItem>
                </Link>
                <Link href={'/docs/mega-menu'} className="w-full h-full">
                  <ListItem>Mega Menu</ListItem>
                </Link>
                <Link href={'/docs/modal'} className="w-full h-full">
                  <ListItem>Modal</ListItem>
                </Link>
                <Link href={'/docs/navbar'} className="w-full h-full">
                  <ListItem>Navbar</ListItem>
                </Link>
                <Link href={'/docs/popover'} className="w-full h-full">
                  <ListItem>Popover</ListItem>
                </Link>
                <Link href={'/docs/progress-bar'} className="w-full h-full">
                  <ListItem>Progress Bar</ListItem>
                </Link>
                <Link href={'/docs/pagination'} className="w-full h-full">
                  <ListItem>Pagination</ListItem>
                </Link>
                <Link href={'/docs/rating-bar'} className="w-full h-full">
                  <ListItem>Rating Bar</ListItem>
                </Link>
                <Link href={'/docs/sidebar'} className="w-full h-full">
                  <ListItem>Sidebar</ListItem>
                </Link>
                <Link href={'/docs/skeleton'} className="w-full h-full">
                  <ListItem>Skeleton</ListItem>
                </Link>
                <Link href={'/docs/slider'} className="w-full h-full">
                  <ListItem>Slider</ListItem>
                </Link>
                <Link href={'/docs/speed-dial'} className="w-full h-full">
                  <ListItem>Speed Dial</ListItem>
                </Link>
                <Link href={'/docs/spinner'} className="w-full h-full">
                  <ListItem>Spinner</ListItem>
                </Link>
                <Link href={'/docs/stepper'} className="w-full h-full">
                  <ListItem>Stepper</ListItem>
                </Link>
                <Link href={'/docs/tabs'} className="w-full h-full">
                  <ListItem>Tabs</ListItem>
                </Link>
                <Link href={'/docs/table'} className="w-full h-full">
                  <ListItem>Table</ListItem>
                </Link>
                <Link href={'/docs/timeline'} className="w-full h-full">
                  <ListItem>Timeline</ListItem>
                </Link>
                <Link href={'/docs/tooltip'} className="w-full h-full">
                  <ListItem>Tooltip</ListItem>
                </Link>
                <Link href={'/docs/typography'} className="w-full h-full">
                  <ListItem>Typography</ListItem>
                </Link>
                <Link href={'/docs/video'} className="w-full h-full">
                  <ListItem>Video</ListItem>
                </Link>



              </List>
            </Card>
          </div>
          <div className="col-span-9  overflow-auto" style={{ height: "100hv !important" }}>{children}</div>


        </div>
        {/* <nav>
          <Link href={'/docs/button'}>Button</Link>
        </nav> */}

      </body>
    </html>
  );
}
