import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

import React from 'react'
import NormalText from "./text/normalText"
import { cn } from "@/lib/utils"

const ShopRedirectButton = ({ insideNavbar = false } : { insideNavbar?: boolean }) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <div className={cn(
          {
            "":
            insideNavbar,
            "font-Scripter bg-isness-primary text-white border border-isness-primary hover:bg-transparent hover:text-isness-primary px-6 md:px-8 py-2 transition-colors duration-300":
            !insideNavbar,
          }
        )}>
          <NormalText>{insideNavbar ? 'Shop' : 'Shop Now'}</NormalText>
        </div>
      </AlertDialogTrigger>
      <AlertDialogContent className="font-Scripter">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-center text-2xl text-isness-primary">
            Redirect Notice
          </AlertDialogTitle>
          <AlertDialogDescription className="text-lg">
            You are about to be redirected to our LINE QR code, where you can access our shop. Do you wish to continue?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="rounded-none py-2 px-4 md:px-6">Cancel</AlertDialogCancel>
          <AlertDialogAction className="bg-isness-primary rounded-none py-2 px-4 md:px-6">
            <a href="https://line.me/R/ti/p/@674uogcn?from=page&accountId=674uogcn"
                target="_blank">Proceed</a>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default ShopRedirectButton
