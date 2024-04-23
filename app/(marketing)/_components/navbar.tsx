"use client";

import { ModeToggle } from "@/components/shared/modeToggle/mode-toggle";
import { Spinner } from "@/components/shared/Spinner/spinner";
import { Button } from "@/components/ui/button";
import { useScrollUp } from "@/hooks/use-scroll-up";
import { cn } from "@/lib/utils";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import Link from "next/link";

const Navbar = () => {
  const scrolled = useScrollUp();
  const { isAuthenticated, isLoading } = useConvexAuth();

  return (
    <header
      className={cn(
        "fixed top-0 z-50 flex w-full items-center bg-background p-6",
        scrolled && "border-b shadow-sm",
      )}
    >
      {/* Logo */}
      <div className="flex w-full items-center justify-between gap-x-2 md:ml-auto md:justify-end">
        {isLoading && <Spinner size="md" />}
        {!isAuthenticated && !isLoading && (
          <>
            <SignInButton mode="modal">
              <Button variant="ghost" size="sm">
                Sign In
              </Button>
            </SignInButton>
            <SignInButton mode="modal">
              <Button size="sm">Get Jotion Free</Button>
            </SignInButton>
          </>
        )}
        {isAuthenticated && !isLoading && (
          <>
            <Button size="sm" variant="ghost" asChild>
              <Link href="/documents">Enter jotion</Link>
            </Button>
            <UserButton afterSignOutUrl="/" />
          </>
        )}
        <ModeToggle />
      </div>
    </header>
  );
};

export default Navbar;
